(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"./src/locales/gl.json":function(module){module.exports=JSON.parse('{"404":{"main":"Vai a {link} ou busca algo similar no seguinte campo.","title":"O contido que estás buscando parece que desapareceu."},"hero":{"disclaimer":{"license":"Licenza Creative Commons","content":"Todo o contido de {openverse} está baixo unha {license} ou é de dominio público."},"search":{"placeholder":"Buscar contidos"},"description":"Unha extensa biblioteca de fotos, imaxes e audios gratuítos, dispoñible para uso gratuíto.","subtitle":"Explora máis de 700 millóns de obras creativas","aria":{"searchType":"tipo de busca","search":"buscar"},"licenseFilter":{"label":"Quero algo que poida"}},"sensitiveContent":{"reasons":{"userReportedSensitive":"Usuarios de {openverse} informaron que este traballo é sensible.","sensitiveText":"{openverse} detectou texto potencialmente sensible.","providerSuppliedSensitive":"Marcouse como sensible á fonte deste traballo."},"singleResult":{"link":"Saber máis","learnMore":"{link} sobre cómo {openverse} xestiona o contido sensible.","explanation":"Este traballo marcouse como sensible polos seguintes motivos:","show":"Mostrar contido","hide":"Ocultar contido","title":"Contido sensible"},"creator":"Creador","title":{"audio":"Esta pista de audio pode conter contido sensible.","image":"Esta imaxe pode conter contido sensible."}},"filters":{"safeBrowsing":{"toggles":{"blurSensitive":{"desc":"Difumina imaxes e textos para evitar que se vexa material sensible.","title":"Difuminar o contido"},"fetchSensitive":{"desc":"Mostra resultados marcados como sensibles na área de resultados.","title":"Resultados sensibles"}},"sensitive":"sensible","desc":"O contido marcado como {sensitive} non se mostra por defecto.","title":"Navegación segura"},"audioExtensions":{"opus":"OPUS","oga":"OGA","mp3":"MP3","mid":"MID","webm":"WEBM","title":"Extensión","flac":"FLAC","ogg":"OGG","wav":"WAV"},"lengths":{"long":"> 10 minutos","medium":"2-10 minutos","short":"30 segundos - 2 minutos","shortest":"< 30 segundos","title":"Duración"},"audioCategories":{"sound_effect":"Efectos de son","news":"Noticias","audiobook":"Audiolibro","pronunciation":"Pronunciación","title":"Categoría de audio","podcast":"Podcast","sound":"Efectos de son","music":"Música"},"licenseExplanation":{"more":{"readMore":"Ler máis","mark":"{readMore} sobre {mark}.","license":"{readMore} sobre esta licenza."},"markDefinition":"Definición de {mark}","licenseDefinition":"Definición da licenza"},"licenses":{"title":"Licenzas","byNcNd":"BY-NC-ND","byNcSa":"BY-NC-SA","byNd":"BY-ND","byNc":"BY-NC","bySa":"BY-SA","by":"POR","pdm":"Marca de dominio público","cc0":"CC0"},"aria":{"removeFilter":"Eliminar o filtro {label}"},"licenseTypes":{"title":"Usar","modification":"Modificar ou adaptar","commercial":"Uso comercial"},"imageProviders":{"title":"Fonte"},"audioProviders":{"title":"Fonte"},"imageCategories":{"title":"Tipo de imaxe","digitized_artwork":"Obras de arte dixitalizadas","illustration":"Ilustracións","photograph":"Fotografías"},"imageExtensions":{"title":"Extensión","svg":"SVG","gif":"GIF","png":"PNG","jpg":"JPEG"},"aspectRatios":{"title":"Relación de aspecto","square":"Cadrado","wide":"Ancho","tall":"Alto"},"sizes":{"title":"Tamaño da imaxe","large":"Grande","medium":"Media","small":"Pequeno"},"mature":{"title":"Axustes de busca","enable":"Permitir contido para adultos"},"creator":{"title":"Buscar por creador"},"searchBy":{"creator":"Creador","title":"Buscar por"},"title":"Filtros","filterBy":"Filtrar por"},"searchGuide":{"combine":{"ariaLabels":{"precedence":"paréntese","prefix":"símbolo de asterisco","or":"símbolo de barra vertical","fuzziness":"tilde N","verticalBar":"símbolo de barra vertical","and":"símbolo de máis","not":"símbolo de menos","star":"simbolo de asterisco","close":"cerrar paréntese","open":"abrir paréntese"},"precedence":"{symbol} significa precedencia","title":"Combinando termos","fuzziness":"{symbol} despois dunha palabra significa distancia de edición (impreciso)","prefix":"{symbol} ao final dun termo significa un prefixo da consulta","not":"{symbol} nega un único token","or":"{symbol} significa unha operación OR","and":"{symbol} significa unha operación AND","description":"Se queres combinar termos, podes usar os seguintes operadores para realizar consultas máis complexas"},"exact":{"ariaLabel":"cita cerrar cita Claude Monet","title":"Buscar unha coincidencia exacta","content":"Pon unha palabra ou frase dentro de aspas. Por exemplo, {link}.","claudeMonet":"\\"Claude Monet\\""},"example":{"and":{"example":"can+gato","ariaLabel":"can máis gato","description":"Exemplo: {link}{br} Isto buscará imaxes relacionadas tanto con can como con gato."},"or":{"example":"can|gato","ariaLabel":"can barra vertical gato","description":"Exemplo: {link}{br} Isto buscará imaxes relacionadas con can ou gato, pero non necesariamente con ambos."},"negate":{"example":"can -carlino","ariaLabel":"can menos carlino","description":"Podes usar {operator} para excluír un termo de busca dos resultados.","content":"Exemplo: {link}{br} Isto buscará imaxes relacionadas con cans pero non incluirá resultados relacionados con «carlino»","operatorAriaLabel":"operador menos (significa NON)","operatorName":"operador (significa NON)"},"prefix":{"example":"rede*","ariaLabel":"rede estrela símbolo","content":"Exemplo: {link}{br} Isto buscará imaxes que coincidan co que sexa con «net». Isto podería incluír «network», «Netflix», «Netherlands», etc.","operatorAriaLabel":"operador de estrela (comodín)","operatorName":"operador (comodín)","description":"Podes usar o {operatorName} para marcar un termo como prefixo. Isto coincidirá con calquera cousa despois do *."},"precedence":{"example":"cans + (corgis | labrador)","ariaLabel":"cans máis abre paréntese corgis barra vertical labrador pecha paréntese","description":"Podes usar paréntese {highlight} para especificar a precedencia dos termos ou combinar consultas máis complexas","content":"Exemplo: {link}{br} Isto buscará imaxes que coincidan con cans que sexan corgis ou labrador."},"fuzziness":{"example":"teatro~1","ariaLabel":"teatro tilde 1","content":"Exemplo: {link}{br} Isto buscará imaxes con cadeas que coincidan co termo «teatro» coa diferenza dun carácter. Os resultados poden incluír termos con distintas variantes como «teator».","linkText":"Distancia de edición Levenshtein","description":"Podes usar {highlight} para especificar algunha lóxica difusa ao termo segundo {link} — o número de cambios dun carácter que hai que facer a unha cadea para que sexa igual a outra."}},"title":"Guía de sintaxe de {openverse}","intro":"Cando buscas, podes introducir símbolos especiais ou palabras ao teu termo de busca para facer que os teus resultados de busca sexan máis precisos."},"notification":{"analytics":{"close":"Pecha o banner de aviso da analítica.","link":"a páxina de privacidade","text":"Openverse utiliza analítica para mellorar a calidade do noso servizo. Visita {link} para obter máis información ou desactivala."},"translation":{"close":"Pechar o banner de solicitude de axuda para contribuír coa tradución","link":"contribuíndo na tradución","text":"A tradución para a configuración rexional {locale} está incompleta. Axúdanos a acadar o 100% {link}."}},"prefPage":{"groups":{"analytics":{"desc":"{openverse} utiliza analíticas anónimas para mellorar o noso servizo. Non recompilamos ningunha información que se poida utilizar para identificarte persoalmente. Sen embargo, se prefires non participar, podes anular a aceptación aquí.","title":"Analítica"}},"features":{"analytics":"Rexistra eventos personalizados e páxinas vistas para a análise."},"nonSwitchable":{"desc":"Non podes modificar o estado destas características.","title":"Características que non se poden cambiar."},"switchable":{"desc":"Podes activar ou desactivar estas características ao teu gusto e as túas preferencias gardaranse nunha cookie.","title":"Características que se poden cambiar"},"explanation":"Mostrado porque {featName} é {featState}","contentFiltering":"Filtrado de contido","storeState":"Provincia da tenda","title":"Preferencias"},"browsePage":{"contentLink":{"audio":{"countMore":"Ver máis de {localeCount} audios encontrados para {query}.","count":"Ver {localeCount} audio encontrado para {query}.","zero":"Ningún audio encontrado para {query}."},"image":{"countMore":"Ver máis de {localeCount} imaxes encontradas para {query}.","count":"Ver {localeCount} imaxe encontrada para {query}.|Ver {localeCount} imaxes encontradas para {query}.","zero":"Ningunha imaxe encontrada para {query}."}},"aria":{"audioTitle":"Audio: {title}","imageTitle":"Imaxe: {title}","results":"Resultados da busca para {query}.","creator":"buscar por creador","licenseExplanation":"explicación da licenza","search":"buscar","close":"cerrar","relevance":{"no":"resultado relevante? resposta: non","yes":"resultado relevante? resposta: si"},"removeFilter":"quitar filtro","scroll":"scroll ao inicio"},"searchForm":{"clear":"Baleirar","model3d":"Modelos 3D","button":"Buscar","all":"contido","video":"vídeos","audio":"audio","image":"imaxes","placeholder":"Buscar todo {type}","collectionPlaceholder":"Busca nesta colección"},"loading":"Cargando…","licenseDescription":{"samplingPlus":"Permítense mostras, misturas e transformacións creativas.","pd":"Este traballo está marcado como de dominio público.","zero":"Este traballo marcouse como dedicado ao dominio público.","by":"Recoñecer ao creador.","title":"Licenza CC","sa":"Comparte as adaptacións baixo os mesmos termos.","nd":"Non se permiten derivados nin adaptacións.","nc":"Só para uso non comercial."},"searchRating":{"content":"Son estes resultados relevantes?","feedbackThanks":"Grazas polos teus comentarios!","no":"No","yes":"Sí"},"allResultCount":"{localeCount} resultado|{localeCount} resultados","allNoResults":"Non hai resultados","fetchingError":"Erro ao recuperar {type}:","load":"Cargar máis resultados","allResultCountMore":"Máis de {localeCount} resultados"},"audioTrack":{"ariaLabel":"Audio: {title}","close":"Pecha o reprodutor de audio","messages":{"err_unknown":"Ocorreu un erro inesperado. Volve a intentalo nuns minutos ou informa do erro se o problema persiste.","err_unallowed":"Reprodución non permitida.","loading":"Cargando...","err_unsupported":"Este formato de audio non é compatible co teu navegador.","err_decode":"Non se puido decodificar o audio.","err_network":"Ocorreu un erro de rede.","err_aborted":"Abortaches a reprodución."},"ariaLabelInteractiveSeekable":"Audio: {title} - reprodutor interactivo - preme a barra de espazo para reproducir, pausar e previsualizar o audio; usa as teclas de frecha esquerda e dereita para buscar na pista.","ariaLabelInteractive":"{title} - Reprodutor interactivo - Preme a barra de espazo para reproducir e pausar unha mostra do audio","creator":"por {creator}"},"modal":{"closeBanner":"Pechar o banner","closePagesMenu":"Pechar o menú de páxinas","closeContentSettings":"Pechar o menú de axustes de contido","ariaClose":"Cerrar a ventá emerxente","closeNamed":"Pechar {name}","close":"Pechar"},"header":{"homeLink":"Inicio de {openverse}","contentSettingsButton":{"withCount":"Menú. Aplicouse {count} filtro|Menú. Aplicáronse {count} filtros","simple":"Menú"},"backButton":"Volver atrás","seeResults":"Ver resultados","filterButton":{"withCount":"{count} filtro|{count} filtros","simple":"Filtros"},"loading":"Cargando...","aria":{"search":"buscar","srSearch":"botón de busca","menu":"menú","primary":"principal"},"placeholder":"Buscar todos os contidos","notification":{"okay":"Aceptar","dismiss":"Descartar","text":"{example_notification_text}"},"resourcesTab":"Recursos","aboutTab":"Acerca de"},"privacy":{"contact":{"chat":"Chat de Making WordPress","issue":"Incidencia de GitHub","title":"Contacta con nós","content":"Calquera pregunta sobre {openverse} e a privacidade pode enviarse a {email}, compartirse como unha {issue} ou discutirse coa nosa comunidade na canle #openverse do {chat}."},"cookies":{"title":"Cookies","content":"{openverse} usa cookies para almacenar a información sobre as preferencias dos visitantes e a información sobre os seus navegadores web. Usamos esta información para mellorar a experiencia de usuario deste sitio. Estas considéranse cookies «necesarias» ou «estritamente necesarias» e podes desactivalas cambiando os axustes do teu navegador, pero podería afectar a como funciona {openverse}."},"intro":{"link":"política de privacidade de todas as webs de WordPress.org","content":"O proxecto {openverse} trata facer da privacidade e da seguridade dos seus usuarios unha prioridade. {openverse} adhírese a {link}. Por favor, consulta este documento para unha descrición completa de como {openverse} usa e protexe calquera información que nos das."},"title":"Privacidade"},"report":{"imageDetails":"Ver detalles da imaxe"},"searchType":{"selectLabel":"Selecciona un tipo de contido: {type}","additional":"Proximamente","model3d":"Modelos 3D","statusBeta":"Beta","heading":"Tipo de contido","label":"Tipo de contido a buscar","all":"Todo o contido","seeAudio":"Ver todos os audios","seeImage":"Ver todas as imaxes","video":"Vídeos","audio":"Audio","image":"Imaxes"},"footer":{"wordpressAffiliation":"Parte do proxecto {wordpress}","wip":"🚧"},"filterList":{"clearNumbered":"Baleirar filtros ({number})","filterBy":"Filtrar por","categoryAria":"lista de filtros para a categoría {categoryName}","show":"Amosar resultados","clear":"Baleirar filtros","hide":"Ocultar filtros"},"recentSearches":{"clear":{"label":"Baleirar buscas recentes","text":"Baleirar"},"disclaimer":"Openverse non almacena as túas buscas recentes, esta información gárdase localmente no teu navegador.","none":"Non hai buscas recentes para mostrar.","heading":"Buscas recentes"},"externalSourcesPage":{"new":{"email":"Correo electrónico","issue":"problema","title":"Podo suxerir novas fontes externas?","content":"Si, por favor! Crea unha {issue} no noso repositorio de GitHub ou envíanos un {email} e dinos que novas fontes che gustaría ver incluídas."},"why":{"feedbackLink":"resposta","ariaLabel":"resposta","old":"oldsearch.creativecommons.org","content":"Durante moitos anos, Creative Commons ofreceu aos seus usuarios un portal para buscar en plataformas que teñen filtros de licenza CC incorporados. De feito, aínda se mantén en {old}.","title":"Por que creastes isto?","feedbackSuggestions":"Esperamos que goces e, se tes suxestións para mellorar, déixanos o teu {feedback}.","new":"Aos usuarios do antigo sitio de busca meta de CC, a característica de busca en «fontes externas» de {openverse} resultaralles familiar. O obxectivo era garantir que a funcionalidade non se perdera, senón que estea actualizada e integrada no noso novo motor de busca de contidos con licenza aberta. Ademais, a funcionalidade de busca en «fontes externas» baséase nesta funcionalidade, permitíndonos engadir rapidamente novas fontes a medida que as descubrimos, e ser compatibles con novos tipos de contido no futuro, a medida que vaiamos crecendo."},"explanation":"Podes atopar ligazóns a fontes externas na parte inferior de cada páxina de resultados de busca de {openverse} en páxinas para buscas que non devolven resultados; e en páxinas para tipos de medios que aínda non admitimos pero que pretendemos.","relationships":"Esta funcionalidade tamén permítenos iniciar conversas e establecer relacións con fontes que lles gustaría incluír en {openverse} no futuro. Por último, tamén podemos ofrecer fontes externas de tipos de medios que aínda non incluímos en {openverse}, pero que pensamos facelo.","license":"Non obstante, hai moitas fontes de medios con licenza CC e de dominio público das que aínda non podemos mostrar resultados na interface {openverse}. Isto pode deberse a que non ofrecen unha API pública ou a que os nosos colaboradores aínda non tiveron tempo de integralos en Openverse. Estas son fontes valiosas e queremos asegurarnos de que podes atopar os mellores materiais con licenza aberta posible, independentemente de onde estean.","link":"fontes aqui","title":"Fontes externas","intro":"{openverse} está baseado nun catálogo que indexa contidos con licenza CC e de dominio público de fontes seleccionadas. Máis información sobre as nosas {link}."},"externalSources":{"form":{"types":{"model3d":"Modelos 3D","video":"vídeo","audio":"audio","image":"imaxe"},"typesPlural":{"video":"vídeos","audio":"audios","image":"imaxes","model3d":"Modelos 3D"},"caption":"Fai clic nunha fonte a continuación para buscar directamente outras coleccións de {type} con licenza CC.","noResultsTitle":"Ningún resultado de {type} para «{query}».","supportedTitle":"Non encontras o que buscas? Proba unha fonte externa:","unsupportedTitle":"{openverse} aínda non é compatible coa busca integrada de {type}."},"title":"Fontes externas","button":"Lista de fontes","caption":"{openverse} non pode garantir a precisión da información das licenzas. Verifica sempre que a obra estea realmente baixo unha licenza CC.","card":{"caption":"Fai clic nunha fonte de abaixo para buscar directamente outras coleccións de imaxes con licenza CC.{break}Por favor, ten en conta que os filtros de uso non son compatibles coa biblioteca de Open Clip Art ou Nappy.","search":"Non encontras o que buscas? Proba fontes externas."}},"navigation":{"searchHelp":"Axuda de Busca","externalSources":"Fontes externas","sources":"Orixes","feedback":"Suxerencias","privacy":"Privacidade","api":"API","getInvolved":"Involúcrate","licenses":"Licenzas","about":"Acerca de"},"about":{"planning":{"frontend":"Portada de {openverse}","api":"API de {openverse}","working":"agora estamos traballando en","community":"as contribucións á comunidade son benvidas","catalog":"Catálogo de {openverse}","content":"Agora {openverse} só busca imaxes e audio, mentres que a busca de vídeo é proporcionada a través de fontes externas. Pero planeamos engadir tipos de medios adicionais, como textos abertos e modelos 3D, co obxectivo final de proporcionar acceso á totalidade de 2.500 millóns de obras con licenza CC e de dominio público da web. Todo o noso código é código aberto ({frontend}, {api}, {catalog}) e a nosa {community}. Podes ver en que {working}."},"title":"Sobre {openverse}","declaration":{"terms":"Termos de uso de {openverse}","content":"Por favor, ten en conta que {openverse} non verifica se as imaxes teñen a debida licenza CC ou se a atribución e outra información de licenza que engadimos é precisa ou completa. Por favor, verifica pola túa conta o estado da licenza e a información de atribución antes de reutilizar o contido. Para máis detalles, le os {terms}."},"transfer":{"content":"{openverse} é o sucesor de CC Search, que Creative Commons lanzou en 2019, trala súa migración a WordPress en 2021. Podes ler máis sobre esta transición nos anuncios oficiais de {creativeCommons} e {wordpress}. Seguimos comprometidos co noso obxectivo de abordar o descubrimento e a accesibilidade dos medios de acceso aberto."},"collection":{"content":"{openverse} busca entre máis de 300 millóns de imaxes en APIs abertas e do conxunto de datos de {commonCrawl}. Vai máis alá da simple busca para engadir os resultados a través de múltiples repositorios públicos nun só catálogo e facilita a reutilización a través de características como as etiquetas autoxeradas e a atribución cun só clic."},"description":{"content":"{openverse} é unha ferramenta que permite descubrir obras con licenza aberta e de dominio público para ser usadas por todos."}},"language":{"language":"Idioma"},"mediaDetails":{"reuse":{"description":"Visita a web de {media} para descargalo e usalo. Asegúrate de recoñecer ao creador mostrando a información de atribución onde esteas compartindo o teu traballo. ","title":"Como se usa","credit":{"actualTitle":"«{title}»","genericTitle":"Esta obra","text":"{title} {creator} {markedLicensed} {license}. {viewLegal}","copyText":"unha copia desta licenza","termsText":"os termos","viewLegalText":"Para ver os {termsCopy}, visita {url}.","licensed":"está baixo a licenza","marked":"está marcado con","creatorText":" por {creatorName}"},"copyLicense":{"copied":"Copiado!","copyText":"Copiar texto","title":"Recoñecer ao creador","plain":"Texto sen formato","html":"HTML","rich":"Texto enriquecido"},"tool":{"link":"aquí","content":"Le máis sobre a ferramenta {link}."},"image":"Imaxe","audio":"Audio","attribution":"Esta imaxe marcouse cunha licenza {link}:","toolHeader":"Dominio público","licenseHeader":"Licenza"},"contentReport":{"short":"Informar","form":{"dmca":{"open":"Abrir o formulario","form":"Formulario DMCA","note":"Debes encher este {form} para informar da infracción do copyright. Non se realizará ningunha acción ata que este formulario se encha e envíe. Recomendamos facer o mesmo na fonte, {source}.","option":"Infrinxe o copyright"},"mature":{"placeholder":"Opcionalmente, proporciona unha descrición.","subLabel":"Opcional","option":"Contén contido para adultos"},"other":{"placeholder":"Por favor, introduce polo menos 20 caracteres.","subLabel":"Obrigatorio","note":"Describe o problema.","option":"Outra"},"cancel":"Cancelar","question":"Cal é a razón?","submit":"Informar","disclaimer":"Por motivos de seguridade, {openverse} recompila e retén direccións IP anónimas dos que completan e envían este formulario."},"success":{"note":"Grazas por informar deste contido. Recomendamos facer o mesmo na fonte, {source}.","title":"Informe enviado correctamente"},"failure":{"note":"Algo saíu mal. Por favor, inténtao de novo máis tarde.","title":"Non se puido enviar o informe"},"long":"Informar deste contido"},"aria":{"creatorUrl":"autor {name}","attribution":{"tool":"le máis sobre a ferramenta","license":"le máis sobre a licenza"}},"audioInfo":"Información de audio","imageInfo":"Información da imaxe","loading":"Cargando...","relatedError":"Erro ao recuperar os medios relacionados","sourceLabel":"Fonte","providerLabel":"Provedor"},"allResults":{"snackbar":{"spacebar":"Barra espazadora","text":"Preme a {spacebar} para reproducir ou pausar a pista."}},"audioResults":{"snackbar":{"right":"→","left":"←","spacebar":"Barra espazadora","text":"Preme a {spacebar} para reproducir ou pausar, e {left} e {right} para buscar a través da pista."}},"imageDetails":{"weblink":"Usar esta imaxe","information":{"unknown":"Descoñecido","title":"Información da imaxe","source":"Fonte","provider":"Provedor","pixels":"píxeles","dimensions":"Dimensións","type":"Tipo"},"creator":"por {name}","aria":{"creatorUrl":"Autor {creator}"},"relatedImages":"Imaxes relacionadas"},"audioDetails":{"weblink":"Usar este audio","information":"Información de audio","table":{"source":"Fonte","provider":"Provedor","genre":"Xénero","filetype":"Formato","sampleRate":"Taxa de mostreo","category":"Tipo","album":"Álbum"},"relatedAudios":"Audios relacionados","genreLabel":"Xénero"},"playPause":{"loading":"Cargando","replay":"Volver a reproducir","pause":"Pausar","play":"Reproducir"},"search":{"searchBarLabel":"Busca de contido en {openverse}","search":"Buscar"},"flagStatus":{"off":"Inactivo","on":"Activo","nonexistent":"Inexistente"},"sketchfabIframeTitle":"Visor {sketchfab}","sources":{"heading":{"audio":"Fontes de audio","image":"Fontes de imaxes"},"aria":{"table":"táboa de fontes"},"title":"Fontes","providers":{"source":"Fonte","item":"Total de elementos","domain":"Dominio"},"issueButton":"Suxire unha nova fonte","suggestions":"Apreciamos suxerencias de novas fontes por parte da nosa comunidade de usuarios.","newContent":{"totalItems":"Cantos novos elementos totais ou novos tipos de elementos podemos achegar aos nosos usuarios a través desta integración? Algunhas fontes son integracións directas, mentres que outras poden ser unha fonte dentro doutra fonte.","reuse":"Móstrase claramente a información sobre a licenza e a atribución para permitir unha reutilización segura?","impact":" Cal é o impacto ou a importancia desta fonte para os nosos usuarios? Se existe dentro dun provedor como Wikimedia Commons, é valioso para os nosos usuarios poder filtrar por esta fonte directamente?","integrate":"Temos unha lista interminable de posibles fontes para investigar antes da integración. Facémonos preguntas como:","next":"Como decidimos cales serán as seguintes fontes a engadir?"},"ccContent":{"smithsonian":"Instituto Smithsonian","europeanaApi":"API de Europeana","europeana":"{openverse} agradece especialmente o traballo de {link}, unha organización que traballa para dixitalizar e difundir obras do patrimonio cultural en toda Europa. {openverse} pode indexar centos de valiosas fontes a través dunha única integración coa {linkApi}.","provider":"Algúns provedores teñen varias agrupacións diferentes de contido dentro deles. {flickr} ten fontes que van desde a NASA ata a fotografía persoal. O {smithsonian} comprende unha ducia de coleccións diversas. Wikimedia Commons abarca toda a gama de contidos e é utilizado por varias galerías, bibliotecas, arquivos e museos para destacar algunhas ou todas as súas coleccións dixitalizadas.","content":"Hai contidos con licenza aberta aloxados en millóns de dominios en toda a extensión de Internet. O noso equipo identifica sistematicamente aos provedores que aloxan contidos con licenza CC. Se son adecuados, indexámolos e facémolos accesibles a través de {openverse}.","where":"De onde proceden os contidos de {openverse}?"},"singleName":"Fonte","detail":"Facer clic nun {singleName} permíteche explorar e filtrar elementos dentro desa fonte."},"licenseReadableNames":{"ncSampling+":"Sampling Plus Non Comercial","sampling+":"Sampling Plus","byNcNd":"Recoñecemento-NonComercial-SenObraDerivada","byNcSa":"Recoñecemento-NonComercial-CompartirIgual","byNd":"Recoñecemento-SenObraDerivada","byNc":"Recoñecemento-NonComercial","bySa":"Recoñecemento-CompartirIgual","by":"Recoñecemento","pdm":"Marca de dominio público","cc0":"Cero"},"errorImages":{"waitingForABite":"Tres rapaces sentados nun tronco roto mentres dous deles pescan.","depressedMusician":"Un pianista deprimido descansa a cabeza nas súas mans."},"noResults":{"alternatives":"Intenta unha consulta diferente ou usa unha das fontes externas para ampliar a túa busca.","heading":"Non puidemos encontrar nada para «{query}»."},"serverTimeout":{"heading":"Vaia! Parece que esa petición tarda demasiado en completarse. Por favor, inténtao de novo."},"skipToContent":"Saltar ao contido","feedback":{"title":"Comentarios","aria":{"report":"formulario para informar dun fallo","improve":"formulario para axudarnos a mellorar","ccUsability":"canle de slack de cc-usability"},"loading":"Cargando...","report":"Informar dun fallo","improve":"Axúdanos a mellorar","intro":"Grazas por usar {openverse}! Agradecemos as túas ideas para mellorar a ferramenta. Para ofrecer suxerencias normais, únete á canle de {slack} no espazo de traballo {makingWordpress} de Slack."},"waveform":{"label":"Barra de busca de audio","currentTime":"{time} segundos|{time} segundos"},"audioThumbnail":{"alt":"Cuberta para «{title}» de {creator}"},"downloadButton":{"download":"Descargar","aria":{"dropdownLabel":"Selecciona o formato de arquivo para descargar"}},"interpunct":"•","error":{"audio":"audio","image":"imaxe","mediaNotFound":"Non se puido encontrar {mediaType} con ID {id}","imageNotFound":"Non se puido encontrar a imaxe co id {id}","occurred":"Ocorreu un erro"},"dropdownButton":{"aria":{"arrowLabel":"Despregable"}},"browsers":{"edge":"Edge","opera":"Opera","firefox":"Firefox","chrome":"Chrome"},"singleResult":{"back":"Volver aos resultados da busca"}}')}}]);