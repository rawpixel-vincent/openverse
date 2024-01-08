from dataclasses import dataclass, field
from datetime import timedelta

from es.recreate_staging_index.recreate_full_staging_index import (
    DAG_ID as RECREATE_STAGING_INDEX_DAG_ID,
)

from common.constants import PRODUCTION, STAGING
from data_refresh.data_refresh_types import DATA_REFRESH_CONFIGS
from database.staging_database_restore.constants import (
    DAG_ID as STAGING_DB_RESTORE_DAG_ID,
)


@dataclass
class CreateNewIndex:
    """
    Configuration object for the create_new_es_index DAG.

    Required Constructor Arguments:

    environment:   str representation of the environment in which to create
                   the new index
    blocking_dags: list of dags with which to prevent concurrency; the
                   generated create_new_es_index dag will fail immediately if
                   any of these dags are running.
    """

    dag_id: str = field(init=False)
    environment: str
    blocking_dags: list
    reindex_timeout: timedelta = timedelta(hours=12)

    def __post_init__(self):
        self.dag_id = f"create_new_{self.environment}_es_index"


CREATE_NEW_INDEX_CONFIGS = {
    STAGING: CreateNewIndex(
        environment=STAGING,
        blocking_dags=[RECREATE_STAGING_INDEX_DAG_ID, STAGING_DB_RESTORE_DAG_ID],
    ),
    PRODUCTION: CreateNewIndex(
        environment=PRODUCTION,
        blocking_dags=(
            # Block on all the data refreshes
            [data_refresh.dag_id for data_refresh in DATA_REFRESH_CONFIGS.values()]
            + [  # Block on the filtered index creation DAGs
                data_refresh.filtered_index_dag_id
                for data_refresh in DATA_REFRESH_CONFIGS.values()
            ]
        ),
    ),
}
