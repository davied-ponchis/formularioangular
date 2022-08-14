/*! 
* Bootstrap v5.2.0 (https://getbootstrap.com/) 
* Copyright 2011-2022 Los autores de Bootstrap (https://github.com/twbs/bootstrap/graphs/contributors) 
* Con licencia del MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE) 
 */ 
!  función ( t ,  e )  {  "objeto"  ==  &&  exportaciones  tipo  "indefinido"  !=  tipo de  módulo ? módulo _ exportaciones  =  e ( ) : "función"  ==  typeof  define  &&  define . amd ? define ( e ) : ( t  =  "indefinido"  !=  globalThis  globalThis ? tipo : t  ||  self ) . bootstrap  =  e ( )  } ( this ,  ( function ( )  {  "use strict" ;  const  t  =  "transitionend" , 
        e  =  t  =>  {  sea  .  =  t mi getAttribute ( "datos-bs-objetivo" ) ;  si  ( ! mi  ||  "#"  ===  mi )  {  sea  yo  =  t . getAttribute ( "href" ) ;  if  ( ! i  ||  ! i . incluye ( "#" )  &&  ! i . empieza con ( "." ) )  return  null ; 
                yo _ incluye ( "#" )  &&  ! yo _ comienza con ( "#" )  &&  ( i  =  `# ${ i . split ( "#" ) [ 1 ] } ` ) ,  e  =  i  &&  "#"  !==  i ? yo _ recortar ( ) : nulo  }  devolver  e  } , 
        yo  =  t  =>  {  constante  yo  =  mi ( t ) ;  devolver  i  &&  documento . querySelector ( i ) ? yo : nulo  } , 
        t  =  norte  =>  {  constante  yo  =  mi ( t ) ;  regreso  yo ? documento _ selector de consulta ( i ) : nulo  } , 
        s  =  mi  =>  {  mi . DispatchEvent ( nuevo  Evento ( t ) )  } , 
        o  =  t  =>  ! ( ! t  ||  "objeto"  !=  &&  t )  &&  ( void  0  !==  t . jquery  =  ( t  tipo  t [ 0 ] ) ,  void  0  !==  t . nodeType ) , 
        r  =  t  =>  o ( t ) ? t . jquery ? t [ 0 ] : t : "cadena"  ==  &&  t  tipo  t . longitud  >  0 ? documento _ selector de consulta ( t ) : nulo , 
        a  =  t  =>  {  if  ( ! o ( t )  ||  0  ===  t . getClientRects ( ) . length )  return  ! 1 ;  const  e  =  "visible"  ===  getComputedStyle ( t ) . getPropertyValue ( "visibilidad" ) , 
                yo  =  t . más cercano ( "detalles: no ([abrir])" ) ;  si  ( ! i )  devuelve  e ;  si  ( yo  !==  t )  {  const  mi  =  t . más cercano ( "resumen" ) ;  if  ( e  &&  e . parentNode  !==  i )  return  ! 1 ;  si  ( nulo  ===  e )  regresa  ! 1  }  devolver  e  } , 
        l  =  t  =>  ! t  ||  t . tipo de nodo  !==  Nodo . NODO_ELEMENTO  ||  ! ! t . listaclases . contiene ( "deshabilitado" )  ||  ( void  0  !==  t . disabled ? t . disabled : t . hasAttribute ( "disabled" )  &&  "false"  !==  t . getAttribute ( "disabled" ) ) , 
        c  =  t  =>  {  if  ( ! documento . documentoElemento . adjuntarSombra )  devuelve  nulo ;  if  ( "función"  ==  getRootNode  t . tipo )  {  const  e  =  t . obtenerNodoRaíz ( ) ;  devolver  ShadowRoot  instancia  la ? e : null  }  return  t  instancia  de ShadowRoot ? t : t . padreNodo ? c ( t . parentNode ) : null  } , 
        h  =  ( )  =>  { } , 
        re  =  t  =>  {  t . compensación  } , 
        u  =  ( )  =>  ventana . jQuery  &&  ! documento _ cuerpo _ hasAttribute ( "data-bs-no-jquery" ) ? ventana _ jQuery : nulo , 
        f  =  [ ] , 
        p  =  ( )  =>  "rtl"  ===  documento . documentoElemento . dirección , 
        g  =  t  =>  {  var  e ; 
            e  =  ( )  =>  {  const  e  =  u ( ) ;  si  ( mi )  {  constante  yo  =  t . NOMBRE , 
                        n  =  mi . fn [ yo ] ; 
                    mi . fn [ yo ]  =  t . jQueryInterface ,  p . fn [ yo ] . Constructor  =  t ,  e . fn [ yo ] . noConflict  =  ( )  =>  ( e . fn [ i ]  =  n ,  t . jQueryInterface )  }  } ,  "cargando"  ===  documento . estado listo ? ( f . longitud  ||  documento . addEventListener ( "DOMContentLoaded" ,  ( ( )  =>  {  for  ( const  t  of  f )  t ( )  } ) ) ) ,  f . push ( e ) ) : e ( )  } , 
        m  =  t  =>  {  "función"  ==  &&  t  tipo  t ( )  } , 
        _  =  ( e ,  i ,  n  =  ! 0 )  =>  {  if  ( ! n )  return  void  m ( e ) ;  const  o  =  ( t  =>  {  if  ( ! t )  devuelve  0 ;  let  {  TransitionDuration : e ,  TransitionDelay : i  }  =  window . getComputedStyle ( t ) ;  const  n  =  Number . parseFloat ( e ) , 
                    s  =  Número . parseFloat ( i ) ;  devolver  n  ||  s ? ( e  =  e . dividir ( "," ) [ 0 ] ,  i  =  i . dividir ( "," ) [ 0 ] ,  1e3  *  ( Número . parseFloat ( e )  +  Número . parseFloat ( i ) ) ) : 0  } ) ( yo )  +  5 ;  sea  ​​r  =  ! 1 ;  const  a  =  ( {  target : n  } )  =>  {  n  ===  i  &&  ( r  =  ! 0 ,  i . removeEventListener ( t ,  a ) ,  m ( e ) )  } ; 
            yo _ addEventListener ( t ,  a ) ,  setTimeout ( ( ( )  =>  {  r  ||  s ( i )  } ) ,  o )  } , 
        segundo  =  ( t ,  mi ,  yo ,  norte )  =>  {  constante  s  =  t . longitud ;  sea  ​​o  =  t . índiceDe ( e ) ;  retorno  - 1  ===  o ? ! yo  & &  n ? t [ s  -  1 ] : t [ 0 ] : ( o  +=  i ? 1 : - 1 ,  n  &&  ( o  =  ( o  +  s )  %  s ) ,  t [ Math . max ( 0 ,  Math . min ( o ,  s  -  1 ) ) ] )  } , 
        v  =  / [ ^. ] * (? = \. . * ) \. | . * / , 
        y  =  / \. . * / , 
        w  =  / :: \d + $ / , 
        A  =  { } ;  Sea  E  =  1 ;  const  T  =  {  mouseenter : "mouseover" ,  mouseleave : "mouseout"  } , 
        C  =  nuevo  conjunto ( [ "clic" ,  "dblclick" ,  "mouseup" ,  "mousedown" ,  "contextmenu" ,  "mousewheel" ,  "DOMMouseScroll" ,  "mouseover" ,  "mouseout" ,  "mousemove" ,  "selectstart" ,  "seleccionar" ,  "pulsar ,  tecla" ,  arriba" ,  "cambio de orientación" ,  "tocar inicio" ,  "tocar mover" ,  "tocar fin" ,  "tocar cancelar" ,  "puntero abajo" ,  "puntero mover" ,  "puntero arriba" ,  "puntero dejar" " ,  "pointercancel" ,  "gesturestart" ,  "gesturechange" ,  "gestureend" ,  "focus" ,  "blur" ,  "change" ,  "reset" ,  "select" ,  "submit" ,  "focusin" ,  "focusout" ,  "cargar" ,  "descargar" ,  "antes ,  "redimensionar" ,  "mover" ,  "DOMContentLoaded" ,  "readystatechange" ,  "error" ,  "abortar" ,  "desplazarse" ] ) ; 

    función  O ( t ,  e )  {  return  e  &&  ` ${ e } :: ${ E ++ } `  ||  t . eventouid  ||  E ++  } 

    función  x ( t )  {  constante  _  =  O ( t ) ;  volver  t _ uidEvent  =  e ,  A [ e ]  =  A [ e ]  ||  { } ,  A [ e ]  } 

    función  k ( t ,  e ,  i  =  nulo )  {  retorno  objeto . valores ( t ) . encontrar ( ( t  =>  t . invocable  ===  e  &&  t . delegaciónSelector  ===  i ) )  } 

    función  L ( t ,  e ,  i )  {  const  n  =  "cadena"  ==  tipo  e , 
            s  =  norte ? yo : mi  ||  yo ;  sea  ​​o  =  N ( t ) ;  volver  c _ tiene ( o )  ||  ( o  =  t ) ,  [ norte ,  s ,  o ]  } 

    function  D ( t ,  e ,  i ,  n ,  s )  {  if  ( "string"  !=  typeof  e  ||  ! t )  return ;  sea  ​​[ o ,  r ,  a ]  =  L ( e ,  i ,  n ) ;  if  ( e  in  T )  {  const  t  =  t  >  function ( e )  {  if  ( ! e . relatedTarget  ||  e . relatedTarget  !  e . _  _  _ _ _ _ _ _ _ _ _ _ _ _  ==  = . llamar ( esto ,  e )  } ; 
            r  =  t ( r )  }  constante  l  =  x ( t ) , 
            c  =  l [ un ]  ||  ( l [ un ]  =  { } ) , 
            h  =  k ( c ,  r ,  o ? yo : nulo ) ;  if  ( h )  return  void ( h . oneOff  =  h . oneOff  &&  s ) ;  constante  d  =  O ( r ,  e . reemplazar ( v ,  "" ) ) , 
            tu  =  o ? function ( t ,  e ,  i )  {  return  function  n ( s )  {  const  o  =  t _ querySelectorAll ( e ) ;  for  ( let  {  target : r  }  =  s ;  r  &&  r  !==  this ;  r  =  r . parentNode ) 
                        para  ( constante  a  de  o ) 
                            if  ( a  ===  r )  devuelve  j ( s ,  {  delegadoTarget : r  } ) ,  n . oneOff  &&  P . apagado ( t ,  s . tipo ,  e ,  i ) ,  i . aplicar ( r ,  [ s ] )  }  } ( t ,  i ,  r ) : function ( t ,  e )  {  return  function  i ( n )  {  return  j ( n ,  {  delegadoTarget : t  } ) ,  i . oneOff  &&  P . apagado ( t ,  n . tipo ,  e ) ,  e . aplicar ( t ,  [ n ] )  }  } ( t ,  r ) ; 
        tu _ delegación  =  o ? yo : nulo ,  tu . invocable  =  r ,  tu . unoOff  =  s ,  tu . uidEvent  =  re ,  do [ re ]  =  t ,  . tu addEventListener ( a ,  u ,  o )  } 

    función  S ( t ,  mi ,  yo ,  s ,  s )  {  consto  _  =  k ( mi [ yo ] ,  norte ,  ) ; norte 
        o  &&  ( t.removeEventListener _ _ ( i ,  o ,  Boolean ( s ) ) ,  delete  e [ i ] [ _ ] o.uidEvent ) }  ; 

    función  yo ( t ,  mi ,  yo ,  s )  {  const  norte  =  mi [ yo ]  ||  { } ;  for  ( const  o  de  Object . claves ( s ) ) 
            if  ( o . incluye ( n ) )  {  const  n  =  s [ o ] ; 
                S ( t ,  e ,  i ,  n . invocable ,  n . delegaciónSelector )  }  } 

    función  norte ( t )  {  volver  t  =  t . reemplazar ( y ,  "" ) ,  T [ t ]  ||  t  }  constante  PAGS  =  {  en ( t ,  mi ,  yo ,  norte )  {  re ( t ,  mi ,  yo ,  norte ,  ! 1 )  } ,  uno ( t ,  mi ,  yo ,  norte )  {  re ( t ,  mi ,  yo ,  n ,  ! 0 )  } ,  off ( t ,  e ,  i ,  n )  {  if  ( "string"  !=  typeof  e  ||  ! t )  return ;  constante  [ s ,  o ,  r ]  =  L ( mi ,  yo ,  norte ) ,  una  =  r  !==  c ,  l  =  x ( t ) ,  r  =  l [ || ]  mi  { } ,  h  =  mi . comienza con ( "." ) ;  si  ( vacío  0  ===  o )  {  si  ( h ) 
                    for  ( const  i  of  Object . keys ( l ) )  I ( t ,  l ,  i ,  e . slice ( 1 ) ) ;  for  ( const  i  of  Object . keys ( c ) )  {  const  n  =  i . reemplazar ( w ,  "" ) ;  if  ( ! a  ||  e . incluye ( n ) )  {  const  e  =  c [ i ] ; 
                        S ( t ,  l ,  r ,  e . callable ,  e . _ _  _  _  _  _  _  _  _ _ _ _ _ _ _ _ _ _ _  _ _ 
                S ( t ,  l ,  r ,  o ,  s ? i : null )  }  } ,  trigger ( t ,  e ,  i )  {  if  ( "string"  !=  typeof  e  ||  ! t )  return  null ;  constante  n  =  tu ( ) ;  sea  ​​s  =  nulo , 
                el  =  ! 0 , 
                r  =  ! 0 , 
                un  =  ! 1 ; 
            e  !==  N ( e )  &&  n  &&  ( s  =  n . Evento ( e ,  i ) ,  n ( t ) . disparador ( s ) ,  o  =  ! s . isPropagationStopped ( ) ,  r  =  ! s . isImmediatePropagationStopped ( ) ,  a  =  s . isDefaultPrevented ( ) ) ;  let  l  =  nuevo  Evento ( e ,  {  burbujas : o ,  cancelable : ! 0  } ) ;  volver  l  =  j ( l ,  yo ) ,  un  &&  l . prevenirPredeterminado ( ) ,  r  &&  t . DispatchEvent ( l ) ,  l . predeterminado Prevenido  &&  s  &&  s . prevenirPredeterminado ( ) ,  l  }  } ; 

    función  j ( t ,  e )  {  for  ( const  [ i ,  n ]  of  Object . entradas ( e  ||  { } ) )  try  {  t [ i ]  =  n  }  catch  ( e )  {  Object . definePropiedad ( t ,  i ,  {  configurable : ! 0 ,  obtiene : ( )  =>  n  } )  } 
        return  t  }  const  M  =  nuevo  Mapa , 
        H  =  { conjunto ( t ,  mi ,  yo )  {  METRO . tiene ( t )  ||  m _ establecer ( t ,  nuevo  mapa ) ;  constante  METRO  =  norte . obtener ( t ) ; 
                norte _ tiene ( e )  ||  0  ===  norte . tamaño ? norte _ conjunto ( e ,  i ) : consola . error ( `Bootstrap no permite más de una instancia por elemento. Instancia enlazada: ${ Array . from ( n . keys ( ) ) [ 0 ] } .` )  } ,  get : ( t ,  e )  =>  M . tiene ( t )  &&  M . obtener ( t ) . obtener ( e )  ||  null ,  remove ( t ,  e )  {  if  ( ! M. _ has ( t ) )  return ;  constante  yo  =  METRO . obtener ( t ) ; 
                yo _ eliminar ( e ) ,  0  ===  i . tamaño  M.  _ y eliminar ( t )  }  } ; 

    función  $ ( t )  {  if  ( "verdadero"  ===  t )  volver  ! 0 ;  if  ( "falso"  ===  t )  regresa  ! 1 ;  if  ( t  ===  Número ( t ) . toString ( ) )  return  Número ( t ) ;  if  ( ""  ===  t  ||  "null"  ===  t )  return  null ;  if  ( "cadena"  !=  return  t )  tipo  t ;  intente  {  devolver  JSON . parse ( decodeURIComponent ( t ) )  }  catch  ( e )  {  return  t  }  } 

    función  W ( t )  {  devuelve  t . replace ( / [ AZ ] / g ,  ( t  =>  `- ${ t . toLowerCase ( ) } ` ) )  }  const  B  =  {  setDataAttribute ( t ,  e ,  i )  {  t . setAttribute ( `data-bs- ${ W ( e ) } ` ,  i )  } ,  removeDataAttribute ( t ,  e )  {  t . removeAttribute ( `data-bs- ${ W ( e ) } ` )  } ,  getDataAttributes ( t )  {  if  ( ! t )  return  { } ;  constante  e  =  { } , 
                yo  =  objeto . claves ( t . conjunto de datos ) . filter ( ( t  =>  t . comienza con ( "bs" )  &&  ! t . bsConfig ( " ) ) ) ;  para  ( const  n  de  i )  {  sea  i  =  n . reemplazar ( / ^ bs / ,  "" ) ; 
                yo  =  yo . carácter ( 0 ) . a Minúsculas ( )  +  i . rebanada ( 1 ,  i . longitud ) ,  e [ i ]  =  $ ( t . dataset [ n ] )  }  return  e  } ,  getDataAttribute : ( t ,  e )  =>  $ ( t . getAttribute ( `data-bs- ${ W ( e ) } ` ) )  } ; 
    clase  F  {  static  get  Predeterminado ( )  {  return  { }  } 
        estático  get  DefaultType ( )  {  return  { }  } 
        static  get  NAME ( )  {  throw  new  Error ( '¡Tienes que implementar el método estático "NOMBRE", para cada componente!' )  } 
        _getConfig ( t )  {  devuelve  t  =  esto . _mergeConfigObj ( t ) ,  t  =  esto . _configAfterMerge ( t ) ,  este . _typeCheckConfig ( t ) ,  t  } 
        _configAfterMerge ( t )  {  retornar  t  } 
        _mergeConfigObj ( t ,  e )  {  const  i  =  o ( e ) ? B. _ getDataAttribute ( e ,  "config" ) : { } ;  volver  { ... esto . constructor _ Predeterminado , ... "objeto"  ==  tipo de  i ? yo : { } , ... o ( e ) ? B. _ getDataAttributes ( e ) : { } , ... "objeto"  ==  tipo de  t ? t : { }  }  } 
        _typeCheckConfig ( t ,  e  =  this . constructor . DefaultType )  {  for  ( const  n  of  Object . keys ( e ) )  {  const  s  =  e [ n ] , 
                    r  =  t [ norte ] , 
                    a  =  o ( r ) ? "elemento" : nulo  ==  ( i  =  r ) ? ` ${ i } ` : Objeto . prototipo _ a la cadena . llamar ( yo ) . coincidencia ( / \ s ( [ az ] + ) / i ) [ 1 ] . a Minúsculas ( ) ;  if  ( ! new  RegExp ( s ) . test ( a ) )  throw  new  TypeError ( ` ${ this . constructor . NAME . toUpperCase ( ) } : Opción " ${ n } " tipo proporcionado " ${ a } " pero tipo esperado " ${ s } ".` )  }  var  i  }  } 
    clase  z  extiende  F  {  constructor ( t ,  e )  {  super ( ) ,  ( t  =  r ( t ) )  &&  ( this . _element  =  t ,  this . _config  =  this . _getConfig ( e ) ,  H . set ( this . _element ,  este _ .constructor _ .DATA_KEY ,  este ) )  } 
        disponer ( )  {  H . eliminar ( este . _elemento ,  este . constructor . DATA_KEY ) ,  P . off ( este . _elemento ,  este . constructor . EVENT_KEY ) ;  for  ( const  t  de  Object . getOwnPropertyNames ( this ) )  this [ t ]  =  null  } 
        _queueCallback ( t ,  e ,  i  =  ! 0 )  {  _ ( t ,  e ,  i )  } 
        _getConfig ( t )  {  devuelve  t  =  esto . _mergeConfigObj ( t ,  esto . _elemento ) ,  t  =  esto . _configAfterMerge ( t ) ,  este . _typeCheckConfig ( t ) ,  t  } 
        estático  getInstance ( t )  {  return  H . obtener ( r ( t ) ,  esto . DATA_KEY )  } 
        estático  getOrCreateInstance ( t ,  e  =  { } )  {  devuelve  esto . obtenerInstancia ( t )  ||  nuevo  esto ( t ,  "objeto"  ==  tipo de  e ? e : nulo )  } 
        static  get  VERSION ( )  {  return  "5.2.0"  } 
        static  get  DATA_KEY ( )  {  return  `bs. ${ esto . NOMBRE } `  } 
        static  get  EVENT_KEY ( )  {  return  `. ${ esto . CLAVE_DATOS } `  } 
        static  eventName ( t )  {  return  ` ${ t } ${ this . EVENT_KEY } `  }  }  const  R  =  ( t ,  e  =  "hide" )  =>  {  const  i  =  `click.dismiss ${ t . EVENTO_CLAVE } ` , 
            s  =  t . NOMBRE ; 
        pag _ on ( document ,  i ,  `[data-bs-dismiss=" ${ s } "]` ,  ( function ( i )  {  if  ( [ "A" ,  "AREA" ] . include ( this . tagName )  &&  i . preventDefault ( ) ,  l ( esto ) )  return ;  const  o  =  n ( esto )  ||  este $ .closed ( `. { s } ` ) ; 
            t . getOrCreateInstance ( o ) [ e ] ( )  } ) )  } ; 
    clase  q  extiende  z  {  estático  obtener  NOMBRE ( )  {  devolver  "alerta"  } 
        close ( )  {  if  ( P . trigger ( this . _element ,  "close.bs.alert" ) . defaultPrevented )  return ; 
            esto _ _elemento . listaclases . eliminar ( "mostrar" ) ;  constante  t  =  esto . _elemento . listaclases . contiene ( "desvanecerse" ) ; 
            esto _ _queueCallback ( ( ( )  =>  esto . _destroyElement ( ) ) ,  este . _elemento ,  t )  } 
        _destroyElement ( )  {  este . _elemento . quitar ( ) ,  P . disparador ( este . _elemento ,  "closed.bs.alert" ) ,  este . desechar ( )  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  q . getOrCreateInstance ( this ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  e [ t ]  ||  t . beginWith ( "_" )  | |  "constructor"  ===  t )  throw  new  TypeError ( `Ningún método llamado " ${ t } "` ) ; 
                    e [ t ] ( esto )  }  } ) )  }  } 
    R ( q ,  "cerrar" ) ,  g ( q ) ;  const  V  =  '[data-bs-toggle="button"]' ; 
    la clase  K  extiende  z  {  static  get  NAME ( )  {  return  "button"  } 
        alternar ( )  {  esto . _elemento . setAttribute ( "aria-presionado" ,  este . _element . classList . alternar ( "activo" ) )  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  K . getOrCreateInstance ( this ) ;  "toggle"  ===  t  &&  e [ t ] ( )  } ) )  }  } 
    pag _ on ( documento ,  "click.bs.button.data-api" ,  V ,  ( t  =>  {  t . preventDefault ( ) ;  const  e  =  t . objetivo . más cercano ( V ) ; 
        k _ getOrCreateInstance ( e ) . alternar ( )  } ) ) ,  g ( K ) ;  const  Q  =  {  buscar : ( t ,  e  =  documento . documentoElemento )  =>  [ ] . concat ( ... Elemento . prototipo . querySelectorAll . call ( e ,  t ) ) ,  findOne : ( t ,  e  =  documento . documentElement )  =>  Elemento . prototipo _ selector de consulta . llamada ( e ,  t ) ,  hijos : ( t ,  e )  =>  [ ] . concat ( ... t . niños ) . filtro ( ( t  =>  t . coincide con ( e ) ) ) ,  padres ( t ,  e )  {  const  i  =  [ ] ;  Sea  n  =  t . padreNodo . más cercano ( e ) ;  para  ( ;  n ; )  yo . empujar ( norte ) ,  norte  =  norte . padreNodo . más cercano ( e ) ;  return  i  } ,  anterior ( t ,  e )  {  let  i  =  t . anteriorElementoSibling ;  for  ( ;  i ; )  {  if  ( i . coincide con ( e ) )  return  [ i ] ; 
                    yo  =  yo . anteriorElementSibling  }  return  [ ]  } ,  next ( t ,  e )  {  let  i  =  t . siguienteElementoSibling ;  for  ( ;  i ; )  {  if  ( i . coincide con ( e ) )  return  [ i ] ; 
                    yo  =  yo . nextElementSibling  }  return  [ ]  } ,  focusableChildren ( t )  {  const  e  =  [ "a" ,  "button" ,  "input" ,  "textarea" ,  "select" ,  "details" ,  "[tabindex]" ,  '[contenteditable= "verdadero"]' ] . mapa ( ( t  =>  ` ${ t } :not([tabindex^="-"])` ) ) . unir ( "," ) ;  devolver  esto . encontrar ( e ,  t ) . filtrar ( ( t  =>  ! l ( t )  &&  a ( t ) ) )  }  } , 
        X  =  {  endCallback : null ,  leftCallback : null ,  rightCallback : null  } , 
        Y  =  {  endCallback : "(función|null)" ,  leftCallback : "(función|null)" ,  rightCallback : "(función|null)"  } ; 
    la clase  U  extiende  F  {  constructor ( t ,  e )  {  super ( ) ,  this . _elemento  =  t ,  t  &&  U . isSupported ( )  &&  ( this . _config  =  this . _getConfig ( e ) ,  this . _deltaX  =  0 ,  this . _supportPointerEvents  =  Boolean ( window . PointerEvent ) ,  this . _initEvents ( ) )  } 
        static  get  Predeterminado ( )  {  return  X  } 
        estático  get  DefaultType ( )  {  return  Y  } 
        estático  obtener  NOMBRE ( )  {  devolver  "deslizar"  } 
        disponer ( )  {  P . desactivado ( este . _elemento ,  ".bs.swipe" )  } 
        _start ( t )  {  esto . _supportPointerEvents ? esto _ _eventIsPointerPenTouch ( t )  &&  ( this . _deltaX  =  t . clientX ) : this . _deltaX  =  t . toca [ 0 ] . clienteX  } 
        _fin ( t )  {  esto . _eventIsPointerPenTouch ( t )  &&  ( this . _deltaX  =  t . clientX  -  this . _deltaX ) ,  this . _handleSwipe ( ) ,  m ( this . _config . endCallback )  } 
        _mover ( t )  {  esto . _deltaX  =  t . toca  &&  t . toca _ longitud  >  1 ? 0 : t . toca [ 0 ] . clienteX  -  esto . _deltaX  } 
        _handleSwipe ( )  {  const  t  =  Matemáticas . abs ( este . _deltaX ) ;  si  ( t  <=  40 )  devuelve ;  constante  e  =  t  /  esto . _deltaX ; 
            esto _ _deltaX  =  0 ,  e  &&  m ( e  >  0 ? this . _config . rightCallback : this . _config . leftCallback )  } 
        _initEvents ( )  {  este . _supportPointerEvents ? ( P . en ( este . _element ,  "pointerdown.bs.swipe" ,  ( t  =>  this . _start ( t ) ) ) ,  P . en ( this . _element ,  "pointerup.bs.swipe" ,  ( t  =>  this . _end ( t ) ) ) ,  this . _element . classList . add ( "pointer-event" ) ) : ( P . on ( this . _element ,  "touchstart.bs.swipe" ,  ( t  =>  this . _start ( t ) ) ) ,  P . en ( este . _elemento ,  "touchmove.bs.swipe" ,  ( t  =>  este . _move ( t ) ) ) ,  P . en ( este . _element ,  "touchend.bs.swipe" ,  ( t  =>  esto . _fin ( t ) ) ) )  } 
        _eventIsPointerPenTouch ( t )  {  devuelve  esto . _supportPointerEvents  &&  ( "pluma"  ===  t . pointerType  ||  "touch"  ===  t . pointerType )  } 
        static  isSupported ( )  {  devuelve  "ontouchstart"  en  documento . documentoElemento  ||  navegante _ maxTouchPoints  >  0  }  }  const  G  =  "siguiente" , 
        J  =  "anterior" , 
        Z  =  "izquierda" , 
        tt  =  "derecha" , 
        et  =  "slid.bs.carrusel" , 
        es  =  "carrusel" , 
        nt  =  "activo" , 
        st  =  {  flecha izquierda : tt ,  flecha derecha : Z  } , 
        ot  =  {  intervalo : 5e3 ,  teclado : ! 0 ,  pausa : "flotar ,  paseo :! " 1 ,  toque :! _ 0 ,  envolver : ! 0  } , 
        rt  =  {  intervalo : "(número|booleano)" ,  teclado : "booleano" ,  pausa : "(cadena|booleano)" ,  paseo : "(booleano|cadena)" ,  toque : "booleano" ,  envoltura : "booleano"  } ; 
    clase  en  extiende  z  {  constructor ( t ,  e )  {  super ( t ,  e ) ,  this . _intervalo  =  nulo ,  esto . _activeElement  =  nulo ,  esto . _isSliding  =  ! 1 ,  esto . touchTimeout  =  nulo ,  esto . _swipeHelper  =  nulo ,  esto . _elementoindicador  =  Q . findOne ( ".carrusel-indicadores" ,  este . _elemento ) ,  este . _addEventListeners ( ) ,  este . _config . andar  ===  eso  &&  esto . ciclo ( )  } 
        static  get  Predeterminado ( )  {  return  ot  } 
        estático  get  DefaultType ( )  {  return  rt  } 
        estático  get  NOMBRE ( )  {  return  "carrusel"  } 
        siguiente ( )  {  esto . _deslizar ( G )  } 
        SiguienteCuandoVisible ( )  { ! documento _ oculto  &&  a ( este . _elemento )  &&  esto . siguiente ( )  } 
        anterior ( )  {  esto . _deslizar ( J )  } 
        pausa ( )  {  esto . _isSliding  &&  s ( este . _elemento ) ,  este . _intervalo claro ( )  } 
        ciclo ( )  {  este . _clearInterval ( ) ,  este . _updateInterval ( ) ,  este . _interval  =  setInterval ( ( ( )  =>  este . nextWhenVisible ( ) ) ,  este . _config . intervalo )  } 
        _maybeEnableCycle ( )  {  este . _config . montar  &&  ( este . _isSliding ? P . uno ( este . _elemento ,  et ,  ( ( )  =>  este . ciclo ( ) ) ) ) : este . ciclo ( ) )  } 
        a ( t )  {  const  e  =  esto . _getItems ( ) ;  if  ( t  >  e . longitud  -  1  ||  t  <  0 )  return ;  if  ( this . _isSliding )  devuelve  void  P . uno ( este . _elemento ,  et ,  ( ( )  =>  este . a ( t ) ) ) ;  constante  i  =  esto . _getItemIndex ( esto . _getActive ( ) ) ;  si  ( i  ===  t )  devuelve ;  const  n  =  t  >  yo ? G : J ; 
            esto _ _deslizar ( t ,  mi [ norte ] )  } 
        disponer ( )  {  esto . _swipeHelper  &&  esto . _swipeHelper . disponer ( ) ,  estupendo . desechar ( )  } 
        _configAfterMerge ( t )  {  devuelve  t . intervalo predeterminado  =  t . intervalo ,  t  } 
        _addEventListeners ( )  {  este . _config . teclado  &&  p . en ( este . _elemento ,  "keydown.bs.carousel" ,  ( t  =>  este . _keydown ( t ) ) ) ,  "hover"  ===  este . _config . pause  &&  ( P . on ( this . _element ,  "mouseenter.bs.carousel" ,  ( ( )  =>  this . pause ( ) ) ) ,  P . on ( this . _element ,  "mouseeleave.bs.carousel" ,  ( ( )  =  este ._maybeEnableCycle ) ( ) ) ) , .  este > _config . toque  &&  U . es compatible ( )  &&  esto . _addTouchEventListeners ( )  } 
        _addTouchEventListeners ( )  {  for  ( const  t  of  Q . find ( ".carousel-item img" ,  this . _element ) )  P . on ( t ,  "dragstart.bs.carousel" ,  ( t  =>  t . preventDefault ( ) ) ) ;  const  t  =  {  leftCallback : ( )  =>  esto . _slide ( this . _directionToOrder ( Z ) ) ,  rightCallback : ( )  =>  this . _slide ( this . _directionToOrder ( tt ) ) ,  endCallback : ( )  =>  {  "hover"  ===  this . _config . pause  &&  ( this . pause ( ) ,  this . touchTimeout  &&  clearTimeout ( this . touchTimeout ) ,  this . touchTimeout  =  setTimeout ( ( ( )  =>  this . _maybeEnableCycle ( ) ) ,  500  +  this . _config . interval ) )  }  } ; 
            esto _ _swipeHelper  =  nueva  U ( este . _elemento ,  t )  } 
        _keydown ( t )  {  if  ( / input | textarea / i . test ( t . target . tagName ) )  return ;  const  mi  =  st [ t . clave ] ; 
            e  &&  ( t . preventDefault ( ) ,  this . _slide ( this . _directionToOrder ( e ) ) )  } 
        _getItemIndex ( t )  {  devuelve  esto . _getItems ( ) . índice de ( t )  } 
        _setActiveIndicatorElement ( t )  {  if  ( ! this . _indicatorsElement )  return ;  constante  e  =  Q . findOne ( ".active" ,  this . _indicatorsElement ) ; 
            mi . listaclases . quitar ( nt ) ,  e . removeAttribute ( "aria-actual" ) ;  constante  i  =  Q . findOne ( `[data-bs-slide-to=" ${ t } "]` ,  this . _indicatorsElement ) ; 
            i  &&  ( i . classList . add ( nt ) ,  i . setAttribute ( "aria-current" ,  "true" ) )  } 
        _updateInterval ( )  {  const  t  =  esto . _elementoactivo  ||  esto _ _getActive ( ) ;  si  ( ! t )  regresa ;  constante  e  =  Número . parseInt ( t . getAttribute ( "data-bs-interval" ) ,  10 ) ; 
            esto _ _config . intervalo  =  e  ||  esto _ _config . intervalopredeterminado  } 
        _slide ( t ,  e  =  null )  {  if  ( this . _isSliding )  return ;  constante  i  =  esto . _getActive ( ) , 
                t  =  norte  ===  GRAMO , 
                s  =  mi  ||  b ( este _ ._getItems ( ) ,  i ,  n ,  este . ._config _ wrap ) ;  si  ( s  ===  i )  devuelve ;  constante  o  =  esto . _getItemIndex ( s ) , 
                r  =  PAGS  =>  . mi disparador ( este . _elemento ,  e ,  {  objetivo : s ,  dirección : este . _orderToDirection ( t ) ,  desde : este . _getItemIndex ( i ) ,  hasta : o  } ) ;  if  ( r ( "slide.bs.carousel" ) . defaultPrevented )  return ;  if  ( ! i  ||  ! s )  return ;  const  a  =  booleano ( this . _interval ) ; 
            esto _ pausa ( ) ,  esto . _isSliding  =  ! 0 ,  esto . _setActiveIndicatorElement ( o ) ,  este . _elementoactivo  =  s ;  constante  l  =  n ? "carrusel-elemento-inicio" : "carrusel-elemento-fin" , 
                c  =  norte ? "carrusel-elemento-siguiente" : "carrusel-elemento-anterior" ; 
            s . listaclases . añadir ( c ) ,  d ( s ) ,  i . listaclases . añadir ( l ) ,  s . listaclases . añadir ( l ) ,  esto . _queueCallback ( ( ( )  =>  {  s . classList . remove ( l ,  c ) ,  s . classList . add ( nt ) ,  i . classList . remove ( nt ,  c ,  l ) ,  this . _isSliding  =  ! 1 ,  r ( et )  } ) ,  i ,  this . _isAnimated ( ) ) ,  a  &&  this . ciclo ( )  } 
        _isAnimated ( )  {  devuelve  esto . _elemento . listaclases . contiene ( "diapositiva" )  } 
        _getActive ( )  {  devuelve  Q . findOne ( ".active.carrusel-elemento" ,  este . _elemento )  } 
        _getItems ( )  {  devuelve  Q . encontrar ( ".carrusel-elemento" ,  este . _elemento )  } 
        _clearInterval ( )  {  este . _interval  &&  ( clearInterval ( este . _intervalo ) ,  este . _intervalo  =  nulo )  } 
        _directionToOrder ( t )  {  devolver  p ( ) ? t  ===  Z ? J : G : t  ===  Z ? G : J  } 
        _orderToDirection ( t )  {  devolver  p ( ) ? t  ===  J ? Z : tt : t  ===  J ? tt : Z  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  at . getOrCreateInstance ( this ,  t ) ;  if  ( "number"  !=  typeof  t )  {  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  e [ t ]  ||  t .startsWith " ( _" )  ||  "constructor"  ===  t )  throw  new  TypeError ( `Ningún método llamado " ${ t } "` ) ; 
                        e [ t ] ( )  }  }  más  e . a ( t )  } ) )  }  } 
    pag _ en ( documento ,  "click.bs.carousel.data-api" ,  "[data-bs-slide], [data-bs-slide-to]" ,  ( función ( t )  {  const  e  =  n ( this ) ;  if  ( ! e  ||  ! e . classList . contiene ( it ) )  return ; 
        t . prevenirPredeterminado ( ) ;  constante  i  =  en . getOrCreateInstance ( e ) , 
            s  =  esto . getAttribute ( "data-bs-slide-to" ) ;  volver  s ? ( i . a ( s ) ,  void  i . _maybeEnableCycle ( ) ) : "siguiente"  ===  B . getDataAttribute ( esto ,  "diapositiva" ) ? ( i . next ( ) ,  void  i . _maybeEnableCycle ( ) ) : ( i . prev ( ) ,  void  i . _maybeEnableCycle ( ) )  } ) ) ,  P . on ( ventana ,  "load.bs.carousel.data-api" ,  ( ( )  =>  {  const  t  =  Q . find ( '[data-bs-ride="carrusel"]' ) ;  for  ( const  e  of  t )  en _ .getOrCreateInstance ( e )  } ) ) ,  g ( en ) ;  const  lt  =  "mostrar" , 
        ct  =  "colapsar" , 
        ht  =  "colapsando" , 
        dt  =  '[data-bs-toggle="collapse"]' , 
        ut  =  {  padre : nulo ,  alternar : ! 0  } , 
        ft  =  {  padre : "(elemento nulo|)" ,  alternar : "booleano"  } ; 
    clase  pt  extiende  z  {  constructor ( t ,  e )  {  super ( t ,  e ) ,  this . _isTransitioning  =  ! 1 ,  esto . _triggerArray  =  [ ] ;  const  n  =  Q . encontrar ( dt ) ;  para  ( const  t  de  n )  {  const  e  =  i ( t ) , 
                    n  =  Q. _ encontrar ( e ) . filtro ( ( t  =>  t  ===  este . _elemento ) ) ; 
                nulo  !==  e  &&  n . longitud  &&  esto . _triggerArray . empujar ( t )  } 
            esto _ _initializeChildren ( ) ,  este . _config . padre  ||  esto _ _addAriaAndCollapsedClass ( este . _triggerArray ,  este . _isShown ( ) ) ,  este . _config . alternar  &&  esto . alternar ( )  } 
        static  get  Predeterminado ( )  {  return  ut  } 
        estático  get  DefaultType ( )  {  return  ft  } 
        estático  get  NOMBRE ( )  {  return  "collapse"  } 
        alternar ( )  {  esto . _se muestra ( ) ? esto _ ocultar ( ) : esto . mostrar ( )  } 
        show ( )  {  if  ( this . _isTransitioning  ||  this . _isShown ( ) )  return ;  sea  ​​t  =  [ ] ;  if  ( this . _config . parent  &&  ( t  =  this . _getFirstLevelChildren ( ".collapse.show, .collapse.collapsing" ) . filter ( ( t  =>  t  !==  this . _element ) ) . map ( ( t  =>  pt _ .getOrCreateInstance ( t ,  {  alternar : ! 1  } ) ) ) ) ,  t . length  &&  t [ 0 ] . _isTransitioning )  return ;  if  ( P . trigger ( this . _element ,  "show.bs.collapse" ) . defaultPrevented )  return ;  para  ( const  e  de  t )  e . ocultar ( ) ;  constante  e  =  esto . _getDimensión ( ) ; 
            esto _ _elemento . listaclases . eliminar ( ct ) ,  esto . _elemento . listaclases . añadir ( ht ) ,  esto . _elemento . estilo [ e ]  =  0 ,  esto . _addAriaAndCollapsedClass ( este . _triggerArray ,!  _ 0 ) ,  este . _isTransitioning  =  ! 0 ;  const  i  =  `scroll ${ e [ 0 ] . a Mayúsculas ( ) + e . rebanada ( 1 ) } ` ; 
            esto _ _queueCallback ( ( ( )  =>  {  this . _isTransitioning  =  ! 1 ,  this . _element . classList . remove ( ht ) ,  this . _element . classList . add ( ct ,  lt ) ,  this . _element . style [ e ]  =  "" ,  P . disparador ( este . _elemento ,  "shown.bs.collapse" )  } ) ,  este . _element ,  ! 0 ) ,  este . _elemento . estilo [ e ]  =  ` ${ esto . _elemento [ yo ] } px`  } 
        hide ( )  {  if  ( this . _isTransitioning  ||  ! this . _isShown ( ) )  return ;  if  ( P . trigger ( this . _element ,  "hide.bs.collapse" ) . defaultPrevented )  return ;  constante  t  =  esto . _getDimensión ( ) ; 
            esto _ _elemento . estilo [ t ]  =  ` ${ esto . _elemento . getBoundingClientRect ( ) [ t ] } px` ,  d ( este . _elemento ) ,  este . _elemento . listaclases . añadir ( ht ) ,  esto . _elemento . listaclases . quitar ( ct ,  lt ) ;  for  ( const  t  de  this . _triggerArray )  {  const  e  =  n ( t ) ; 
                e  &&  ! esto _ _isMostrado ( e )  &&  esto . _addAriaAndCollapsedClass ( [ t ] ,  ! 1 )  } 
            esto _ _isTransitioning  =  ! 0 ,  esto . _elemento . estilo [ t ]  =  "" ,  este . _queueCallback ( ( ( )  =>  {  this . _isTransitioning  =  ! 1 ,  this . _element . classList . remove ( ht ) ,  this . _element . classList . add ( ct ) ,  P . trigger ( this . _element ,  "hidden.bs. colapsar" )  } ) ,  este . _element ,  ! 0 )  } 
        _isShown ( t  =  esto . _elemento )  {  devuelve  t . listaclases . contiene ( lt )  } 
        _configAfterMerge ( t )  {  devuelve  t . alternar  =  booleano ( t . alternar ) ,  t . padre  =  r ( t . padre ) ,  t  } 
        _getDimension ( )  {  devuelve  esto . _elemento . listaclases . contiene ( "colapso-horizontal" ) ? "ancho" : "alto"  } 
        _initializeChildren ( )  {  if  ( ! this . _config . parent )  return ;  constante  t  =  esto . _getFirstLevelChildren ( dt ) ;  for  ( const  e  of  t )  {  const  t  =  n ( e ) ; 
                t  &&  esto . _addAriaAndCollapsedClass ( [ e ] ,  this . _isShown ( t ) )  }  } 
        _getFirstLevelChildren ( t )  {  const  e  =  Q . find ( ":scope .collapse .collapse" ,  this . _config . parent ) ;  devolver  Q. _ encontrar ( t ,  esto . _config . padre ) . filtrar ( ( t  =>  ! e . incluye ( t ) ) )  } 
        _addAriaAndCollapsedClass ( t ,  e )  {  if  ( t . longitud ) 
                para  ( const  i  de  t )  i . listaclases . alternar ( "contraído" ,  ! e ) ,  i . setAttribute ( "aria-expandida" ,  e )  } 
        estático  jQueryInterface ( t )  {  const  e  =  { } ;  return  "cadena"  ==  &&  t  tipo  / show | ocultar / . prueba ( t )  &&  ( e . alternar  =  ! 1 ) ,  esto . each ( ( function ( )  {  const  i  =  pt . getOrCreateInstance ( this ,  e ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  i [ t ] )  throw  new  TypeError ( `Ningún método nombrado " ${ t } "` ) ; 
                    yo [ t ] ( )  }  } ) )  }  } 
    pag _ en ( documento ,  "click.bs.collapse.data-api" ,  dt ,  ( función ( t )  { 
        ( "A"  ===  t . destino . etiqueta  ||  t . delegado  &&  "A"  ===  t . delegado . nombre de etiqueta )  &&  t . prevenirPredeterminado ( ) ;  const  e  =  yo ( esto ) , 
            n  =  Q. _ encontrar ( e ) ;  para  ( const  t  de  n )  pt . getOrCreateInstance ( t ,  {  alternar :! _ 1  } ) . alternar ( )  } ) ) ,  g ( pt ) ;  var  gt  =  "superior" , 
        mt  =  "abajo" , 
        _t  =  "derecha" , 
        bt  =  "izquierda" , 
        vt  =  "automático" , 
        yt  =  [ gt ,  mt ,  _t ,  bt ] , 
        wt  =  "inicio" , 
        En  =  "fin" , 
        Et  =  "recortarPadres" , 
        Tt  =  "ventana de visualización" , 
        Ct  =  "popper" , 
        Ot  =  "referencia" , 
        xt  =  yt . reduce ( ( función ( t ,  e )  {  return  t . concat ( [ e  +  "-"  +  wt ,  e  +  "-"  +  At ] )  } ) ,  [ ] ) , 
        kt  =  [ ] . concat ( yt ,  [ vt ] ) . reduce ( ( función ( t ,  e )  {  return  t . concat ( [ e ,  e  +  "-"  +  wt ,  e  +  "-"  +  At ] )  } ) ,  [ ] ) , 
        Lt  =  "antes de leer" , 
        Dt  =  "leer" , 
        St  =  "después de leer" , 
        It  =  "antes de Main" , 
        Nt  =  "principal" , 
        Pt  =  "después dePrincipal" , 
        jt  =  "antes de escribir" , 
        Mt  =  "escribir" , 
        Ht  =  "después de escribir" , 
        $t  =  [ Lt ,  Dt ,  St ,  It ,  Nt ,  Pt ,  jt ,  Mt ,  Ht ] ; 

    función  Wt ( t )  {  devuelve  t ? ( t . nombre de nodo  ||  "" ) . toLowerCase ( ) : nulo  } 

    function  Bt ( t )  {  if  ( nulo  ==  t )  retorno  ventana de ;  if  ( "[ventana de objeto]"  !==  t . toString ( ) )  {  var  e  =  t . propietarioDocumento ;  volver  e  &&  e . vista por defecto  ||  ventana  }  devolver  t  } 

    function  Ft ( t )  {  return  t  instancia  de Bt ( t ) . Elemento  ||  t  instancia  del elemento  } 

    function  zt ( t )  {  return  t  instancia  de Bt ( t ) . Elemento HTML  ||  t  instancia  de HTMLElement  } 

    function  Rt ( t )  {  return  "indefinido"  !=  &&  tipo de ShadowRoot  (  t instancia  de  Bt ( t ) . ShadowRoot  ||  t  instancia  de ShadowRoot )  }  const  qt  =  {  nombre : "applyStyles" ,  habilitado : ! 0 ,  fase : "escribir" ,  fn : función ( t )  {  var  e  =  t . estado ; 
            objeto _ llaves ( p . elementos ) . forEach ( ( función ( t )  {  var  i  =  e . estilos [ t ]  ||  { } , 
                    n  =  mi . atributos [ t ]  ||  { } , 
                    s  =  mi . elementos [ t ] ; 
                zt ( s )  &&  Wt ( s )  &&  ( Objeto . asignar ( s . estilo ,  i ) ,  Objeto . teclas ( n ) . forEach ( ( función ( t )  {  var  e  =  n [ t ] ; ! 1  ===  E ? _ _ _ _ _ _ _ _ _ _ _ _ _  _ _  _  _ _ _ _ _ _  _ _ _ _  _ _ _  _ _  _ _ _ _ _ _  _  _  _  _  _ _ estado , 
                i  =  {  popper : {  posición : e . opciones _ estrategia ,  izquierda : "0" ,  arriba : "0" ,  margen : "0"  } ,  flecha : {  posición : "absoluto"  } ,  referencia : { }  } ;  devolver  Objeto . asignar ( p . elementos . popper . estilo ,  i . popper ) ,  e . estilos  =  yo ,  e . elementos _ flecha  &&  Objeto . asignar ( p . elementos . flecha . estilo ,  i . flecha ) , 
                función ( )  {  Objeto . llaves ( p . elementos ) . forEach ( ( función ( t )  {  var  n  =  e . elementos [ t ] , 
                            s  =  mi . atributos [ t ]  ||  { } , 
                            o  =  Objeto . claves ( p . estilos . hasOwnProperty ( t ) ? p . estilos [ t ] : i [ t ] ) . reducir ( ( función ( t ,  e )  {  return  t [ e ]  =  "" ,  t  } ) ,  { } ) ; 
                        zt ( n )  &&  Wt ( n )  &&  ( Objeto . asignar ( n . estilo ,  o ) ,  Objeto . teclas ( s ) . forEach ( ( función ( t )  {  n . removeAttribute ( t )  } ) ) )  } ) )  }  } ,  requiere : [ "computeStyles" ]  } ; 

    función  Vt ( t )  {  devuelve  t . split ( "-" ) [ 0 ]  }  var  Kt  =  Math . máximo , 
        Qt  =  Matemáticas . min , 
        Xt  =  matemáticas . redondo ; 

    función  Yt ( t ,  e )  {  void  0  ===  e  &&  ( e  =  ! 1 ) ;  var  i  =  t . getBoundingClientRect ( ) , 
            n  =  1 , 
            s  =  1 ;  si  ( zt ( t )  &&  e )  {  var  o  =  t _ compensación , 
                r  =  t . ancho de desplazamiento ; 
            r  >  0  &&  ( n  =  Xt ( i . ancho )  /  r  ||  1 ) ,  o  >  0  &&  ( s  =  Xt ( i . alto )  /  o  ||  1 )  }  return  {  ancho : i . ancho  /  n ,  altura : i . altura  /  s ,  superior : i . arriba  /  s ,  derecha : i . derecha  /  n ,  abajo : i . abajo  /  s ,  izquierda : i . izquierda  /  n ,  x : yo . izquierda  /  n ,  y : yo . superior  /  es  }  } 

    función  Ut ( t )  {  var  e  =  Yt ( t ) , 
            yo  =  t . ancho , 
            n  =  t . altura de compensación ;  devolver  Matemáticas . abs ( e . ancho  -  i )  <=  1  &&  ( i  =  e . ancho ) ,  Matemáticas . abs ( e . altura  -  n )  <=  1  &&  ( n  =  e . altura ) ,  {  x : t . desplazamiento izquierdo ,  y : t . offsetTop ,  ancho : i ,  alto : n  }  } 

    función  Gt ( t ,  e )  {  variar  e  =  _ . obtenerNodoRaíz  &&  _ . obtenerNodoRaíz ( ) ;  si  ( t . contiene ( e ) )  vuelve  ! 0 ;  si  ( i  &&  Rt ( i ) )  {  var  n  =  e ; 
            do  {  if  ( n  &&  t . isSameNode ( n ) )  return  ! 0 ; 
                norte  =  norte . padreNodo  ||  norte _ host  }  while  ( n )  }  return  ! 1  } 

    función  Jt ( t )  {  devuelve  Bt ( t ) . obtener Estilo Computado ( t )  } 

    function  Zt ( t )  {  return  [ "tabla" ,  "td" ,  "th" ] . indexOf ( Peso ( t ) )  >=  0  } 

    function  te ( t )  {  return  ( ( Ft ( t ) ? t . propietarioDocumento : t . documento )  ||  ventana . documento ) . documentoElemento  } 

    función  ee ( t )  {  return  "html"  ===  Wt ( t ) ? t : t . asignada  ||  t . padreNodo  ||  ( Rt ( t ) ? t . anfitrión : nulo )  ||  te ( t )  } 

    función  es decir ( t )  {  devuelve  zt ( t )  &&  "fijo"  !==  Jt ( t ) . posición ? t . padre de compensación : nulo  } 

    función  ne ( t )  {  for  ( var  e  =  Bt ( t ) ,  i  =  ie ( t ) ;  i  &&  Zt ( i )  &&  "estático"  ===  Jt ( i ) . posición ; )  i  =  ie ( i ) ;  return  i  &&  ( "html"  ===  Wt ( i )  ||  "body"  ===  Wt ( i )  &&  "static"  ===  Jt ( i ) . position ) ? e : yo  ||  función ( t )  {  var  e  =  - 1  !==  navegador . agente de usuario . a Minúsculas ( ) . indexOf ( "Firefox" ) ;  if  ( - 1  !==  navigator . userAgent . indexOf ( "Trident" )  &&  zt ( t )  &&  "fixed"  ===  Jt ( t ) . position )  return  null ;  var  i  =  ee ( t ) ;  for  ( Rt ( i )  &&  ( i  =  i . host ) ;  zt ( i )  &&  [ "html" ,  "body" ] . indexOf ( Wt ( i ) )  <  0 ; )  {  var  n  =  Jt ( i ) ;  if  ( "ninguno"  !==  n . transformar  ||  "ninguno"  !==  n . perspectiva  ||  "pintar"  ===  n . contener  ||  - 1  !==  [ "transformar" ,  "perspectiva" ] . indexOf ( n . willChange )  ||  e  &&  "filtro"  ===  n . willChange  ||  e  &&  n . filter  &&  "none"  !==  n . filter )  return  i ; 
                yo  =  yo . parentNode  }  devuelve  nulo  } ( t )  ||  mi  } 

    function  se ( t )  {  return  [ "superior" ,  "inferior" ] . índice de ( t )  >=  0 ? "x" : "y"  } 

    función  oe ( t ,  e ,  i )  {  return  Kt ( t ,  Qt ( e ,  i ) )  } 

    función  re ( t )  {  retorno  objeto . asignar ( { } ,  {  arriba : 0 ,  derecha : 0 ,  abajo : 0 ,  izquierda : 0  } ,  t )  } 

    función  ae ( t ,  e )  {  devuelve  e . reduce ( ( función ( e ,  i )  {  return  e [ i ]  =  t ,  e  } ) ,  { } )  }  const  le  =  {  nombre : "flecha" ,  habilitado : ! 0 ,  fase : "principal" ,  fn : función ( t )  {  var  e ,  i  =  t . estado , 
                n  =  t . nombre , 
                s  =  t . opciones , 
                o  =  yo . elementos _ flecha , 
                r  =  yo . modificadores de datos . compensaciones popper , 
                a  =  Vt ( yo . colocación ) , 
                l  =  se ( a ) , 
                c  =  [ bt ,  _t ] . indexOf ( a )  >=  0 ? "alto" : "ancho" ;  if  ( o  &&  r )  {  var  h  =  función ( t ,  e )  {  return  re ( "número"  !=  rects ( t  =  "función"  ==  tipo  t ? t ( Objeto . asignar ( { } ,  e . , de  {  ubicación : e . ubicación  } ) ) : t ) ? t : ae ( t ,  yt ) )  } ( s . padding ,  i ) , 
                    d  =  Ut ( o ) , 
                    u  =  "y"  ===  l ? gt : bt , 
                    f  =  "y"  ===  l ? mt : _t , 
                    pag  =  yo . rectifica _ referencia [ c ]  +  i . rectifica _ referencia [ l ]  -  r [ l ]  -  i . rectifica _ popper [ c ] , 
                    gramo  =  r [ l ]  -  yo . rectifica _ referencia [ l ] , 
                    m  =  ne ( o ) , 
                    _  =  metro ? "y"  ===  l ? m _ altura del cliente  ||  0 : m . ancho del cliente  ||  0 : 0 , 
                    segundo  =  p  /  2  -  g  /  2 , 
                    v  =  h [ tu ] , 
                    y  =  _  -  re [ do ]  -  h [ f ] , 
                    w  =  _  /  2  -  re [ do ]  /  2  +  segundo , 
                    A  =  tú ( v ,  w ,  y ) , 
                    mi  =  l ; 
                yo _ modifiersData [ n ]  =  ( ( e  =  { } ) [ E ]  =  A ,  e . centerOffset  =  A  -  w ,  e )  }  } ,  efecto : función ( t )  {  var  e  =  t . estado , 
                yo  =  t . opciones _ elemento , 
                n  =  vacío  0  ===  i ? "[flecha emergente de datos]" : i ; 
            nulo  =  n  &&  ( "cadena"  !=  querySelector  n  ||  ( n  =  e . elementos . popper . n ( ) ) ) )  &&  Gt ( e . elementos . popper ,  n (  &&  . e . elementos ! flecha  =  n )  } ,  requiere : [ "popperOffsets" ] ,  requireIfExists : [ "preventOverflow" ]  } ; 

    función  ce ( t )  {  devuelve  t . dividir ( "-" ) [ 1 ]  }  var  he  =  {  arriba : "auto" ,  derecha : "auto" ,  abajo : "auto" ,  izquierda : "auto"  } ; 

    función  de ( t )  {  var  mi ,  yo  =  t . Popper , 
            n  =  t . popperRect , 
            s  =  t . colocación , 
            o  =  t . variación , 
            r  =  t . compensaciones , 
            un  =  t . posición , 
            l  =  t . aceleración gpu , 
            c  =  t . adaptativo , 
            h  =  t . compensaciones redondas , 
            re  =  t . es arreglado , 
            r  =  _ tu x , 
            f  =  vacío  0  ===  y ? 0 : y , 
            p  =  r . y , 
            g  =  vacío  0  ===  p ? 0 : pag , 
            m  =  "función"  ==  tipo de  h ? h ( {  x : f ,  y : gramo  } ) : {  x : f ,  y : gramo  } ; 
        f  =  metro . X ,  gramo  =  metro . y ;  var  _  =  r . tiene propiedad propia ( "x" ) , 
            segundo  =  r . tiene propiedad propia ( "y" ) , 
            v  =  bt , 
            y  =  gt , 
            w  =  ventana ;  si  ( c )  {  var  A  =  ne ( yo ) , 
                E  =  "altura del cliente" , 
                T  =  "ancho del cliente" ; 
            A  ===  Bt ( i )  &&  "estático"  !==  Jt ( A  =  te ( i ) ) . posición  &&  "absoluto"  ===  a  &&  ( E  =  "altura del desplazamiento" ,  T  =  "ancho del desplazamiento" ) ,  ( s  ===  gt  ||  ( s  ===  bt  ||  s  ===  _t )  &&  o  == =  At )  &&  ( y  =  mt ,  g  -=  ( d  &&  A  ===  w  &&  w . visualViewport ? w . visualViewport . altura : A [ E ] )  -  n . altura ,  g  *=  l ? 1 : - 1 ) ,  s  !==  bt  &&  ( s  !==  gt  &&  s  !==  mt  ||  o  !==  At )  ||  ( v  =  _t ,  f  -=  ( d  &&  A  ===  w  &&  w . visualViewport ? w . visualViewport . ancho : A [ T ] )  -  n . ancho ,  f  =  l ? 1 : ) -1 }  var  C  * ,  O  =  Objeto . asignar ( {  posición : a  } ,  c  &&  él ) , 
            x  =  ! 0  ===  h ? función ( t )  {  var  e  =  t . x , 
                    yo  =  t . y , 
                    n  =  ventana . dispositivoPixelRatio  ||  1 ;  volver  {  x : Xt ( e  *  n )  /  n  ||  0 ,  y : Xt ( i  *  n )  /  n  ||  0  }  } ( {  x : f ,  y : g  } ) : {  x : f ,  y : g  } ;  devuelve  f  =  x . X ,  gramo  =  X . y ,  yo ? objeto _ asignar ( { } ,  O ,  ( ( C  =  { } ) [ y ]  =  b ? "0" : "" ,  C [ v ]  =  _ ? "0" : "" ,  C . transform  =  ( w . devicePixelRatio  | |  1 )  <=  1 ? "traducir("  +  f  +  "px, "  +  g  +  "px)" : "traducir3d("  +  f  +  "px, "  +  g  +  "px, 0)" ,  C ) ) : Objeto . asignar ( { } ,  O ,  ( ( e  =  { } ) [ y ]  =  b ? g  +  "px" : "" ,  e [ v ]  =  _ ? f  +  "px" : "" ,  e . transform  =  " " ,  e ) )  }  const  ue  =  {  nombre : "computeStyles" ,  habilitado : ! 0 ,  fase : "beforeWrite" ,  fn : función ( t )  {  var  e  =  t . estado , 
                yo  =  t . opciones , 
                n  =  yo . aceleración gpu , 
                s  =  vacío  0  ===  n  ||  n , 
                o  =  yo . adaptativo , 
                r  =  vacío  0  ===  o  ||  ay_ _ 
                un  =  yo . compensaciones redondas , 
                l  =  vacío  0  ===  a  ||  a , 
                c  =  {  ubicación : Vt ( e . ubicación ) ,  variación : ce ( e . ubicación ) ,  popper : e . elementos _ popper ,  popperRect : e . rectifica _ popper ,  gpuAcceleration : s ,  isFixed : "fixed"  ===  e . opciones _ estrategia  } ; 
            nulo  !=  e . modificadores de datos . popperOffsets  &&  ( p . estilos . popper  =  Objeto . asignar ( { } ,  p . estilos . popper ,  de ( Objeto . asignar ( { } ,  c ,  {  compensaciones : e . modifiersData . popperOffsets ,  position : p . opciones . estrategia ,  adaptable : r ,  roundOffsets : l  } ) ) ) ) ,  null  !=  e . modificadores de datos . flecha  &&  ( e . estilos . flecha  =  Objeto . asignar ( { } ,  e . estilos . flecha ,  de ( Objeto . asignar ( { } ,  c ,  {  compensaciones : e . modifiersData . flecha ,  posición : "absoluto" ,  adaptativo : ! 1 ,  compensaciones redondas : l  } ) )) ) ) ,  e . atributos _ popper  =  Objeto . asignar ( { } ,  e . atributos . popper ,  {  "data-popper-placement : e .placement "  } )  } ,  data : { }  } ;  var  fe  =  {  pasiva : ! 0  } ;  const  pe  =  {  nombre : "eventListeners" ,  habilitado : ! 0 ,  fase : "escribir" ,  fn : función ( )  { } ,  efecto : función ( t )  {  var  e  =  t . estado , 
                yo  =  t . instancia , 
                n  =  t . opciones , 
                s  =  norte . desplazarse , 
                o  =  vacío  0  ===  s  ||  s , 
                r  =  norte . cambiar el tamaño , 
                a  =  vacío  0  ===  r  ||  r , 
                l  =  Bt ( e . elementos . popper ) , 
                c  =  [ ] . concat ( p . ej. scrollParents . reference ,  p . scrollParents . popper ) ;  volver  o  &&  c . forEach ( ( function ( t )  {  t . addEventListener ( "scroll" ,  i . update ,  fe )  } ) ) ,  a  &&  l . addEventListener ( "redimensionar" ,  es , actualizar ,  fe ) , 
                función ( )  {  o  &&  c . forEach ( ( function ( t )  {  t . removeEventListener ( "scroll" ,  i . update ,  fe )  } ) ) ,  a  &&  l . removeEventListener ( "redimensionar" ,  es , actualizar ,  fe )  }  } ,  datos : { }  } ;  var  ge  =  {  izquierda : "derecha" ,  derecha : "izquierda" ,  abajo : "arriba" ,  arriba : "abajo"  } ; 

    funcion  yo ( t )  {  retornar  t . reemplazar ( / izquierda | derecha | abajo | arriba / g ,  ( función ( t )  {  return  ge [ t ]  } ) )  }  var  _e  =  {  inicio : "final" ,  final : "inicio"  } ; 

    función  ser ( t )  {  devuelve  t . reemplazar ( / inicio | final / g ,  ( función ( t )  {  retorno  _e [ t ]  } ) )  } 

    función  ve ( t )  {  var  e  =  Bt ( t ) ;  volver  {  desplazarse hacia la izquierda : e . pageXOffset ,  scrollTop : e . páginaYOffset  }  } 

    función  ye ( t )  {  return  Yt ( te ( t ) ) . izquierda  +  ve ( t ) . desplazarse hacia la izquierda  } 

    función  nosotros ( t )  {  var  e  =  Jt ( t ) , 
            yo  =  mi _ desbordamiento , 
            n  =  mi . desbordamientoX , 
            s  =  mi . desbordamiento Y ;  retorno  / automático | pergamino | superposición | oculto / . prueba ( yo  +  s  +  n )  } 

    función  Ae ( t )  {  retorno  [ "html" ,  "cuerpo" ,  "#documento" ] . indexOf ( Peso ( t ) )  >=  0 ? t . propietarioDocumento . cuerpo : zt ( t )  &&  nosotros ( t ) ? t : Ae ( ee ( t ) )  } 

    función  Ee ( t ,  e )  {  var  i ; 
        vacío  0  ===  e  &&  ( e  =  [ ] ) ;  var  n  =  Ae ( t ) , 
            s  =  n  ===  ( null  ==  ( i  =  t . documentopropietario ) ? void  0 : i . cuerpo ) , 
            o  =  Bt ( norte ) , 
            r  =  s ? [ o ] . concat ( o . visualViewport  ||  [ ] ,  nosotros ( n ) ? n : [ ] ) : n , 
            un  =  mi . concat ( r ) ;  volver  s ? un : un . concat ( Ee ( ee ( r ) )) )  } 

    función  Te ( t )  {  retorno  objeto . asignar ( { } ,  t ,  {  izquierda : t . x ,  arriba : t . y ,  derecha : t . x  +  t . ancho ,  abajo : t . y  +  t . altura  } )  } 

    función  Ce ( t ,  e )  {  return  e  ===  Tt ? Te ( función ( t )  {  var  e  =  Bt ( t ) , 
                yo  =  la ( t ) , 
                n  =  mi . vista visual , 
                s  =  yo . ancho del cliente , 
                o  =  yo . altura del cliente , 
                r  =  0 , 
                a  =  0 ;  return  n  &&  ( s  =  n . ancho ,  o  =  n . alto ,  / ^ ( (? ! Chrome | android ) . ) * safari / i . test ( navigator . userAgent )  ||  ( r  =  n . offsetLeft ,  a  =  n _ .offsetTop ) ) ,  {  ancho : s ,  alto : o ,  x : r  +  ye ( t ) ,  y : a  }  } ( t ) ) : Ft ( e ) ? función ( t )  {  var  e  =  Yt ( t ) ;  volver  e . arriba  =  mi . arriba  +  t . clienteTop ,  e . izquierda  =  e . izquierda  +  t . cliente izquierdo ,  e . abajo  =  e . arriba  +  t . altura del cliente ,  e . derecha  =  e . izquierda  +  t . ancho del cliente ,  e . ancho  =  t . ancho del cliente ,  e . altura  =  t . altura del cliente ,  e . x  =  e . izquierda ,  E. _ y  =  mi _ arriba ,  e  } ( e ) : Te ( función ( t )  {  var  e ,  i  =  te ( t ) , 
                n  =  ve ( t ) , 
                s  =  nulo  ==  ( e  =  t . documentopropietario ) ? vacío  0 : e . cuerpo , 
                o  =  Kt ( i . ancho ,  i . ancho ,  s ? s . ancho : 0 ,  s ? s . ancho : 0 ) , 
                r  =  Kt ( i . scrollHeight ,  i . clientHeight ,  s ? s . scrollHeight : 0 ,  s ? s . clientHeight : 0 ) , 
                un  =  - norte . desplazamiento hacia la izquierda  +  ye ( t ) , 
                l  =  - norte . desplazamiento superior ;  devuelve  "rtl"  ===  Jt ( s  ||  i ) . dirección  &&  ( a  +=  Kt ( i . clientWidth ,  s ? s . clientWidth : 0 )  -  o ) ,  {  width : o ,  height : r ,  x : a ,  y : l  }  } ( te ( t ) ) )  } 

    función  Oe ( t )  {  var  e ,  yo  =  t . referencia , 
            n  =  t . elemento , 
            s  =  t . colocación , 
            o  =  s ? Vt ( s ) : nulo , 
            r  =  s ? ce ( s ) : nulo , 
            un  =  yo . x  +  yo _ ancho  /  2  -  n . ancho  /  2 , 
            yo  =  yo _ y  +  yo _ altura  /  2  -  n . altura  /  2 ;  cambiar  ( o )  { 
            caso  gt : 
                mi  =  {  X : un ,  y : yo . t  -  n . altura  } ;  romper ; 
            caso  mt : 
                mi  =  {  X : un ,  y : yo . y  +  yo _ altura  } ;  romper ; 
            caso  _t : 
                mi  =  {  X : yo . x  +  yo _ ancho ,  y : l  } ;  romper ; 
            caso  bt : 
                mi  =  {  X : yo . x  -  n . ancho ,  y : l  } ;  romper ; 
            predeterminado : 
                mi  =  {  X : yo . x ,  y : yo . y  }  }  var  c  =  o ? se ( o ) : nulo ;  si  ( nulo  !=  c )  {  var  h  =  "y"  ===  c ? "alto" : "ancho" ;  cambiar  ( r )  { 
                caso  peso del : 
                    c [ c ]  =  mi [ - ]  (  [ yo ] h ]  /  2  -  n [ h )  /  2 ; mi  romper ; 
                caso  en : 
                    e [ c ]  =  e [ c ]  +  ( yo [ h ]  /  2  -  n [ h ]  /  2 )  }  }  return  e  } 

    función  xe ( t ,  e )  {  void  0  ===  e  &&  ( e  =  { } ) ;  var  i  =  e , 
            n  =  yo . colocación , 
            s  =  vacío  0  ===  n ? t . colocación : n , 
            o  =  yo . límite , 
            r  =  vacío  0  ===  y ? Y : y , 
            un  =  yo . raíz , 
            l  =  vacío  0  ===  a ? Tt : un , 
            c  =  yo . elementoContexto , 
            h  =  vacío  0  ===  c ? Ct : c , 
            re  =  yo . altBoundary , 
            u  =  vacío  0  !==  d  &&  d , 
            f  =  yo . relleno , 
            p  =  vacío  0  ===  f ? 0 : f , 
            g  =  re ( "número"  !=  tipo de  p ? p : ae ( p ,  yt ) ) , 
            m  =  h  ===  Ct ? Ot : Ct , 
            _  =  t . rectifica _ Popper , 
            segundo  =  t . elementos [ tu ? m : h ] , 
            v  =  function ( t ,  e ,  i )  {  var  n  =  "recortarPadres"  ===  e ? función ( t )  {  var  e  =  Ee ( ee ( t ) ) , 
                            i  =  [ "absoluto" ,  "fijo" ] . indexOf ( Jt ( t ) . posición )  >=  0  &&  zt ( t ) ? no ( t ) : t ;  volver  Ft ( i ) ? mi . filtro ( ( función ( t )  {  return  Ft ( t )  &&  Gt ( t ,  i )  &&  "cuerpo"  !==  Wt ( t )  } ) ) : [ ]  } ( t ) : [ ] . concat ( e ) , 
                    s  =  [ ] . concat ( n ,  [ yo ] ) , 
                    o  =  s [ 0 ] , 
                    r  =  s . reduce ( ( function ( e ,  i )  {  var  n  =  Ce ( t ,  i ) ;  return  e . top  =  Kt ( n . top ,  e . top ) ,  e . right  =  Qt ( n . right ,  e . right ) ,  e . inferior  =  Qt ( n . inferior ,  e . inferior ) ,  e . izquierda  =  Kt ( n . izquierda ,  e . izquierda ) ,  e  } ) ,  Ce ( t ,  o ) ) ;  volver  r . ancho  =  r . derecha  -  r . izquierda ,  r . altura  =  r . abajo  -  r . arriba ,  r . x  =  r . izquierda ,  r . y  =  r . top ,  r  } ( Ft ( b ) ? b : b . contextElement  ||  te ( t . elementos . popper ) ,  r ,  l ) , 
            y  =  Yt ( t . elementos . referencia ) , 
            w  =  Oe ( {  referencia : y ,  elemento : _ ,  estrategia : "absoluta" ,  ubicación : s  } ) , 
            A  =  Te ( Objeto . asignar ( { } ,  _ ,  w ) ) , 
            E  =  h  ===  Ct  ?  A  :  y , 
            T  =  {  parte superior : v . arriba  -  E . arriba  +  g . arriba ,  abajo : E. _ abajo  -  v . abajo  +  g . abajo ,  izquierda : v . izquierda  -  E . izquierda  +  g . izquierda ,  derecha : E . derecho  -  v . derecha  +  g . derecha  } , 
            do  =  t_ _ modificadores de datos . compensar ;  if  ( h  ===  Ct  & &  C )  {  var  O  =  C [ s ] ; 
            objeto _ teclas ( T ) . forEach ( ( función ( t )  {  var  e  =  [ _t ,  mt ] . indexOf ( t )  >=  0 ? 1 : - 1 , 
                    yo  =  [ gt ,  mt ] . índice de ( t )  >=  0 ? "y" : "x" ; 
                T [ t ]  +=  O [ i ]  *  e  } ) )  }  volver  T  } 

    función  ke ( t ,  e )  {  void  0  ===  e  &&  ( e  =  { } ) ;  var  i  =  e , 
            n  =  yo . colocación , 
            s  =  yo . límite , 
            o  =  yo . raíz , 
            r  =  yo . relleno , 
            un  =  yo . FlipVariaciones , 
            yo  =  yo _ ubicaciones automáticas permitidas , 
            c  =  vacío  0  ===  l ? kt : yo , 
            h  =  qué ( n ) , 
            re  =  h ? un ? xt : xt . filtro ( ( función ( t )  {  retorno  ce ( t )  ===  h  } ) ) : yt , 
            tu  =  re . filtro ( ( función ( t )  {  retorno  c . indexOf ( t )  >=  0  } ) ) ; 
        0  ===  tu . longitud  &&  ( u  =  d ) ;  var  f  =  tu . reduce ( ( function ( e ,  i )  {  return  e [ i ]  =  xe ( t ,  {  ubicación : i ,  límite : s ,  rootBoundary : o ,  padding : r  } ) [ Vt ( i ) ] ,  e  } ) ,  { } ) ;  devolver  Objeto . teclas ( f ) . sort ( ( function ( t ,  e )  {  return  f [ t ]  -  f [ e ]  } ) )  }  const  Le  =  {  nombre : "flip" ,  habilitado : ! 0 ,  fase : "principal" ,  fn : función ( t )  {  var  e  =  t . estado , 
                yo  =  t . opciones , 
                n  =  t . nombre ;  if  ( ! e . modifiersData [ n ] . _skip )  {  for  ( var  s  =  i . mainAxis ,  o  =  void  0  ===  s  ||  s ,  r  =  i . altAxis ,  a  =  void  0  ===  r  ||  r ,  l  =  i _ .fallbackPlacements ,  c  =  i . padding ,  h  =  i . .rootBoundary ,  d  =  i _ border ,  u  =  i _ .altBoundary ,  f  =  i _ .flipVariations ,  p  =  void  0  ===  f  ||  f ,  g  =  i _ .autoubicaciones ,  m  =  e .opciones .colocación , Vt ,  _  =  Vt ( m ) (  b  =  l  ||  ! _  ==  m  &&  p ? función ( t )  {  if  ( t ( === )  vt  permitidas )  return  [ ] ;  var  e  =  yo ( t ) ;  return  [ ser ( t ) ,  e ,  ser ( e ) ]  } ( m ) : [ yo ( m ) ] ) ,  v  =  [ m ] . concat ( b ) . reduce ( ( función ( t ,  i )  {  return  t . concat ( Vt ( i )  ===  vt ? ke ( e ,  {  ubicación : i ,  límite : h ,  rootBoundary : d ,  padding : c ,  flipVariations : p ,  AllowAutoPlacements : g  } ) : i )  } ) ,  [ ] ) ,  y  =  e .rects .reference _ _ ,  w  =  e .rects .popper _ _ ,  A  =  nuevo  mapa ,  E  =  ! 0 ,  T  =  v [ 0 ] ,  C  =  0 ;  C  <  v . longitud ;  C ++ )  {  var  O  =  v [ C ] , 
                        x  =  Vt ( O ) , 
                        k  =  ce ( O )  ===  peso , 
                        L  =  [ gt ,  mt ] . índice de ( x )  >=  0 , 
                        D  =  L ? "ancho" : "alto" , 
                        S  =  xe ( e ,  {  ubicación : O ,  límite : h ,  raíz : d ,  límite alt : u ,  relleno : c  } ) , 
                        yo  =  L ? k ? _t : bt : k ? mt : gt ; 
                    y [ D ]  >  w [ D ]  &&  ( yo  =  yo ( yo ) ) ;  var  N  =  yo ( yo ) , 
                        PAG  =  [ ] ;  if  ( o  &&  P . presione ( S [ x ]  <=  0 ) ,  a  &&  P . presione ( S [ I ]  <=  0 ,  S [ N ]  <=  0 ) ,  P . cada ( ( función ( t )  {  volver  t  } ) ) )  {  T  =  O ,  E  =  ! 1 ;  romper  } 
                    un _ conjunto ( O ,  P )  }  si  ( E ) 
                    for  ( var  j  =  function ( t )  {  var  e  =  v . find ( ( function ( e )  {  var  i  =  A . get ( e ) ;  if  ( i )  return  i . slice ( 0 ,  t ) . cada ( ( función ( t )  {  devuelve  t  } ) )  } ) ) ;  si  ( e )  devuelve  T  =  e ,  "romper"  } ,  M  =  p ? 3 : 1 ;  M  >  0  &&  "romper"  !==  j ( M ) ;  M- _ ) ; 
                mi . colocación  !==  T  &&  ( p . modifiersData [ n ] . _skip  =  ! 0 ,  p . colocación  =  T ,  p . reset  =  ! 0 )  }  } ,  requireIfExists : [ "offset" ] ,  data : {  _skip : ! 1  }  } ; 

    function  De ( t ,  e ,  i )  {  return  void  0  ===  i  &&  ( i  =  {  x : 0 ,  y : 0  } ) ,  {  top : t . arriba  -  e . altura  -  yo . y ,  derecha : t . derecha  -  e . ancho  +  yo . x ,  abajo : t . abajo  -  e . altura  +  yo . y ,  izquierda : t . izquierda  -  e . ancho  -  yo . x  }  } 

    función  Se ( t )  {  retorno  [ gt ,  _t ,  mt ,  bt ] . some ( ( function ( e )  {  return  t [ e ]  >=  0  } ) )  }  const  Ie  =  {  nombre : "hide" ,  habilitado : ! 0 ,  fase : "main" ,  requireIfExists : [ "preventOverflow" ] ,  fn : function ( t )  {  var  e  =  t . estado , 
                    yo  =  t . nombre , 
                    n  =  mi . rectifica _ referencia , 
                    s  =  mi . rectifica _ Popper , 
                    o  =  e . modificadores de datos . prevenir el desbordamiento , 
                    r  =  xe ( e ,  {  elementContext : "referencia"  } ) , 
                    a  =  xe ( e ,  {  altBoundary : ! 0  } ) , 
                    l  =  De ( r ,  n ) , 
                    c  =  De ( un ,  s ,  o ) , 
                    h  =  Se ( l ) , 
                    d  =  Se ( c ) ; 
                mi . modifiersData [ i ]  =  {  referenceClippingOffsets : l ,  popperEscapeOffsets : c ,  isReferenceHidden : h ,  hasPopperEscaped : d  } ,  e . atributos _ popper  =  Objeto . asignar ( { } ,  e . atributos . popper ,  {  "data-popper-reference-hidden" : h ,  "data-popper-escaped" : d  } )  }  } , 
        Ne  =  {  nombre : "compensación" ,  habilitado : ! 0 ,  fase : "principal" ,  requiere : [ "popperOffsets" ] ,  fn : función ( t )  {  var  e  =  t . estado , 
                    yo  =  t . opciones , 
                    n  =  t . nombre , 
                    s  =  yo . compensar , 
                    o  =  vacío  0  ===  s ? [ 0 ,  0 ] : s , 
                    r  =  kt . reducir ( ( función ( t ,  i )  {  return  t [ i ]  =  función ( t ,  e ,  i )  {  var  n  =  Vt ( t ) , 
                                s  =  [ bt ,  gt ] . indexOf ( n )  >=  0 ? - 1 : 1 , 
                                o  =  "función"  ==  tipo de  i ? i ( Objeto . asignar ( { } ,  e ,  {  ubicación : t  } ) ) : i , 
                                r  =  o [ 0 ] , 
                                un  =  o [ 1 ] ;  devuelve  r  =  r  ||  0 ,  un  =  ( un  ||  0 )  *  s ,  [ bt ,  _t ] . indexOf ( n )  >=  0 ? {  x : a ,  y : r  } : {  x : r ,  y : a  }  } ( i ,  e . rects ,  o ) ,  t  } ) ,  { } ) , 
                    un  =  r [ mi . colocación ] , 
                    l  =  un . x , 
                    c  =  a . y ; 
                nulo  !=  e . modificadores de datos . popperOffsets  &&  ( p . modifiersData . popperOffsets . x  +=  l ,  e . modifiersData . popperOffsets . y  +=  c ) ,  e . modificadoresData [ n ]  =  r  }  } , 
        Pe  =  {  nombre : "popperOffsets ,  habilitado :! " 0 ,  fase : "leer" ,  fn : función ( t )  {  var  e  =  t . estado , 
                    yo  =  t . nombre ; 
                mi . modifiersData [ i ]  =  Oe ( {  referencia : e . rects . referencia ,  elemento : e . rects . popper ,  estrategia : "absoluto" ,  ubicación : e . ubicación  } )  } ,  datos : { }  } , 
        je  =  {  nombre : "preventOverflow" ,  habilitado : ! 0 ,  fase : "principal" ,  fn : función ( t )  {  var  e  =  t . estado , 
                    yo  =  t . opciones , 
                    n  =  t . nombre , 
                    s  =  yo . eje principal , 
                    o  =  vacío  0  ===  s  ||  s , 
                    r  =  yo . eje alt , 
                    a  =  vacío  0  !==  r  &&  r , 
                    yo  =  yo _ límite , 
                    c  =  yo . raíz , 
                    h  =  yo . altBoundary , 
                    re  =  yo . relleno , 
                    tu  =  yo _ atadura , 
                    f  =  vacío  0  ===  y  ||  y , 
                    pag  =  yo . atadura , 
                    g  =  vacío  0  ===  p ? 0 : pag , 
                    m  =  xe ( e ,  {  límite : l ,  raíz : c ,  relleno : d ,  límite alt : h  } ) , 
                    _  =  Vt ( e . colocación ) , 
                    b  =  ce ( e . colocación ) , 
                    v  =  ! b , 
                    y  =  se ( _ ) , 
                    w  =  "x"  ===  y ? "y" : "x" , 
                    A  =  mi . modificadores de datos . compensaciones popper , 
                    mi  =  mi . rectifica _ referencia , 
                    T  =  mi . rectifica _ Popper , 
                    C  =  "función"  ==  tipo de  g ? g ( Objeto . asignar ( { } ,  e . rects ,  {  ubicación : e . ubicación  } ) ) : g , 
                    O  =  "número"  ==  tipo de  C ? {  eje principal : C ,  eje alt : C  } : Objeto . asignar ( {  eje principal : 0 ,  eje alt : 0  } ,  C ) , 
                    x  =  e . modificadores de datos . compensar ? mi . modificadores de datos . compensar [ mi . colocación ] : nulo , 
                    k  =  {  x : 0 ,  y : 0  } ;  si  ( A )  {  si  ( o )  {  var  L ,  D  =  "y"  ===  y ? gt : bt , 
                            S  =  "y"  ===  y ? mt : _t , 
                            yo  =  "y"  ===  y ? "alto" : "ancho" , 
                            N  =  A [ y ] , 
                            PAG  =  norte  +  metro [ re ] , 
                            j  =  norte  -  metro [ S ] , 
                            M  =  f ? - T [ yo ]  /  2 : 0 , 
                            H  =  b  ===  peso ? E [ yo ] : T [ yo ] , 
                            $  =  segundo  ===  peso ? - T [ yo ] : - mi [ yo ] , 
                            W  =  mi . elementos _ flecha , 
                            B  =  f  &&  W ? Ut ( W ) : {  ancho : 0 ,  alto : 0  } , 
                            F  =  mi . modifiersData [ "flecha#persistente" ] ? mi . modifiersData [ "flecha#persistente" ] . relleno : {  arriba : 0 ,  derecha : 0 ,  abajo : 0 ,  izquierda : 0  } , 
                            z  =  F [ re ] , 
                            R  =  F [ S ] , 
                            q  =  tú ( 0 ,  mi [ yo ] ,  segundo [ yo ] ) , 
                            V  =  v ? mi [ yo ]  /  2  -  m  -  q  -  z  -  o . eje principal : H  -  q  -  z  -  O . eje principal , 
                            K  =  v ? - mi [ yo ]  /  2  +  METRO  +  q  +  R  +  O . eje principal : $  +  q  +  R  +  O . eje principal , 
                            Q  =  mi . elementos _ flecha  &&  ne ( p . elementos . flecha ) , 
                            X  =  Q ? "y"  ===  y ? P. _ clienteTop  ||  0 : P. _ clienteIzquierdo  ||  0 : 0 , 
                            Y  =  nulo  !=  ( L  =  nulo  ==  x ? vacío  0 : x [ y ] ) ? L : 0 , 
                            U  =  N  +  K  -  Y , 
                            G  =  oe ( f ? Qt ( PAGS ,  N  +  V  -  Y  -  X ) : PAGS ,  N ,  f ? Kt ( j ,  U ) : j ) ; 
                        A [ y ]  =  G ,  k [ y ]  =  G  -  N  }  si  ( a )  {  var  J ,  Z  =  "x"  ===  y ? gt : bt , 
                            tt  =  "x"  ===  y ? mt : _t , 
                            y  =  A [ w ] , 
                            es  =  "y"  ===  w ? "alto" : "ancho" , 
                            nt  =  et  +  m [ Z ] , 
                            st  =  et  -  m [ tt ] , 
                            ot  =  - 1  !==  [ gt ,  bt ] . índice de ( _ ) , 
                            rt  =  null  !=  ( J  =  null  ==  x ? void  0 : x [ w ] ) ? J : 0 , 
                            en  =  ot ? nt : et  -  E [ it ]  -  T [ it ]  -  rt  +  O . eje alt , 
                            lt  =  ot ? et  +  E [ it ]  +  T [ it ]  -  rt  -  O . eje alt : st , 
                            ct  =  f  &&  ot ? función ( t ,  e ,  i )  {  var  n  =  oe ( t ,  e ,  i ) ;  devolver  n  >  i ? i : n  } ( at ,  et ,  lt ) : oe ( f ? at : nt ,  et ,  f ? lt : st ) ; 
                        A [ w ]  =  ct ,  k [ w ]  =  ct  -  et  } 
                    mi . modifiersData [ n ]  =  k  }  } ,  requireIfExists : [ "offset" ]  } ; 

    función  Me ( t ,  e ,  i )  {  void  0  ===  i  &&  ( i  =  ! 1 ) ;  var  n ,  s ,  o  =  zt ( e ) , 
            r  =  zt ( e )  &&  función ( t )  {  var  .  =  t mi getBoundingClientRect ( ) , 
                    i  =  Xt ( e . ancho )  /  t . ancho de compensación  ||  1 , 
                    n  =  Xt ( e . altura )  /  t . altura de compensación  ||  1 ;  devuelve  1  !==  yo  ||  1  !==  n  } ( e ) , 
            a  =  la ( e ) , 
            l  =  Yt ( t ,  r ) , 
            c  =  {  desplazamiento : 0 ,  desplazamiento : 0  } , 
            h  =  {  x : 0 ,  y : 0  } ;  return  ( o  ||  ! o  &&  ! i )  &&  ( ( "cuerpo"  !==  Wt ( e )  ||  we ( a ) )  &&  ( c  =  ( n  =  e )  !==  Bt ( n )  &&  zt ( n ) ? {  scrollLeft : ( s  =  n ) . scrollLeft ,  scrollTop : s . scrollTop  } : ve ( n ) ) ,  zt ( e ) ? ( ( h  =  Yt ( e ,  ! 0 ) ) . x  +=  e . clientLeft ,  h . y  +=  e . clientTop ) : a  &&  ( h . x  =  ye ( a ) ) ) ,  {  x : l . izquierda  +  c . desplazarse hacia la izquierda  -  h . x ,  y : l . arriba  +  c . scrollTop  -  h . y ,  ancho : l . ancho ,  alto : l . altura  }  } 

    función  He ( t )  {  var  e  =  nuevo  Mapa , 
            i  =  nuevo  conjunto , 
            norte  =  [ ] ; 

        función  s ( t )  {  yo . añadir ( t . nombre ) ,  [ ] . concat ( t . requiere  ||  [ ] ,  t . requiere  si existe ||  [ ] ) . forEach ( ( function ( t )  {  if  ( ! i . has ( t ) )  {  var  n  =  e . get ( t ) ; 
                    n  &&  s ( n )  }  } ) ) ,  n . empujar ( t )  }  volver  t . forEach ( ( función ( t )  {  e . set ( t . nombre ,  t )  } ) ) ,  t . forEach ( ( función ( t )  {  i . tiene ( t . nombre )  ||  s ( t )  } ) ) ,  n  }  var  $e  =  {  ubicación : "abajo" ,  modificadores : [ ] ,  estrategia : "absoluto"  } ; 

    function  We ( )  {  for  ( var  t  =  argumentos . longitud ,  e  =  new  Array ( t ) ,  i  =  0 ;  i  <  t ;  i ++ )  e [ i ]  =  argumentos [ i ] ;  volver  ! mi . algunos ( ( función ( t )  {  retorno  ! ( t  &&  "función"  ==  getBoundingClientRect  t . tipo )  } ) )  } 

    función  Be ( t )  {  void  0  ===  t  &&  ( t  =  { } ) ;  var  e  =  t , 
            yo  =  mi _ modificadores predeterminados , 
            n  =  vacío  0  ===  i ? [ ] : yo , 
            s  =  mi . opciones por defecto , 
            o  =  vacío  0  ===  s ? $e : s ;  retorno  función ( t ,  e ,  i )  {  void  0  ===  i  &&  ( i  =  o ) ;  var  s ,  r ,  a  =  {  ubicación : "abajo" ,  modificadores ordenados : [ ] ,  opciones : objeto . asignar ( { } ,  $e ,  o ) ,  modificadoresData : { } ,  elementos : {  referencia : t ,  popper : e  } ,  atributos : { } ,  estilos : { }  } , 
                l  =  [ ] , 
                c  =  ! 1 , 
                h  =  {  state : a ,  setOptions : function ( i )  {  var  s  =  "function"  ==  typeof  i ? i ( a . opciones ) : i ; 
                        d ( ) ,  un . opciones  =  Objeto . asignar ( { } ,  o ,  a . opciones ,  s ) ,  a . scrollParents  =  {  referencia : Ft ( t ) ? Ee ( t ) : t . elemento de contexto ? Ee ( t . contextElement ) : [ ] ,  popper : Ee ( e )  } ;  var  r ,  c ,  u  =  función ( t )  {  var  e  =  Él ( t ) ;  devolver  $t . reduce ( ( función ( t ,  i )  {  return  t . concat ( e . filter ( ( función ( t )  {  return  t . fase  ===  i  } ) ) )  } ) ,  [ ] )  } ( ( r  =  [ ] . concat ( n ,  a . opciones . modificadores ) ,  c  =  r . reduce ( ( función ( t ,  e )  {  var  i  =  t [ e . nombre ] ;  return  t [ e . nombre ]  =  i ? Objeto . asignar ( { } ,  i ,  e ,  {  opciones : Objeto _ .asigne ( { } ,  i _ .opciones ,  e _ .opciones ) ,  datos : Objeto .asigne _ ( { } ,  i.datos _ _ ,  e.datos _ _ )  } ) : e ,  t  } ) ,  { } ) ,  Objeto . teclas ( c ) . mapa ( ( función ( t )  {  retorno  c [ t ]  } ) ) ) ) ;  devolver  un . modificadoresordenados  =  u . filtro ( ( función ( t )  {  volver  t . habilitado  } ) ) ,  a . modificadores ordenados . forEach ( ( función ( t )  {  var  e  =  t . nombre , 
                                yo  =  t . opciones , 
                                n  =  vacío  0  ===  i ? { } : yo , 
                                s  =  t . efecto ;  if  ( "función"  ==  tipo  de s )  {  var  o  =  s ( {  estado : a ,  nombre : e ,  instancia : h ,  opciones : n  } ) ; 
                                yo _ empujar ( o  ||  función ( )  { } )  }  } ) ) ,  h . actualizar ( )  } ,  forceUpdate : function ( )  {  if  ( ! c )  {  var  t  =  a . elementos , 
                                mi  =  t . referencia , 
                                yo  =  t . popper ;  si  ( Nosotros ( e ,  yo ) )  {  un . rects  =  {  referencia : Me ( e ,  ne ( i ) ,  "fijo"  ===  a . opciones . estrategia ) ,  popper : Ut ( i )  } ,  a . restablecer  =  ! 1 ,  un . colocación  =  un . opciones _ colocación ,  un . modificadores ordenados . forEach ( ( función ( t )  {  devuelve  a . modifiersData [ t . nombre ]  =  Objeto . asignar ( { } ,  t . datos )  } ) ) ;  for  ( var  n  =  0 ;  n  <  a . orderedModifiers . length ;  n ++ ) 
                                    if  ( ! 0  !==  a . reset )  {  var  s  =  a . modificadores ordenados [ n ] , 
                                            o  =  s . fn , 
                                            r  =  s . opciones , 
                                            l  =  vacío  0  ===  r ? { } : r , 
                                            re  =  s . nombre ;  "función"  ==  &&  o  tipo  ( a  =  o ( {  estado : a ,  opciones : l ,  nombre : d ,  instancia : h  } )  ||  a )  }  else  a . restablecer  =  ! 1 ,  n  =  - 1  }  }  } ,  actualizar : ( s  =  function ( )  {  return  new  Promise ( ( function ( t )  {  h . forceUpdate ( ) ,  t ( a )  } ) )  } ,  function ( )  {  return  r  ||  ( r  =  nueva  Promesa ( ( función ( t )  {  Promesa . resolver ( ) . entonces ( ( función ( )  {  r  =  void  0 ,  t ( s ( ) )  } ) )  } ) ) ) ,  r  } ) ,  destruir : función ( )  {  d ( ) ,  c  =  ! 0  }  } ;  if  ( ! Nosotros ( t ,  e ) )  devuelve  h ; 

            función  re ( )  {  l . forEach ( ( function ( t )  {  return  t ( )  } ) ) ,  l  =  [ ]  }  return  h . establecerOpciones ( i ) . luego ( ( function ( t )  { ! c  &&  i . onFirstUpdate  &&  i . onFirstUpdate ( t )  } ) ) ,  h  }  }  var  Fe  =  Be ( ) , 
        ze  =  Ser ( {  modificadores predeterminados : [ pe ,  Pe ,  ue ,  qt ]  } ) , 
        Re  =  Ser ( {  modificadores predeterminados : [ pe ,  Pe ,  ue ,  qt ,  Ne ,  Le ,  je ,  le ,  Ie ]  } ) ;  const  qe  =  Objeto . congelar ( Object . defineProperty ( {  __proto__ : null ,  popperGenerator : Be ,  detectOverflow : xe ,  createPopperBase : Fe ,  createPopper : Re ,  createPopperLite : ze ,  top : gt ,  bottom : mt ,  right : _t ,  left : bt ,  auto : vt ,  BasePlacements : yt ,  start : wt ,  end : At ,  clippingParents : Et ,  viewport : Tt ,  popper : Ct ,  reference : Ot ,  variacionesPlacements : xt ,  ubicaciones : kt ,  beforeRead : Lt ,  read : Dt ,  afterRead : St ,  beforeMain : It ,  main : Nt ,  afterMain : Pt ,  beforeWrite : jt ,  write : Mt ,  afterWrite : Ht ,  modifierPhases : $t ,  applyStyles : qt ,  arrow : le ,  computeStyles : ue ,  eventListeners : pe ,  flip : Le ,  hide : decir ,  offset : Ne ,  popperOffsets : Pe ,  preventOverflow : je  } ,  Symbol.toStringTag , value :  {  , } Module  ) ) " " 
        Ve  =  "desplegable" , 
        Ke  =  "Flecha arriba" , 
        qe  =  "flecha abajo" , 
        Xe  =  "clic.bs.dropdown.data-api" , 
        keydown.bs.dropdown.data  =  -api" , 
        Ue  =  "mostrar" , 
        Ge  =  '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)' , 
        Je  =  ` ${ Ge } .mostrar` , 
        Ze  =  ". menú desplegable" , 
        ti  =  pag ( ) ? "extremo superior" : "inicio superior" , 
        ei  =  p ( ) ? "inicio superior" : "extremo superior" , 
        ii  =  pag ( ) ? "extremo inferior" : "inicio inferior" , 
        ni  =  pag ( ) ? "inicio inferior" : "extremo inferior" , 
        si  =  pag ( ) ? "inicio izquierdo" : "inicio derecho" , 
        oi  =  pag ( ) ? "inicio derecho" : "inicio izquierdo" , 
        ri  =  {  cierre automático : ! 0 ,  límite : "clippingParents" ,  pantalla : "dinámico" ,  desplazamiento : [ 0 ,  2 ] ,  popperConfig : nulo ,  referencia : "alternar"  } , 
        ai  =  {  autoClose : "(booleano|cadena)" ,  límite : "(cadena|elemento)" ,  pantalla : "cadena" ,  desplazamiento : "(matriz|cadena|función)" ,  popperConfig : "(nulo|objeto|función )" ,  referencia : "(cadena|elemento|objeto)"  } ; 
    clase  li  extiende  z  {  constructor ( t ,  e )  {  super ( t ,  e ) ,  this . _popper  =  nulo ,  esto . _padre  =  esto . _elemento . parentNode ,  este . _menú  =  Q. _ findOne ( Ze ,  this . _parent ) ,  this . _inNavbar  =  esto . _detectNavbar ( )  } 
        static  get  Predeterminado ( )  {  return  ri  } 
        estático  get  DefaultType ( )  {  return  ai  } 
        estático  get  NOMBRE ( )  {  return  Ve  } 
        alternar ( )  {  devolver  esto . _se muestra ( ) ? esto _ ocultar ( ) : esto . mostrar ( )  } 
        show ( )  {  if  ( l ( this . _element )  ||  this . _isShown ( ) )  return ;  const  t  =  {  objetivorelacionado : esto . _elemento  } ;  if  ( ! P . trigger ( this . _element ,  "show.bs.dropdown ,  t ) . defaultPrevented )  {  if  ( this . _createPopper ( ) ,  ontouchstart  in  document . documentElement  &&  ! this . _parent . " " " barra de navegación-navegación" ) ) 
                    for  ( const  t  de [ ] . concat ( ... documento . cuerpo . niños ) )  P . en ( t ,  "mouseover" ,  h ) ; 
                esto _ _elemento . foco ( ) ,  esto . _elemento . setAttribute ( "aria-expandida" ,  ! 0 ) ,  este . _menú . listaclases . añadir ( Ue ) ,  esto . _elemento . listaclases . sumar ( Ue ) ,  P. _ disparador ( este . _elemento ,  "mostrado.bs.desplegable" ,  t )  }  } 
        hide ( )  {  if  ( l ( this . _element )  ||  ! this . _isShown ( ) )  return ;  const  t  =  {  objetivorelacionado : esto . _elemento  } ; 
            esto _ _completaOcultar ( t )  } 
        disponer ( )  {  esto . _popper  &&  esto . _popper . destruir ( ) ,  súper . desechar ( )  } 
        actualizar ( )  {  este . _inNavbar  =  esto . _detectNavbar ( ) ,  este . _popper  &&  esto . _popper . actualizar ( )  } 
        _completeHide ( t )  {  if  ( ! P . trigger ( this . _element ,  "hide.bs.dropdown" ,  t ) . defaultPrevented )  {  if  ( "ontouchstart"  in  document . documentElement ) 
                    for  ( const  t  de [ ] . concat ( ... documento . cuerpo . niños ) )  P . apagado ( t ,  "mouseover" ,  h ) ; 
                esto _ _popper  &&  esto . _popper . destruir ( ) ,  esto . _menú . listaclases . quitar ( Ue ) ,  esto . _elemento . listaclases . quitar ( Ue ) ,  esto . _elemento . setAttribute ( "aria-expandida" ,  "falso" ) ,  B . removeDataAttribute ( this . _menu ,  "popper" ) ,  P . disparador ( este . _elemento ,  "hidden.bs.dropdown" ,  t )  }  } 
        _getConfig ( t )  {  if  ( "objeto"  ==  _getConfig ( t  =  super . tipo ( t ) ) . referencia  &&  ! o ( t . referencia )  &&  "función"  !=  getBoundingClientRect  t . referencia . throw )  de  new  TypeError ( ` ${ Ve . toUpperCase ( ) } : Opción "referencia" proporcionada tipo "objeto" sin un método "getBoundingClientRect" requerido.` ) ;  volver  t  } 
        _createPopper ( )  {  if  ( void  0  ===  qe )  arroja un  nuevo  TypeError ( "Los menús desplegables de Bootstrap requieren Popper (https://popper.js.org)" ) ;  Sea  t  =  esto . _elemento ;  "padre"  ===  esto . _config . referencia ? t  =  esto . _parent : o ( esta . _config . referencia ) ? t  =  r ( this . _config . referencia ) : "objeto"  ==  tipo de  this . _config . referencia  &&  ( t  =  this . _config . referencia ) ;  constante  e  =  esto . _getPopperConfig ( ) ; 
            esto _ _popper  =  Re ( t ,  this . _menu ,  e )  } 
        _isShown ( )  {  devuelve  esto . _menú . listaclases . contiene ( Ue )  } 
        _getPlacement ( )  {  const  t  =  esto . _padre ;  if  ( t . classList . contains ( "dropend" ) )  return  si ;  if  ( t . classList . contains ( "dropstart" ) )  return  oi ;  if  ( t . classList . contains ( "dropup-center" ) )  return  "top" ;  if  ( t . classList . contains ( "dropdown-center" ) )  return  "bottom" ;  const  e  =  "fin"  ===  getComputedStyle ( this . _menu ) . getPropertyValue ( "--bs-position" ) . recortar ( ) ;  volver  t . listaclases . contiene ( "dropup" ) ? mi ? ei : ti : e ? ni : ii  } 
        _detectNavbar ( )  {  devuelve  nulo  !==  esto . _elemento . más cercano ( ".navbar" )  } 
        _getOffset ( )  {  const  {  desplazamiento : t  }  =  esto . _config ;  devuelve  "cadena"  ==  tipo  t ? t . dividir ( "," ) . mapa ( ( t  =>  Número . parseInt ( t ,  10 ) ) ) : "función"  ==  tipo de  t ? e  =>  t ( e ,  este . _elemento ) : t  } 
        _getPopperConfig ( )  {  const  t  =  {  ubicación : este . _getPlacement ( ) ,  modificadores : [ {  nombre : "preventOverflow" ,  opciones : {  límite : este . _config . límite  }  } ,  {  nombre : "desplazamiento" ,  opciones : {  desplazamiento : este . _getOffset ( )  }  } ]  } ;  return  ( this . _inNavbar  ||  "static"  ===  this . _config . display )  &&  ( B . setDataAttribute ( this . _menu ,  "popper" ,  "static" ) ,  t . modifiers  =  [ {  name : "applyStyles" ,  habilitado : ! 1  } ] ) ,  { ... t , ... "función"  ==  tipo de  esto . _config . popperConfig ? esto _ _config . popperConfig ( t ) : esto . _config . popperConfig  }  } 
        _selectMenuItem ( {  clave : t ,  objetivo : e  } )  {  const  i  =  Q . find ( ". menú desplegable . elemento desplegable: no (. deshabilitado): no (: deshabilitado)" ,  este . _menu ) . filtrar ( ( t  =>  a ( t ) ) ) ; 
            yo _ longitud  &&  b ( i ,  e ,  t  ===  Qe ,  ! i . incluye ( e ) ) . foco ( )  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  li . getOrCreateInstance ( this ,  t ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  e [ t ] )  throw  new  TypeError ( `Ningún método nombrado " ${ t } "` ) ; 
                    mi [ t ] ( )  }  } ) )  } 
        static  clearMenus ( t )  {  if  ( 2  ===  t . button  ||  "keyup"  ===  t . type  &&  "Tab"  !==  t . key )  return ;  constante  e  =  Q . encontrar ( Je ) ;  para  ( const  i  de  e )  {  const  e  =  li . getInstance ( i ) ;  if  ( ! e  ||  ! 1  ===  e . _config . autoClose )  continuar ;  constante  n  =  t . RutaCompuesta ( ) , 
                    s  =  norte . incluye ( p . _menu ) ;  if  ( n . incluye ( e . _element )  ||  "dentro"  ===  e . _config . autoClose  &&  ! s  ||  "outside"  ===  e . _config . autoClose  &&  s )  continue ;  if  ( e . _menu . contiene ( t . target )  &&  ( "keyup"  ===  t . type  &&  "Tab"  ===  t . key  ||  / input | select | option | textarea | form / i . test ( t.target.tagName _ _ _ _ ) ) )  continuar ;  const  o  =  {  objetivo relacionado : e . _elemento  } ;  "clic"  ===  t . escriba  &&  ( o . clickEvent  =  t ) ,  e . _completaOcultar ( o )  }  } 
        static  dataApiKeydownHandler ( t )  {  const  e  =  / input | área de texto / i . prueba ( t . target . tagName ) , 
                yo  =  "Escapar"  ===  t . clave , 
                norte  =  [ Ke ,  Qe ] . incluye ( t . clave ) ;  si  ( ! n  &&  ! i )  devuelve ;  si  ( e  &&  ! i )  regresa ; 
            t . prevenirPredeterminado ( ) ;  constante  s  =  Q . findOne ( Ge ,  t . delegadoTarget . parentNode ) , 
                o  =  li . getOrCreateInstance ( s ) ;  si  ( n )  devuelve  t . detener la propagación ( ) ,  o . mostrar ( ) ,  anular  o . _selectMenuItem ( t ) ; 
            o . _isShown ( )  &&  ( t . stopPropagation ( ) ,  o . hide ( ) ,  s . focus ( ) )  }  } 
    pag _ en ( documento ,  Ye ,  Ge ,  li . dataApiKeydownHandler ) ,  P . en ( documento ,  Ye ,  Ze ,  li . dataApiKeydownHandler ) ,  P . en ( documento ,  Xe ,  li . clearMenus ) ,  P . en ( documento ,  "keyup.bs.dropdown.data-api ,  li . clearMenus ) ,  P. " en ( documento ,  Xe ,  Ge ,  ( función ( t )  {  t . preventDefault ( ) ,  li . getOrCreateInstance ( esto ) . alternar ( )  } ) ) ,  g ( li ) ;  const  ci  =  ".superior fijo, .inferior fijo, .es-fijo, .superior pegajoso" , 
        hola  =  ".sticky-top" , 
        di  =  "relleno derecho" , 
        ui  =  "margen derecho" ; 
    clase  fi  {  constructor ( )  {  esto . _elemento  =  documento . cuerpo  } 
        getWidth ( )  {  const  t  =  documento . documentoElemento . ancho del cliente ;  devolver  Matemáticas . abs ( ventana . ancho interior  -  t )  } 
        ocultar ( )  {  const  t  =  esto . obtenerAncho ( ) ; 
            esto _ _disableOverFlow ( ) ,  este . _setElementAttributes ( this . _element ,  di ,  ( e  =>  e  +  t ) ) ,  this . _setElementAttributes ( ci ,  di ,  ( e  =>  e  +  t ) ) ,  este . _setElementAttributes ( hola ,  ui ,  ( e  =>  e  -  t ) )  } 
        restablecer ( )  {  este . _resetElementAttributes ( this . _element ,  "overflow" ) ,  this . _resetElementAttributes ( este . _elemento ,  di ) ,  este . _resetElementAttributes ( ci ,  di ) ,  este . _resetElementAttributes ( hola ,  ui )  } 
        isOverflowing ( )  {  devuelve  esto . obtenerAncho ( )  >  0  } 
        _disableOverFlow ( )  {  este . _saveInitialAttribute ( este . _elemento ,  "desbordamiento" ) ,  este . _elemento . estilo _ desbordamiento  =  "oculto"  } 
        _setElementAttributes ( t ,  e ,  i )  {  const  n  =  this . obtenerAncho ( ) ; 
            esto _ _applyManipulationCallback ( t ,  ( t  =>  {  if  ( t  !==  this . _element  &&  window . innerWidth  >  t . clientWidth  +  n )  return ; 
                esto _ _saveInitialAttribute ( t ,  e ) ;  constante  s  =  ventana . obtener Estilo Computado ( t ) . obtenerValorPropiedad ( e ) ; 
                t . estilo _ setProperty ( e ,  ` ${ i ( Número . parseFloat ( s ) ) } px` )  } ) )  } 
        _saveInitialAttribute ( t ,  e )  {  const  i  =  t . estilo _ obtenerValorPropiedad ( e ) ; 
            yo  &  B. & setDataAttribute ( t ,  e ,  i )  } 
        _resetElementAttributes ( t ,  e )  {  este . _applyManipulationCallback ( t ,  ( t  =>  {  const  i  =  B . getDataAttribute ( t ,  e ) ; 
                nulo  !==  yo ? ( B . removeDataAttribute ( t ,  e ) ,  t . style . setProperty ( e ,  i ) ) : t . estilo _ removeProperty ( e )  } ) )  } 
        _applyManipulationCallback ( t ,  e )  {  if  ( o ( t ) )  e ( t ) ; 
            más 
                for  ( const  i  de  Q . find ( t ,  this . _element ) )  e ( i )  }  }  const  pi  =  "mostrar" , 
        gi  =  "mousedown.bs.backdrop" , 
        mi  =  {  className : "modal-backdrop" ,  clickCallback : null ,  isAnimated : ! 1 ,  :! es visible 0 ,  elemento raíz : "cuerpo"  } , 
        _i  =  {  className : "string" ,  clickCallback : "(function|null)" ,  isAnimated : "boolean" ,  isVisible : "boolean" ,  rootElement : "(element|string)"  } ; 
    clase  bi  extiende  F  {  constructor ( t )  {  super ( ) ,  esto . _config  =  esto . _getConfig ( t ) ,  este . _isAppended  =  ! 1 ,  esto . _elemento  =  nulo  } 
        static  get  Predeterminado ( )  {  return  mi  } 
        estático  get  DefaultType ( )  {  return  _i  } 
        estático  obtener  NOMBRE ( )  {  devolver  "telón de fondo"  } 
        mostrar ( t )  {  if  ( ! esto . _config . isVisible )  devuelve  void  m ( t ) ; 
            esto _ _agregar ( ) ;  constante  e  =  esto . _obtenerElemento ( ) ; 
            esto _ _config . isAnimated  &&  d ( e ) ,  e . listaclases . añadir ( pi ) ,  esto . _emulateAnimation ( ( ( )  =>  {  m ( t )  } ) )  } 
        esconder ( t )  {  esto . _config . esVisible ? ( this . _getElement ( ) . classList . remove ( pi ) ,  this . _emulateAnimation ( ( ( )  =>  {  this . dispose ( ) ,  m ( t )  } ) ) ) : m ( t )  } 
        disponer ( )  {  esto . _isAppended  &&  ( P . off ( this . _element ,  gi ) ,  this . _element . remove ( ) ,  this . _isAppended  =  ! 1 )  } 
        _getElement ( )  {  if  ( ! this . _element )  {  const  t  =  documento . crear elemento ( "div" ) ; 
                t . className  =  esto . _config . className ,  este . _config . está animado  &&  t . listaclases . agregar ( "desvanecerse" ) ,  esto . _element  =  t  }  devuelve  esto . _elemento  } 
        _configAfterMerge ( t )  {  devuelve  t . elementoraíz  =  r ( t . elementoraíz ) ,  t  } 
        _append ( )  {  if  ( this . _isAppended )  return ;  constante  t  =  esto . _obtenerElemento ( ) ; 
            esto _ _config . elemento raíz . añadir ( t ) ,  P . en ( t ,  gi ,  ( ( )  =>  {  m ( this . _config . clickCallback )  } ) ) ,  this . _isAppended  =  ! 0  } 
        _emulateAnimation ( t )  {  _ ( t ,  this . _getElement ( ) ,  this . _config . isAnimated )  }  }  const  vi  =  ".bs.focustrap" , 
        yi  =  "hacia atrás" , 
        wi  =  {  enfoque automático : ! 0 ,  trapElement : nulo  } , 
        Ai  =  {  enfoque automático : "booleano" ,  trapElement : "elemento"  } ; 
    clase  Ei  extiende  F  {  constructor ( t )  {  super ( ) ,  this . _config  =  esto . _getConfig ( t ) ,  este . _isActive  =  ! 1 ,  esto . _lastTabNavDirection  =  nulo  } 
        static  get  Predeterminado ( )  {  return  wi  } 
        estático  get  DefaultType ( )  {  return  Ai  } 
        estático  get  NOMBRE ( )  {  return  "focustrap"  } 
        activar ( )  {  esto . _esActivo  ||  ( this . _config . autofocus  &&  this . _config . trapElement . focus ( ) ,  P . off ( document ,  vi ) ,  P . on ( document ,  "focusin.bs.focustrap" ,  ( t  =>  this . _handleFocusin ( t ) ) ) ,  P . en ( documento ,  "keydown.tab.bs.focustrap" ,  ( t  =>  esto . _handleKeydown ( t ) ) ) ,  esto . _isActive  =  ! 0 )  } 
        desactivar ( )  {  esto . _isActive  &&  ( this . _isActive  =  ! 1 ,  P . off ( document ,  vi ) )  } 
        _handleFocusin ( t )  {  const  {  trapElement : e  }  =  esto . _config ;  if  ( t . target  ===  documento  ||  t . target  ===  e  ||  e . contiene ( t . target ) )  return ;  constante  i  =  Q . niños enfocables ( e ) ; 
            0  ===  yo . longitud ? mi . foco ( ) : este . _lastTabNavDirection  ===  yi ? yo [ yo . longitud  -  1 ] . foco ( ) : yo [ 0 ] . foco ( )  } 
        _handleKeydown ( t )  {  "Tab"  ===  t . tecla  &&  ( this . _lastTabNavDirection  =  t . shiftKey ? yi : "adelante" )  }  }  const  Ti  =  "hidden.bs.modal" , 
        Ci  =  "mostrar.bs.modal" , 
        Oi  =  "modal-abierto" , 
        xi  =  "mostrar" , 
        ki  =  "modal-estático" , 
        Li  =  {  telón : ! 0 ,  foco :! _ 0 ,  teclado :! _ 0  } , 
        Di  =  {  telón : "(booleano|cadena)" ,  foco : "booleano" ,  teclado : "booleano"  } ; 
    clase  Si  extiende  z  {  constructor ( t ,  e )  {  super ( t ,  e ) ,  this . _diálogo  =  Q . findOne ( ".modal-dialog" ,  this . _element ) ,  this . _telón de fondo  =  esto . _initializeBackDrop ( ) ,  este . _focustrap  =  esto . _initializeFocusTrap ( ) ,  este . _isMostrado  =  ! 1 ,  esto . _isTransitioning  =  ! 1 ,  esto . _scrollBar  =  new  fi ,  esto . _addEventListeners ( )  } 
        estático  obtener  Predeterminado ( )  {  return  Li  } 
        estático  get  DefaultType ( )  {  return  Di  } 
        estático  get  NOMBRE ( )  {  return  "modal"  } 
        alternar ( t )  {  devolver  esto . _se muestra ? esto _ ocultar ( ) : esto . mostrar ( t )  } 
        mostrar ( t )  {  esto . _se muestra  ||  esto _ _esTransición  ||  pag _ disparador ( este . _elemento ,  Ci ,  {  objetivo : t  } ) . predeterminadoEvitado  ||  ( this . _isShown  =  ! 0 ,  this . _isTransitioning  =  ! 0 ,  this . _scrollBar . hide ( ) ,  document . body . classList . add ( Oi ) ,  this . _adjustDialog ( ) ,  this . _backdrop . show ( ( ( )  = >  este _ ._showElement ( t ) ) ) )  } 
        ocultar ( )  {  esto . _se muestra  &&  ! esto _ _isTransitioning  &&  ( P . trigger ( this . _element ,  "hide.bs.modal" ) . defaultPrevented  ||  ( this . _isShown  =  ! 1 ,  this . _isTransitioning  =  ! 0 ,  this . _focustrap . deactivate ( ) ,  this . _element . classList _ .remove ( xi ) ,  este . _queueCallback ( ( ( )  =  este . _hideModal ( ) ) ,  este . _element ,  este . _isAnimated ( ) ) ) }  > 
        disponer ( )  {  para  ( const  t  de [ ventana ,  este . _diálogo ] )  P . desactivado ( t ,  ".bs.modal" ) ; 
            esto _ _telón de fondo . disponer ( ) ,  esto . _focustrap . desactivar ( ) ,  súper . desechar ( )  } 
        handleUpdate ( )  {  esto . _ajustarDiálogo ( )  } 
        _initializeBackDrop ( )  {  devuelve  nueva  bi ( {  isVisible : Boolean ( this . _config . backdrop ) ,  isAnimated : this . _isAnimated ( )  } )  } 
        _initializeFocusTrap ( )  {  devuelve  nuevo  Ei ( {  trapElement : este . _element  } )  } 
        _showElement ( t )  {  documento . cuerpo _ contiene ( este . _elemento )  ||  documento _ cuerpo _ agregar ( este . _elemento ) ,  este . _elemento . estilo _ mostrar  =  "bloquear" ,  este . _elemento . removeAttribute ( "aria-hidden" ) ,  este . _elemento . setAttribute ( "aria-modal" ,  ! 0 ) ,  este . _elemento . setAttribute ( "función" ,  "diálogo" ) ,  este . _elemento . desplazamiento superior  =  0 ;  constante  e  =  Q . findOne ( ".modal-body" ,  this . _dialog ) ; 
            e  &&  ( e . scrollTop  =  0 ) ,  d ( este . _element ) ,  este . _elemento . listaclases . añadir ( xi ) ,  este . _queueCallback ( ( ( )  =>  {  this . _config . focus  &&  this . _focustrap . activar ( ) ,  this . _isTransitioning  =  ! 1 ,  P . trigger ( this . _element ,  "shown.bs.modal" ,  {  relatedTarget : t  } )  } ) ,  este _ ._dialog ,  este _ ._isAnimated ( ) )  } 
        _addEventListeners ( )  {  P . en ( este . _elemento ,  "keydown.dismiss.bs.modal" ,  ( t  =>  {  si  ( "Escape"  ===  t . tecla )  devolver  este . _config . teclado ? ( t . preventDefault ( ) ,  anule  esto . ocultar ( ) ) : anular  esto _ ._triggerBackdropTransition ( )  } ) ) ,  P . en ( ventana ,  "resize.bs.modal" ,  ( ( )  =>  {  this . _isShown  &&  ! this . _isTransitioning  &&  this . _adjustDialog ( )  } ) ) ,  P . en ( this . _element ,  "mousedown.dismiss.bs.modal" ,  ( t  =>  {  t . target  ===  t . currentTarget  &&  ( "static"  !==  this . _config . backdrop ? this . _config . backdrop  &&  este _ .ocultar ( ) : este _ ._triggerBackdropTransition ( ) )  } ) )  } 
        _hideModal ( )  {  esto . _elemento . estilo _ mostrar  =  "ninguno" ,  este . _elemento . setAttribute ( "aria-hidden ,!  " 0 ) ,  este . _elemento . removeAttribute ( "aria-modal" ) ,  this . _elemento . removeAttribute ( "rol" ) ,  esto . _isTransitioning  =  ! 1 ,  esto . _telón de fondo . hide ( ( ( )  =>  {  documento . cuerpo . classList . remove ( Oi ) ,  this . _resetAdjustments ( ) ,  this . _scrollBar . reset ( ) ,  P . trigger ( this . _element ,  Ti )  } ) )  } 
        _isAnimated ( )  {  devuelve  esto . _elemento . listaclases . contiene ( "desvanecerse" )  } 
        _triggerBackdropTransition ( )  {  if  ( P . trigger ( this . _element ,  "hidePrevented.bs.modal" ) . defaultPrevented )  return ;  constante  t  =  esto . _elemento . scrollHeight  >  documento . documentoElemento . altura del cliente , 
                e  =  esto . _elemento . estilo _ desbordamiento Y ;  "oculto"  ===  e  ||  esto _ _elemento . listaclases . contiene ( ki )  ||  ( t  ||  ( este . _elemento . estilo . desbordamientoY  =  "oculto" ) ,  este . _elemento . classList . add ( ki ) ,  este . _queueCallback ( ( ( )  =>  {  este . _elemento . classList . remove ( ki ) ,  este ._queueCallback _element ( ( ( )  =  {  este . style . , . overflowY  =  e  } ) ,  este . _dialog )  } ) ,  este . _dialog ) .  este . _element ( focus ) ) }  > 
        _adjustDialog ( )  {  const  t  =  esto . _elemento . scrollHeight  >  documento . documentoElemento . altura del cliente , 
                e  =  esto . _barra de desplazamiento . obtenerAncho ( ) , 
                yo  =  e  >  0 ;  si  ( i  &&  ! t )  {  const  t  =  p ( ) ? "relleno a la izquierda" : "relleno a la derecha" ; 
                esto _ _elemento . estilo [ t ]  =  ` ${ e } px`  }  if  ( ! i  &&  t )  {  const  t  =  p ( ) ? "rellenoDerecha" : "rellenoIzquierda" ; 
                esto _ _elemento . estilo [ t ]  =  ` ${ e } px`  }  } 
        _resetAdjustments ( )  {  este . _elemento . estilo _ paddingLeft  =  "" ,  esto . _elemento . estilo _ rellenoDerecho  =  ""  } 
        estático  jQueryInterface ( t ,  e )  {  devuelve  esto . each ( ( function ( )  {  const  i  =  Si . getOrCreateInstance ( this ,  t ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  i [ t ] )  throw  new  TypeError ( `Ningún método nombrado " ${ t } "` ) ; 
                    yo [ t ] ( e )  }  } ) )  }  } 
    pag _ en ( documento ,  "click.bs.modal.data-api" ,  '[data-bs-toggle="modal"]' ,  ( función ( t )  {  const  e  =  n ( esto ) ; 
        [ "A" ,  "ÁREA" ] . incluye ( this . tagName )  &&  t . prevenirPredeterminado ( ) ,  P . one ( e ,  Ci ,  ( t  =>  {  t . defaultPrevented  ||  P . one ( e ,  Ti ,  ( ( )  =>  {  a ( this )  &&  this . focus ( )  } ) )  } ) ) ;  constante  i  =  Q . .modal.show ( " ) ; 
        yo  &&  Si . getInstance ( i ) . esconder ( ) ,  Si . getOrCreateInstance ( e ) . alternar ( esto )  } ) ) ,  R ( Si ) ,  g ( Si ) ;  const  Ii  =  "mostrar" , 
        Ni  =  "mostrando" , 
        Pi  =  "esconderse" , 
        ji  =  ".offcanvas.mostrar" , 
        Mi  =  "hidePrevented.bs.offcanvas" , 
        Hola  =  "hidden.bs.offcanvas" , 
        $i  =  {  telón : ! 0 ,  teclado :! _ 0 ,  desplazamiento : ! 1  } , 
        Wi  =  {  fondo : "(booleano|cadena)" ,  teclado : "booleano" ,  desplazamiento : "booleano"  } ; 
    clase  Bi  extiende  z  {  constructor ( t ,  e )  {  super ( t ,  e ) ,  this . _isMostrado  =  ! 1 ,  esto . _telón de fondo  =  esto . _initializeBackDrop ( ) ,  este . _focustrap  =  esto . _initializeFocusTrap ( ) ,  este . _addEventListeners ( )  } 
        static  get  Predeterminado ( )  {  return  $i  } 
        estático  get  DefaultType ( )  {  return  Wi  } 
        estático  obtener  NOMBRE ( )  {  return  "offcanvas"  } 
        alternar ( t )  {  devolver  esto . _se muestra ? esto _ ocultar ( ) : esto . mostrar ( t )  } 
        mostrar ( t )  {  esto . _se muestra  ||  pag _ disparador ( this . _element ,  "show.bs.offcanvas" ,  {  relatedTarget : t  } ) . predeterminadoEvitado  ||  ( this . _isShown  =  ! 0 ,  this . _backdrop . show ( ) ,  this . _config . scroll  ||  ( new  fi ) . hide ( ) ,  this . _element . setAttribute ( "aria-modal" ,  ! 0 ) ,  this . _element .setAttribute _element ( "función" ,  "diálogo" ) ,  this . classList . add . _queueCallback ( Ni ) ,  this . ( ( ( ) =  >  {  this . _config . scroll  &&  ! this . _config . backdrop  ||  this . _focustrap .active ( . ) , this  . _element . classList ( add . Ii ) , this  . _element . classList ( remove , Ni ) , P  . trigger ( this . _element relatedTarget "  shown.bs.offcanvas ,  {  " : t  } )  } ) ,  este _ ._elemento ,  ! 0 ) )  } 
        ocultar ( )  {  esto . _isShown  &&  ( P . trigger ( this . _element ,  "hide.bs.offcanvas" ) . defaultPrevented  ||  ( this . _focustrap . deactivate ( ) ,  this . _element . blur ( ) ,  this . _isShown  =  ! 1 ,  this . _element . classList . add ( Pi ) ,  este . _backdrop . hide ( ) ,  este . _queueCallback ( ( ( )  =>  {  este . _element . classList . remove ( Ii ,  Pi ) ,  ​​este . _element . removeAttribute ( "aria-modal" ) ,  este . _element . removeAttribute ( "role ) ,  este . _config . scroll  ||  ( nuevo  fi ) .reset _elemento ( ) ,  P . trigger ( este . hola ,  _elemento )  } ) ,  este . ! ,  ) 0 ) " )  } 
        disponer ( )  {  esto . _telón de fondo . disponer ( ) ,  esto . _focustrap . desactivar ( ) ,  súper . desechar ( )  } 
        _initializeBackDrop ( )  {  const  t  =  Boolean ( this . _config . backdrop ) ;  return  new  bi ( {  className : "offcanvas-backdrop" ,  isVisible : t ,  isAnimated : ! 0 ,  rootElement : this . _element . parentNode ,  clickCallback : t ? ( )  =>  {  "static"  !==  this . _config . backdrop ? este.ocultar _ _ ( ) : P.gatillo _ este._elemento ( _ _ _ ,  Mi )  } : nulo  } )  } 
        _initializeFocusTrap ( )  {  devuelve  nuevo  Ei ( {  trapElement : este . _element  } )  } 
        _addEventListeners ( )  {  P . on ( this . _element ,  "keydown.dismiss.bs.offcanvas" ,  ( t  =>  {  "Escape"  ===  t . key  &&  ( this . _config . keyboard ? this . hide ( ) : P . trigger ( this . _element ,  Mi ) )  } ) )  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  Bi . getOrCreateInstance ( this ,  t ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  e [ t ]  ||  t . beginWith ( "_" )  ||  "constructor"  ===  t )  throw  new  TypeError ( `Ningún método llamado " ${ t } "` ) ; 
                    e [ t ] ( esto )  }  } ) )  }  } 
    pag _ on ( documento ,  "click.bs.offcanvas.data-api" ,  '[data-bs-toggle="offcanvas"]' ,  ( función ( t )  {  const  e  =  n ( esto ) ;  if  ( [ "A" ,  AREA ] _ .includes ( este _ .tagName )  &&  t.preventDefault , l ( ) (  este ) return ) ;  " " 
        pag _ uno ( e ,  Hola ,  ( ( )  =>  {  a ( este )  &&  este . foco ( )  } ) ) ) ;  constante  i  =  Q . encontrarUno ( ji ) ; 
        i  &&  i  !==  e  &&  Bi . getInstance ( i ) . ocultar ( ) ,  Bi . getOrCreateInstance ( e ) . alternar ( esto )  } ) ) ,  P . en ( ventana ,  "load.bs.offcanvas.data-api" ,  ( ( )  =>  {  for  ( const  t  of  Q . find ( ji ) )  Bi . getOrCreateInstance ( t ) . show ( )  } ) ) ,  P . on ( ventana ,  "resize.bs.offcanvas" ,  ( ( )  =>  {  for  ( const  t  of  Q . find ( "[aria-modal][class*=show][class*=offcanvas-]" ) )  " fijo"  ! ==  getComputedStyle ( t ) . posición  &&  Bi . getOrCreateInstance ( t ) . hide ( )  } ) ) ,  R ( Bi ) ,  g ( Bi ) ;  const  Fi  =  nuevo  Conjunto ( [ "fondo" ,  "citar" ,  "href" ,  elemento" ,  "longdesc" ,  "póster" ,  "src" ,  "xlink:href" ] ) , 
        zi  =  / ^ (?: (?: https? | mailto | ftp | tel | archivo | sms ) : | [ ^#&/:? ] * (?: [ #/? ] | $ ) ) / i , 
        Ri  =  / ^ datos: (?: imagen \/ (?: bmp | gif | jpeg | jpg | png | tiff | webp ) | video \/ (?: mpeg | mp4 | ogg | webm ) | audio \/ (? : mp3 | oga | ogg | opus ) ) ;base64, [ \d +/az ] + = * $ / i , 
        qi  =  ( t ,  mi )  =>  {  constante  yo  =  t . nodoNombre . a Minúsculas ( ) ;  volver  e . incluye ( yo ) ? ! Fi . tiene ( yo )  ||  Booleano ( zi . prueba ( t . nodeValue )  ||  Ri . prueba ( t . nodeValue ) ) : e . filtro ( ( t  =>  t  instancia  de RegExp ) ) . algunos ( ( t  =>  t . prueba ( i ) ) )  } , 
        Vi  =  {  "*" : [ "clase" ,  "dir" ,  "id" ,  "lang" ,  "rol" ,  / ^ aria- [ \w - ] * $ / i ] ,  a : [ "objetivo" ,  "href" ,  "título" ,  "rel" ] ,  área : [ ] ,  b : [ ] ,  br : [ ] ,  col : [ ] ,  código : [ ] ,  div : [ ] ,  em : [ ] ,  hr : [ ] ,  h1 : [ ] ,  h2 : [ ] ,  h3 : [ ] ,  h4 : [ ] ,  h5 : [ ] ,  h6 : [ ] ,  i : [ ] ,  img : [ "src" ,  "srcset" ,  " alt" ,  "título" ,  "ancho" ,  "alto" ] ,  li : [ ] ,  ol : [ ] ,  p : [ ] ,  pre : [ ] ,  s : [ ] ,  pequeño : [ ] ,  span : [ ] ,  sub : [ ] ,  sup : [ ] ,  fuerte : [ ] ,  u : [ ] ,  ul : [ ]  } , 
        Ki  =  {  allowList : Vi ,  content : { } ,  extraClass : "" ,  html : ! 1 ,  desinfectar :! _ 0 ,  sanitizeFn : nulo ,  plantilla : "<div></div>"  } , 
        Qi  =  {  allowList : "objeto" ,  contenido : "objeto" ,  extraClass : "(cadena|función)" ,  html : "booleano" ,  sanitize : "boolean" ,  sanitizeFn : "(nulo|función)" ,  plantilla : " cadena"  } , 
        Xi  =  {  entrada : "(cadena|elemento|función|nulo)" ,  selector : "(cadena|elemento)"  } ; 
    clase  Yi  extiende  F  {  constructor ( t )  {  super ( ) ,  this . _config  =  esto . _getConfig ( t )  } 
        estático  obtener  Predeterminado ( )  {  return  Ki  } 
        estático  get  DefaultType ( )  {  return  Qi  } 
        estático  get  NOMBRE ( )  {  return  "TemplateFactory"  } 
        getContent ( )  {  retorno  objeto . valores ( este . _config . contenido ) . mapa ( ( t  =>  esto . _resolvePossibleFunction ( t ) ) ) . filtro ( Booleano )  } 
        hasContent ( )  {  devuelve  esto . obtener contenido ( ) . longitud  >  0  } 
        changeContent ( t )  {  devuelve  esto . _checkContent ( t ) ,  esto . _config . contenido  =  { ... esto . _config . contenido , ... t  } ,  esto  } 
        toHtml ( )  {  const  t  =  documento . crear elemento ( "div" ) ; 
            t . HTML interno  =  esto . _maybeSanitize ( este _ ._config.plantilla _ _ ) ;  for  ( const  [ e ,  i ]  de  Object . .entradas ( this _ _config . content ) )  this . _setContent ( t ,  i ,  e ) ;  constante  e  =  t . niños [ 0 ] , 
                yo  =  esto . _resolvePossibleFunction ( this . _config . extraClass ) ;  volver  i  & &  e . listaclases . agregar ( ... i . dividir ( " " ) ) ,  e  } 
        _typeCheckConfig ( t )  {  súper . _typeCheckConfig ( t ) ,  este . _checkContent ( t . contenido )  } 
        _checkContent ( t )  {  para  ( const  [ e ,  i ]  del  objeto . entradas ( t ) )  super . _typeCheckConfig ( {  selector : e ,  entrada : i  } ,  Xi )  } 
        _setContent ( t ,  e ,  i )  {  const  n  =  Q . encontrarUno ( i ,  t ) ; 
            n  &&  ( ( e  =  esto . _resolvePossibleFunction ( e ) ) ? o ( e ) ? esto . _putElementInTemplate ( r ( e ) ,  n ) : esto . _config . html ? n . innerHTML  =  esto . _maybeSanitize ( e ) : n . textContent  =  e : n . eliminar ( ) )  } 
        _maybeSanitize ( t )  {  devuelve  esto . _config . desinfectar ? function ( t ,  e ,  i )  {  if  ( ! t . longitud )  return  t ;  if  ( i  &&  "función"  ==  return  i )  tipo  i ( t ) ;  const  n  =  ( nueva  ventana . DOMParser ) . parseFromString ( t ,  "texto/html" ) , 
                    s  =  [ ] . concat ( ... n . cuerpo . querySelectorAll ( "*" ) ) ;  para  ( const  t  de  s )  {  const  i  =  t . nodoNombre . a Minúsculas ( ) ;  if  ( ! Objeto . teclas ( e ) . incluye ( i ) )  {  t . eliminar ( ) ;  continuar  }  const  n  =  [ ] . concat ( ... t . atributos ) , 
                        s  =  [ ] . concat ( e [ "*" ]  ||  [ ] ,  e [ i ]  ||  [ ] ) ;  for  ( const  e  de  n )  qi ( e ,  s )  ||  t . removeAttribute ( p . nodeName )  }  return  n . cuerpo _ innerHTML  } ( t ,  este . _config . allowList ,  este . _config . sanitizeFn ) : t  } 
        _resolvePossibleFunction ( t )  {  return  "función"  ==  tipo de  t ? t ( esto ) : t  } 
        _putElementInTemplate ( t ,  e )  {  si  ( este . _config . html )  devuelve  e . HTML interno  =  "" ,  vacío  e . añadir ( t ) ; 
            mi . contenido de texto  =  t . textContent  }  }  const  Ui  =  nuevo  Conjunto ( [ "sanitize" ,  "allowList" ,  "sanitizeFn" ] ) , 
        Gi  =  "desvanecerse" , 
        Ji  =  "mostrar" , 
        Zi  =  ".modal" , 
        tn  =  "ocultar.bs.modal" , 
        es  =  "flotar" , 
        nn  =  "enfoque" , 
        sn  =  {  AUTO : "auto" ,  ARRIBA : "arriba" ,  DERECHA : p ( ) ? "izquierda" : "derecha" ,  ABAJO : "abajo" ,  IZQUIERDA : p ( ) ? "derecha" : "izquierda"  } , 
        en  =  {  permisos : Vi ,  animación : ! 0 ,  límite : "clippingParents ,  contenedor :! " 1 ,  customClass : "" ,  delay : 0 ,  fallbackPlacements : [ "top" ,  "right" ,  "bottom" ,  "left ] ,  html :! " 1 ,  desplazamiento : [ 0 ,  0 ] ,  ubicación : "superior ,  popperConfig : nulo ,  desinfectar :! " 0 ,  sanitizeFn : nulo ,  selector :! _ 1 ,  plantilla : '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div> ' ,  título : "" ,  activador : "enfoque de desplazamiento"  } , 
        rn  =  {  allowList : "objeto" ,  animación : "booleano" ,  límite : "(cadena|elemento)" ,  contenedor : "(cadena|elemento|booleano)" ,  customClass : "(cadena|función)" ,  retraso : " (número|objeto)" ,  fallbackPlacements : "arreglo" ,  html : "booleano" ,  desplazamiento : "(arreglo|cadena|función)" ,  ubicación : "(cadena|función)" ,  popperConfig : "(nulo|objeto|función )" ,  sanitize : "boolean" ,  sanitizeFn : "(null|function)" ,  selector : "(string|boolean)" ,  template : "string" ,  title : "(string|element|function)" ,  trigger : " cadena"  } ; 
    class  an  extends  z  {  constructor ( t ,  e )  {  if  ( void  0  ===  qe )  throw  new  TypeError ( "La información sobre herramientas de Bootstrap requiere Popper (https://popper.js.org)" ) ; 
            super ( t ,  e ) ,  este . _isEnabled  =  ! 0 ,  esto . _timeout  =  0 ,  esto . _está sobrevolado  =  ! 1 ,  esto . _activeTrigger  =  { } ,  esto . _popper  =  nulo ,  esto . _templateFactory  =  nulo ,  esto . _newContent  =  nulo ,  esto . punta  =  nulo ,  esto . _setOyentes ( )  } 
        static  get  Predeterminado ( )  {  return  on  } 
        estático  get  DefaultType ( )  {  return  rn  } 
        estático  obtener  NOMBRE ( )  {  devolver  "información sobre herramientas"  } 
        habilitar ( )  {  esto . _isEnabled  =  ! 0  } 
        deshabilitar ( )  {  esto . _isEnabled  =  ! 1  } 
        alternar habilitado ( )  {  este . _isEnabled  =  ! esto _ _está habilitado  } 
        alternar ( t )  {  if  ( this . _isEnabled )  {  if  ( t )  {  const  e  =  this . _initializeOnDelegatedTarget ( t ) ;  volver  e . _disparador activo . clic  =  ! mi . _disparador activo . hacer clic ,  anular ( p . _isWithActiveTrigger ( ) ? p . _enter ( ) : p . _leave ( ) )  } 
                esto _ _se muestra ( ) ? esto _ _dejar ( ) : esto . _ingresar ( )  }  } 
        disponer ( )  {  clearTimeout ( this . _timeout ) ,  P . off ( este . _elemento . más cercano ( Zi ) ,  tn ,  este . _hideModalHandler ) ,  este . propina  &&  esto . propina _ quitar ( ) ,  esto . _disposePopper ( ) ,  súper . desechar ( )  } 
        show ( )  {  if  ( "ninguno"  ===  this . _element . style . display )  throw  new  Error ( "Utilice show en elementos visibles" ) ;  if  ( ! this . _isWithContent ( )  ||  ! this . _isEnabled )  return ;  constante  t  =  PAGS . disparador ( este . _elemento ,  este . constructor . eventName ( "show" ) ) , 
                e  =  ( c ( este . _elemento )  ||  este . _elemento . propietarioDocumento . documentoElemento ) . contiene ( este . _elemento ) ;  if  ( t . defaultPrevented  ||  ! e )  return ; 
            esto _ tip  &&  ( este . tip . remove ( ) ,  this . tip  =  null ) ;  constante  i  =  esto . _getTipElement ( ) ; 
            esto _ _elemento . setAttribute ( "aria-descrito por" ,  es , getAttribute ( "id" ) ) ;  const  {  contenedor : n  }  =  esto . _config ;  if  ( this . _element . ownDocument . documentElement . contiene ( this . tip )  ||  ( n . append ( i ) ,  P . trigger ( this . _element ,  this . constructor . eventName ( "inserted" ) ) ) ,  this . _popper . esto . _popper . actualizar ( ) : este . _popper  =  este . _createPopper ( i ) ,  i . classList ( add ) Ji " ,  ontouchstart"  en  documento . documentElement ) 
                for  ( const  t  de [ ] . concat ( ... documento . cuerpo . niños ) )  P . en ( t ,  "mouseover" ,  h ) ; 
            esto _ _queueCallback ( ( ( )  =>  {  const  t  =  esto . _isHovered ; 
                esto _ _está sobrevolado  =  ! 1 ,  pag . disparador ( este . _elemento ,  este . constructor . eventName ( "mostrado" ) ) ,  t  &&  esto . _leave ( )  } ) ,  esto . consejo ,  esto . _es animado ( ) )  } 
        hide ( )  {  if  ( ! this . _isShown ( ) )  return ;  if  ( P . trigger ( this . _element ,  this . constructor . eventName ( "hide" ) ) . defaultPrevented )  return ;  constante  t  =  esto . _getTipElement ( ) ;  if  ( t . classList . remove ( Ji ) ,  "ontouchstart"  in  document . documentElement ) 
                for  ( const  t  de [ ] . concat ( ... documento . cuerpo . niños ) )  P . apagado ( t ,  "mouseover" ,  h ) ; 
            esto _ _disparador activo . clic  =  ! 1 ,  esto . _disparador activo . enfoque  =  ! 1 ,  esto . _disparador activo . flotar  =  ! 1 ,  esto . _está sobrevolado  =  ! 1 ,  esto . _queueCallback ( ( ( )  =>  {  this . _isWithActiveTrigger ( )  ||  ( this . _isHovered  ||  t . remove ( ) ,  this . _element . removeAttribute ( "aria-describedby" ) ,  P . trigger ( this . _element ,  this . constructor .eventName _disposePopper ( "oculto ) ) ,  este . ) ( ) )  } , ,  este . tip .  este _isAnimated ) ( ) }  " 
        actualizar ( )  {  este . _popper  &&  esto . _popper . actualizar ( )  } 
        _isWithContent ( )  {  devuelve  Boolean ( this . _getTitle ( ) )  } 
        _getTipElement ( )  {  devuelve  esto . propina  ||  ( this . tip  =  this . _createTipElement ( this . _newContent  ||  this . _getContentForTemplate ( ) ) ) ,  this . consejo  } 
        _createTipElement ( t )  {  const  e  =  esto . _getTemplateFactory ( t ) . aHtml ( ) ;  si  ( ! e )  devuelve  nulo ; 
            mi . listaclases . quitar ( Gi ,  Ji ) ,  e . listaclases . add ( `bs- ${ este . constructor . NOMBRE } -auto` ) ;  const  i  =  ( t  =>  {  do  {  t  +=  Math . floor ( 1e6  *  Math . random ( ) )  }  while  ( document . getElementById ( t ) ) ;  return  t  } ) ( this . constructor . NAME ) . a la cadena ( ) ;  volver  e . setAttribute ( "id" ,  i ) ,  este . _isAnimated ( )  &&  e . listaclases . añadir ( Gi ) ,  e  } 
        setContent ( t )  {  esto . _newContent  =  t ,  esto . _isShown ( )  &&  ( este . _disposePopper ( ) ,  este . mostrar ( ) )  } 
        _getTemplateFactory ( t )  {  devuelve  esto . _templateFactory ? esto _ _templateFactory . cambiarContenido ( t ) : esto . _templateFactory  =  new  Yi ( { ... this . _config ,  content : t ,  extraClass : this . _resolvePossibleFunction ( this . _config . customClass )  } ) ,  this . _templateFactory  } 
        _getContentForTemplate ( )  {  return  {  ".tooltip-inner" : esto . _getTitle ( )  }  } 
        _getTitle ( )  {  devuelve  esto . _resolvePossibleFunction ( este . _config . título )  ||  esto _ _config . original  } 
        _initializeOnDelegatedTarget ( t )  {  devuelve  esto . constructor _ getOrCreateInstance ( t . delegateTarget ,  this . _getDelegateConfig ( ) )  } 
        _isAnimated ( )  {  devuelve  esto . _config . animación  ||  esto _ propina  &&  esto . propina _ listaclases . contiene ( Gi )  } 
        _isShown ( )  {  devuelve  esto . propina  &&  esto . propina _ listaclases . contiene ( Ji )  } 
        _createPopper ( t )  {  const  e  =  "función"  ==  tipo de  esto . _config . colocación ? esto _ _config . colocación _ call ( esto ,  t ,  esto . _elemento ) : esto . _config . colocación , 
                yo  =  sn [ mi . a Mayúsculas ( ) ] ;  devuelve  Re ( esto . _elemento ,  t ,  esto . _getPopperConfig ( i ) )  } 
        _getOffset ( )  {  const  {  desplazamiento : t  }  =  esto . _config ;  devuelve  "cadena"  ==  tipo  t ? t . dividir ( "," ) . mapa ( ( t  =>  Número . parseInt ( t ,  10 ) ) ) : "función"  ==  tipo de  t ? e  =>  t ( e ,  este . _elemento ) : t  } 
        _resolvePossibleFunction ( t )  {  return  "función"  ==  tipo de  t ? t . llamar ( este . _elemento ) : t  } 
        _getPopperConfig ( t )  {  const  e  =  {  ubicación : t ,  modificadores : [ {  nombre : "flip" ,  opciones : {  fallbackPlacements : this . _config . fallbackPlacements  }  } ,  {  nombre : "desplazamiento" ,  opciones : {  desplazamiento : este . _getOffset ( )  }  } ,  {  nombre : "preventOverflow" ,  opciones : {  límite : este . _config . límite  }  } ,  {  nombre : "flecha" ,  opciones : {  elemento : `. ${ esto . constructor _ NOMBRE } -arrow`  }  } ,  {  nombre : "preSetPlacement" ,  habilitado : ! 0 ,  fase : "beforeMain" ,  fn : t  =>  {  this . _getTipElement ( ) . setAttribute ( -popper-placement ,  t . state.placement ] " )  }  } ;  } data  return  { ... e , ... "función"  ==  tipo de  esto . _config . popperConfig ? esto _ _config . popperConfig ( e ) : este . _config . popperConfig  }  } 
        _setListeners ( )  {  const  t  =  esto . _config . desencadenar _ dividir ( " " ) ;  para  ( const  e  de  t ) 
                si  ( "clic"  ===  e )  P . on ( this . _element ,  this . constructor . eventName ( "click" ) ,  this . _config . selector ,  ( t  =>  this . toggle ( t ) ) ) ; 
                else  if  ( "manual"  !==  e )  {  const  t  =  e  ===  en ? esto _ constructor _ eventName ( "mouseenter" ) : este . constructor _ eventName ( "enfocar" ) , 
                    i  =  e  ===  en ? esto _ constructor _ eventName ( "mouseleave" ) : este . constructor _ eventName ( "foco" ) ; 
                pag _ on ( this . _element ,  t ,  this . _config . selector ,  ( t  =>  {  const  e  =  this . _initializeOnDelegatedTarget ( t ) ; 
                    mi . _activeTrigger [ "focusin"  ===  t . tipo ? nn : es ]  =  ! 0 ,  e . _enter ( )  } ) ) ,  P . on ( this . _element ,  i ,  this . _config . selector ,  ( t  =>  {  const  e  =  this . _initializeOnDelegatedTarget ( t ) ; 
                    mi . _activeTrigger [ "focusout"  ===  t . tipo ? nn : es ]  =  mi . _elemento . contiene ( t . relatedTarget ) ,  e . _salir ( )  } ) )  } 
            esto _ _hideModalHandler  =  ( )  =>  {  esto . _elemento  &&  esto . ocultar ( )  } ,  P . en ( este . _elemento . más cercano ( Zi ) ,  tn ,  este . _hideModalHandler ) ,  este . _config . seleccionador ? esto _ _config  =  { ... esto . _config ,  disparador : "manual" ,  selector : ""  } : esto . _fixTitle ( )  } 
        _fixTitle ( )  {  const  t  =  esto . _config . título original ; 
            t  &&  ( this . _element . getAttribute ( "aria-label" )  ||  this . _element . textContent . trim ( )  ||  this . _element . setAttribute ( "aria-label" ,  t ) ,  this . _element . removeAttribute ( " título" ) )  } 
        _enter ( )  {  esto . _se muestra ( )  ||  esto _ _¿está suspendido ? esto _ _está sobrevolado  =  ! 0 : ( this . _isHovered  =  ! 0 ,  this . _setTimeout ( ( ( )  =>  {  this . _isHovered  &&  this . show ( )  } ) ,  this . _config . delay . show ) )  } 
        _dejar ( )  {  esto . _isWithActiveTrigger ( )  ||  ( this . _isHovered  =  ! 1 ,  this . _setTimeout ( ( ( )  =>  {  this . _isHovered  ||  this . hide ( )  } ) ,  this . _config . delay . hide ) )  } 
        _setTimeout ( t ,  e )  {  clearTimeout ( este . _tiempo ) ,  este . _tiempo  =  espera ( t ,  e )  } 
        _isWithActiveTrigger ( )  {  retorno  objeto . valores ( this . _activeTrigger ) . incluye ( ! 0 )  } 
        _getConfig ( t )  {  const  e  =  B . getDataAttributes ( este _ ._elemento ) ;  for  ( const  t  de  Object . keys ( e ) )  Ui . tiene ( t )  &&  borrar  e [ t ] ;  return  t  =  { ... e , ... "objeto"  ==  &&  t  tipo  t ? t : { }  } ,  t  =  esto . _mergeConfigObj ( t ) ,  t  =  esto . _configAfterMerge ( t ) ,  este . _typeCheckConfig ( t ) ,  t  } 
        _configAfterMerge ( t )  {  devuelve  t . contenedor  =  ! 1  ===  t . contenedor ? documento _ cuerpo : r ( t . contenedor ) ,  "número"  ==  tipo de  t . retraso  &&  ( t . retraso  =  {  mostrar : t . retraso ,  ocultar : t . retraso  } ) ,  t . original  =  esto . _elemento . getAttribute ( "título" )  ||  "" ,  "número"  ==  tipo de  t . título  &&  ( t . título  =  t . título . toString ( ) ) ,  "número"  ==  tipo de  t . contenido  &&  ( t . contenido  =  t . contenido . toString ( ) ) ,  t  } 
        _getDelegateConfig ( )  {  const  t  =  { } ;  for  ( const  e  en  this . _config )  this . constructor _ Predeterminado [ e ]  !==  esto . _config [ e ]  &&  ( t [ e ]  =  esto . _config [ e ] ) ;  volver  t  } 
        _disposePopper ( )  {  este . _popper  &&  ( this . _popper . destroy ( ) ,  this . _popper  =  null )  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  an . getOrCreateInstance ( this ,  t ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  e [ t ] )  throw  new  TypeError ( `Ningún método nombrado " ${ t } "` ) ; 
                    mi [ t ] ( )  }  } ) )  }  } 
    g ( un ) ;  const  ln  =  { ... un . Predeterminado ,  contenido : "" ,  desplazamiento : [ 0 ,  8 ] ,  ubicación : "derecha" ,  plantilla : '<div class="popover" role="tooltip"><div class="popover-arrow"></div ><h3 class="popover-header"></h3><div class="popover-body"></div></div>' ,  disparador : "clic"  } , 
        cn  =  { ... un . DefaultType ,  contenido : "(nulo|cadena|elemento|función)"  } ; 
    la clase  hn  extiende  un  {  static  get  Default ( )  {  return  ln  } 
        estático  get  DefaultType ( )  {  return  cn  } 
        estático  get  NOMBRE ( )  {  return  "popover"  } 
        _isWithContent ( )  {  devuelve  esto . _getTitle ( )  ||  esto _ _getContent ( )  } 
        _getContentForTemplate ( )  {  return  {  ".popover-header" : este . _getTitle ( ) ,  ".popover-body" : este . _getContent ( )  }  } 
        _getContent ( )  {  devuelve  esto . _resolvePossibleFunction ( este . _config . contenido )  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  hn . getOrCreateInstance ( this ,  t ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  e [ t ] )  throw  new  TypeError ( `Ningún método nombrado " ${ t } "` ) ; 
                    mi [ t ] ( )  }  } ) )  }  } 
    g ( hn ) ;  const  dn  =  "click.bs.scrollspy" , 
        un  =  "activo" , 
        fn  =  "[href]" , 
        pn  =  {  offset : null ,  rootMargin : "0px 0px -25%" ,  smoothScroll : ! 1 ,  destino : nulo  } , 
        gn  =  {  offset : "(número|null)" ,  rootMargin : "string" ,  smoothScroll : "boolean" ,  target : "element"  } ; 
    clase  mn  extiende  z  {  constructor ( t ,  e )  {  super ( t ,  e ) ,  this . _targetLinks  =  nuevo  Mapa ,  este . _observableSections  =  nuevo  Mapa ,  este . _rootElement  =  "visible"  ===  getComputedStyle ( este . _elemento ) . desbordamiento ? nulo : esto . _elemento ,  esto . _activeTarget  =  nulo ,  esto . _observador  =  nulo ,  esto . _previousScrollData  =  {  visibleEntryTop : 0 ,  parentScrollTop : 0  } ,  esto . actualizar ( )  } 
        static  get  Predeterminado ( )  {  return  pn  } 
        estático  get  DefaultType ( )  {  return  gn  } 
        estático  get  NOMBRE ( )  {  return  "scrollspy"  } 
        actualizar ( )  {  este . _initializeTargetsAndObservables ( ) ,  este . _maybeEnableSmoothScroll ( ) ,  este . _observador ? esto _ _observador . desconectar ( ) : esto . _observador  =  esto . _obtenerNuevoObservador ( ) ;  for  ( const  t  de  esto . _observableSections . valores ( ) )  esto . _observador . observar ( t )  } 
        disponer ( )  {  esto . _observador . desconectar ( ) ,  súper . desechar ( )  } 
        _configAfterMerge ( t )  {  devuelve  t . objetivo  =  r ( t . objetivo )  ||  documento _ cuerpo ,  t  } 
        _maybeEnableSmoothScroll ( )  {  este . _config . smoothScroll  &&  ( P . off ( this . _config . target ,  dn ) ,  P . on ( this . _config . target ,  dn ,  fn ,  ( t  =>  {  const  e  =  this . _observableSections . get ( t . target . hash ) ;  if  ( e )  {  t _ .prevenirDefault ( ) ;  const  i  =  this _ ._rootElement  ||  ventana , 
                        n  =  mi . offsetTop  -  esto . _elemento . desplazamientoSuperior ;  if  ( i . scrollTo )  devuelve  void  i . scrollTo ( {  arriba : n ,  comportamiento : "suave"  } ) ; 
                    yo _ scrollTop  =  n  }  } ) ) )  } 
        _getNewObserver ( )  {  const  t  =  {  raíz : esto . _rootElement ,  umbral : [ .1 ,  .5 ,  1 ] ,  rootMargin : este . _getRootMargin ( )  } ;  devolver  nuevo  IntersectionObserver ( ( t  =>  this . _observerCallback ( t ) ) ,  t )  } 
        _observerCallback ( t )  {  const  e  =  t  =>  esto . _enlaces de destino . obtener ( `# ${ t . target . id } ` ) , 
                yo  =  t  =>  {  esto . _previousScrollData . visibleEntryTop  =  t . objetivo _ offsetTop ,  esto . _proceso ( e ( t ) )  } , 
                n  =  ( this . _rootElement  ||  documento . documentElement ) . desplazamiento superior , 
                s  =  norte  >=  esto . _anteriorDesplazamiento de datos . desplazamientosuperior padre ; 
            esto _ _anteriorDesplazamiento de datos . padreScrollTop  =  n ;  for  ( const  o  de  t )  {  if  ( ! o . isIntersecting )  {  this . _activeTarget  =  nulo ,  esto . _clearActiveClass ( e ( o ) ) ;  continuar  }  const  t  =  o . objetivo _ desplazamientoSuperior  >=  esto . _anteriorDesplazamiento de datos . visibleEntryTop ;  if  ( s  &&  t )  {  if  ( i ( o ) ,  ! n )  return  }  else  s  ||  t  ||  yo ( o )  }  } 
        _getRootMargin ( )  {  devuelve  esto . _config . compensar ? ` ${ esto . _config . desplazamiento } px 0px -30%` : esto . _config . margen raíz  } 
        _initializeTargetsAndObservables ( )  {  este . _targetLinks  =  nuevo  Mapa ,  este . _observableSections  =  nuevo  Mapa ;  constante  t  =  Q . encontrar ( fn ,  este . ._config _ objetivo ) ;  for  ( const  e  of  t )  {  if  ( ! e . hash  ||  l ( e ) )  continuar ;  constante  t  =  Q . findOne ( ejemplo , hash ,  este ._elemento ) ; por 
                a ( t )  &&  ( this . _targetLinks . set ( e . hash ,  e ) ,  this . _observableSections . set ( e . hash ,  t ) )  }  } 
        _proceso ( t )  {  esto . _activeTarget  !==  t  &&  ( this . _clearActiveClass ( this . _config . target ) ,  this . _activeTarget  =  t ,  t . classList . add ( un ) ,  this . _activateParents ( t ) ,  P . trigger ( this . _element ,  "activate .bs.scrollspy" ,  {  objetivo : t  } ) )  } 
        _activateParents ( t )  {  if  ( t . classList . contains ( "dropdown-item ) )  Q. " findOne ( ".dropdown-toggle" ,  t . más cercano ( ".dropdown" ) ) . listaclases . añadir ( un ) ; 
            más 
                for  ( const  e  de  Q . padres ( t ,  ".nav, .list-group" ) ) 
                    for  ( const  t  of  Q . prev ( e ,  ".nav-link, .nav-item > .nav-link, .list-group-item" ) )  t . listaclases . añadir ( un )  } 
        _clearActiveClass ( t )  {  t . listaclases . quitar ( un ) ;  constante  e  =  Q . encontrar ( "[href].activo" ,  t ) ;  para  ( const  t  de  e )  t . listaclases . eliminar ( des )  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  mn . getOrCreateInstance ( this ,  t ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  e [ t ]  ||  t . beginWith ( "_" )  ||  "constructor"  ===  t )  throw  new  TypeError ( `Ningún método llamado " ${ t } "` ) ; 
                    mi [ t ] ( )  }  } ) )  }  } 
    pag _ on ( ventana ,  "load.bs.scrollspy.data-api" ,  ( ( )  =>  {  for  ( const  t  of  Q . find ( '[data-bs-spy="scroll"]' ) )  mn . getOrCreateInstance ( t )  } ) ) ,  g ( min ) ;  const  _n  =  "Flecha Izquierda" , 
        bn  =  "FlechaDerecha" , 
        vn  =  "Flecha arriba" , 
        en  =  "flecha abajo" , 
        wn  =  "activo" , 
        An  =  "desvanecerse" , 
        Es  =  "mostrar" , 
        Tn  =  '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]' , 
        Cn  =  `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${ Tn } ` ; 
    class  On  extiende  z  {  constructor ( t )  {  super ( t ) ,  this . _padre  =  esto . _elemento . más cercano ( '.list-group, .nav, [role="tablist"]' ) ,  this . _parent  &&  ( this . _setInitialAttributes ( this . _parent ,  this . _getChildren ( ) ) ) ,  P . on ( this . _element ,  "keydown.bs.tab" ,  ( t  =>  this . _keydown ( t ) ) ) )  } 
        estático  get  NOMBRE ( )  {  return  "tab"  } 
        mostrar ( )  {  const  t  =  esto . _elemento ;  if  ( this . _elemIsActive ( t ) )  return ;  constante  e  =  esto . _getActiveElem ( ) , 
                yo  =  mi ? pag _ disparador ( e ,  "hide.bs.tab" ,  {  relatedTarget : t  } ) : null ; 
            pag _ disparador ( t ,  "show.bs.tab" ,  {  objetivo : e  } ) . predeterminadoEvitado  ||  yo  yo  _ y predeterminadoEvitado  ||  ( esto . _desactivar ( e ,  t ) ,  esto . _activar ( t ,  e ) )  } 
        _activate ( t ,  e )  {  t  &&  ( t . classList . add ( wn ) ,  this . _activate ( n ( t ) ) ,  this . _queueCallback ( ( ( )  =>  {  "tab"  ===  t . getAttribute ( " role" ) ? ( t . focus ( ) ,  t . removeAttribute ( "tabindex" ) ,  t . setAttribute ( "aria-selected" ,  ! 0 ) ,  this . _toggleDropDown ( t ,  ! 0 ) ,  P . trigger ( t ,  "shown.bs.tab" ,  {  relatedTarget : e  } ) ) : t . classList . add ( En )  } ) ,  t ,  t . classList . contiene ( An ) ) )  } 
        _deactivate ( t ,  e )  {  t  &&  ( t . classList . remove ( wn ) ,  t . blur ( ) ,  this . _deactivate ( n ( t ) ) ,  this . _queueCallback ( ( ( )  =>  {  "tab"  == =  t . getAttribute ( "role" ) ? ( t . setAttribute ( "aria-selected" ,  ! 1 ) ,  t . setAttribute ( "tabindex" ,  "-1" ) ,  this . _toggleDropDown ( t ,  ! 1 ) ,  P .trigger hidden.bs.tab ( t ,  " ,  {  relatedTarget : e  } )) ) : t . classList . remove ( En )  } ) ,  t ,  t . classList . contains ( An ) ) )  } 
        _keydown ( t )  {  if  ( ! [ _ ,  bn ,  vn ,  yn ] _ .incluye ( t.tecla _ ) ) ;  return n 
            t . detener la propagación ( ) ,  t . prevenirPredeterminado ( ) ;  constante  e  =  [ bn ,  yn ] . incluye ( t . clave ) , 
                i  =  b ( this . _getChildren ( ) . filter ( ( t  =>  ! l ( t ) ) ) ,  t . target ,  e ,  ! 0 ) ; 
            i  &&  Activado . getOrCreateInstance ( i ) . mostrar ( )  } 
        _getChildren ( )  {  devuelve  Q . encontrar ( Cn ,  este . _parent )  } 
        _getActiveElem ( )  {  devuelve  esto . _getChildren ( ) . encontrar ( ( t  =>  esto . _elemIsActive ( t ) ) )  ||  nulo  } 
        _setInitialAttributes ( t ,  e )  {  este . _setAttributeIfNotExists ( t ,  "rol" ,  "lista de tabuladores" ) ;  para  ( const  t  de  e )  esto . _setInitialAttributesOnChild ( t )  } 
        _setInitialAttributesOnChild ( t )  {  t  =  esto . _getInnerElement ( t ) ;  constante  e  =  esto . _elemIsActive ( t ) , 
                yo  =  esto . _getOuterElement ( t ) ; 
            t . setAttribute ( "aria-selected" ,  e ) ,  i  !==  t  &&  this . _setAttributeIfNotExists ( i ,  "rol" ,  "presentación" ) ,  e  ||  t . setAttribute ( "tabindex" ,  "-1" ) ,  este . _setAttributeIfNotExists ( t ,  "role" ,  "tab" ) ,  este . _setInitialAttributesOnTargetPanel ( t )  } 
        _setInitialAttributesOnTargetPanel ( t )  {  const  e  =  n ( t ) ; 
            e  &&  ( this . _setAttributeIfNotExists ( e ,  "role" ,  "tabpanel" ) ,  t . id  &&  this . _setAttributeIfNotExists ( e ,  "aria-labelledby" ,  `# ${ t . id } ` ) )  } 
        _toggleDropDown ( t ,  e )  {  const  i  =  esto . _getOuterElement ( t ) ;  if  ( ! i . classList . contains ( "dropdown" ) )  return ;  constante norte  ,  (  t ) norte  s =  >  {  constante  =  =  Q . encontrarUno ( t ,  i ) ; 
                s  &  s . listaclases . alternar ( n ,  e )  } ; 
            n ( ".dropdown-toggle" ,  wn ) ,  n ( ".dropdown-menu" ,  En ) ,  n ( ".dropdown-item" ,  wn ) ,  i . setAttribute ( "aria-expandida" ,  e )  } 
        _setAttributeIfNotExists ( t ,  e ,  i )  {  t . tieneAtributo ( e )  ||  t . establecer atributo ( e ,  i )  } 
        _elemIsActive ( t )  {  devuelve  t . listaclases . contiene ( wn )  } 
        _getInnerElement ( t )  {  devuelve  t . coincidencias ( Cn ) ? t : P. _ encontrarUno ( Cn ,  t )  } 
        _getOuterElement ( t )  {  devuelve  t . más cercano ( ".nav-item, .list-group-item" )  ||  t  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  On . getOrCreateInstance ( this ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  e [ t ]  ||  t . empieza con ( "_" )  | |  "constructor"  ===  t )  throw  new  TypeError ( `Ningún método llamado " ${ t } "` ) ; 
                    mi [ t ] ( )  }  } ) )  }  } 
    pag _ en ( documento ,  "click.bs.tab" ,  Tn ,  ( función ( t )  { 
        [ "A" ,  "ÁREA" ] . incluye ( this . tagName )  &&  t . preventDefault ( ) ,  l ( esto )  ||  en . getOrCreateInstance ( esto ) . mostrar ( )  } ) ) ,  P . on ( ventana ,  "load.bs.tab" ,  ( ( )  =>  {  for  ( const  t  of  Q . find ( '.active[data-bs-toggle="tab"], .active[data-bs-toggle .active[data-bs-toggle="list"]' ) )  On .getOrCreateInstance t ( , )  } ) ) (  g ) On ; ,  const  xn  =  "ocultar" , 
        kn  =  "mostrar" , 
        Ln  =  "mostrando" , 
        Dn  =  {  animación : "booleano" ,  autohide : "booleano" ,  retraso : "número"  } , 
        Sn  =  {  animación : ! 0 ,  ocultar automáticamente : ! 0 ,  retraso : 5e3  } ; 
    clase  In  extiende  z  {  constructor ( t ,  e )  {  super ( t ,  e ) ,  this . _timeout  =  nulo ,  esto . _hasMouseInteraction  =  ! 1 ,  esto . _hasKeyboardInteraction  =  ! 1 ,  esto . _setOyentes ( )  } 
        static  get  Predeterminado ( )  {  return  Sn  } 
        estático  get  DefaultType ( )  {  return  Dn  } 
        estático  get  NOMBRE ( )  {  return  "brindis"  } 
        mostrar ( )  {  P . disparador ( this . _element ,  "show.bs.toast" ) . predeterminadoEvitado  ||  ( this . _clearTimeout ( ) ,  this . _config . animation  &&  this . _element . classList . add ( "fade" ) ,  this . _element . classList . remove ( xn ) ,  d ( this . _element ) ,  this . _element . classList . add ( kn ,  Ln ) ,  this . _queueCallback ( ( ( )  =>  {  this . _element . classList . remove ( Ln ) ,  P . trigger ( this . _element ,  "shown.bs.toast" ) ,  this . _maybeScheduleHide ( )  } ) ,  este _ ._elemento ,  esta _ ._config _ .animación ) )  } 
        ocultar ( )  {  esto . isShown ( )  &&  ( P . trigger ( this . _element ,  "hide.bs.toast" ) . defaultPrevented  ||  ( this . _element . classList . add ( Ln ) ,  this . _queueCallback ( ( ( )  =>  {  this . _element _ .classList.add _ _ ( xn ) ,  este._elemento.classList.remove _ _ _ _ _ _ ( Ln ,  kn ) ,  P.disparador _ este._elemento ( _ , _ _  " )  } ) ,  este._elemento , este._config.animación _  _ _ _ hidden.bs.toast ) " ) )  } 
        disponer ( )  {  esto . _clearTimeout ( ) ,  este . se muestra ( )  &&  esto . _elemento . listaclases . quitar ( kn ) ,  súper . desechar ( )  } 
        isShown ( )  {  devuelve  esto . _elemento . listaclases . contiene ( kn )  } 
        _maybeScheduleHide ( )  {  este . _config . autohide  &&  ( this . _hasMouseInteraction  ||  this . _hasKeyboardInteraction  ||  ( this . _timeout  =  setTimeout ( ( ( )  =>  {  this . hide ( )  } ) ,  this . _config . delay ) ) )  } 
        _onInteraction ( t ,  e )  {  interruptor  ( t . tipo )  { 
                caso  "mouseover" : 
                caso  "mouseout" : 
                    esto _ _hasMouseInteraction  =  e ;  romper ; 
                caso  "enfocar" : 
                caso  "enfoque" : 
                    esto _ _hasKeyboardInteraction  =  e  }  si  ( e )  devuelve  void  this . _clearTimeout ( ) ;  const  i  =  t . objetivo relacionado ; 
            esto _ _elemento  ===  yo  ||  esto _ _elemento . contiene ( yo )  ||  esto _ _maybeHorarioOcultar ( )  } 
        _setOyentes ( )  {  P . en ( este . _elemento ,  "mouseover.bs.toast" ,  ( t  =>  este . _onInteraction ( t ,  ! 0 ) ) ) ,  P . en ( este . _element ,  "mouseout.bs.toast" ,  ( t  =>  esto . _onInteraction ( t ,  ! 1 ) ) ) ,  P . en ( este . _elemento ,  "focusin.bs.toast" ,  ( t  =>  este . _onInteraction ( t ,  ! 0 ) ) ) ,  P . en ( este . _elemento ,  "focusout.bs.toast" ,  ( t  =>  esto . _onInteraction ( t ,  ! 1 ) ) )  } 
        _clearTimeout ( )  {  clearTimeout ( este . _timeout ) ,  este . _tiempo de espera  =  nulo  } 
        estático  jQueryInterface ( t )  {  devuelve  esto . each ( ( function ( )  {  const  e  =  In . getOrCreateInstance ( this ,  t ) ;  if  ( "string"  ==  typeof  t )  {  if  ( void  0  ===  e [ t ] )  throw  new  TypeError ( `Ningún método nombrado " ${ t } "` ) ; 
                    e [ t ] ( this )  }  } ) )  }  }  return  R ( In ) ,  g ( In ) ,  {  Alert : q ,  Button : K ,  Carousel : at ,  Collapse : pt ,  Dropdown : li ,  Modal : Si ,  Offcanvas : Bi ,  Popover : hn ,  ScrollSpy : mn ,  Tab : On ,  Toast : In ,  Tooltip : an  }  } ) ) ; 
//# sourceMappingURL=bootstrap.bundle.min.js.map 