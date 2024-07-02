INSERT INTO `beach`.`usuario` (`nombre`, `apellido`, `correo`, `contraseña`, `telefono`, `callenumero`, `colonia`, `estado`, `CP`) VALUES ('Aarón', 'Rosas', 'aaronrosas0409@gmail.com', 'Colorin1', '5534655767', 'Calle Broca', 'Gaulle', 'CDMX', '46501');
INSERT INTO `beach`.`usuario` (`nombre`, `apellido`, `correo`, `contraseña`, `telefono`, `callenumero`, `colonia`, `estado`, `CP`) VALUES ('DayaanM', 'Sierra', 'dayaan.sierrajob@gmail.com', 'Unacontraseña123', '3323438230', 'Calle #123', 'Bonita', 'Jalisco', '99999');
INSERT INTO `beach`.`usuario` (`nombre`, `apellido`, `correo`, `contraseña`, `telefono`, `callenumero`, `colonia`, `estado`, `CP`) VALUES ('Sofia', 'Suarez', 'luisasofia.cdhcm@gmail.com', 'Sofia12345', '5512345678', 'Cine #22', 'Polis', 'CDMX', '90909');
INSERT INTO `beach`.`usuario` (`nombre`, `apellido`, `correo`, `contraseña`, `telefono`, `callenumero`, `colonia`, `estado`, `CP`) VALUES ('Arely', 'Aparicio', 'arely.aparicio@gmail.com', 'Hola1234', '5512398745', 'Calle Poniente', 'Verde', 'CDMX', '55600');
INSERT INTO `beach`.`usuario` (`nombre`, `apellido`, `correo`, `contraseña`, `telefono`, `callenumero`, `colonia`, `estado`, `CP`) VALUES ('Asael', 'Rivera', 'riveracontrerasasael@gmail.com', 'Pa$$w0rd', '7131025427', 'Calle# 13', 'Lomas', 'CDMX', '55700');

INSERT INTO `beach`.`productos` (`nombre`, `descripcion`, `colores`, `tallas`, `img`, `precio`) VALUES ('Top Mykonos', 'Top estilo bikini ajuble con tiras en la espalda y cuello', 'S,M,L', 'dorado, negro', 'URLIMG', '750');
INSERT INTO `beach`.`productos` (`nombre`, `descripcion`, `colores`, `tallas`, `img`, `precio`) VALUES ('Top Bora Bora', 'Top de diseño ajustable por el frente', 'dorado, negro, blanco, beige, fucsia', 'S,M,L', 'URLIMG', '650');
INSERT INTO `beach`.`productos` (`nombre`, `descripcion`, `colores`, `tallas`, `img`, `precio`) VALUES ('Top Bahamas', 'Top con escote u en la espalda', 'Negro, Beige, Cafe, Verde Militar', 'S, M, L', 'URLIMG', '950');
INSERT INTO `beach`.`productos` (`nombre`, `descripcion`, `colores`, `tallas`, `img`, `precio`) VALUES ('Falda Saint Tropez', 'Falda estilo sirena mini', 'Negro, Dorado', 'S, M , L ', 'URLIMG', '1450');
INSERT INTO `beach`.`productos` (`nombre`, `descripcion`, `colores`, `tallas`, `img`, `precio`) VALUES ('Conjunto Mikonos', 'El conjunto incluye 4 piezas: crooped, top bikini, pareo, bottoms', 'dorado, negro', 'S M L ', 'URLIMG', '3200');

INSERT INTO `beach`.`pedido` (`fecha`, `status`, `total`, `metodopago`, `Usuario_id`) VALUES ('27/06/2024', 'Pendiente', '1000', 'Oxxo', '1');
INSERT INTO `beach`.`pedido` (`fecha`, `status`, `total`, `metodopago`, `Usuario_id`) VALUES ('27/06/2024', 'Pendiente', '1500', 'Oxxo', '2');
INSERT INTO `beach`.`pedido` (`fecha`, `status`, `total`, `metodopago`, `Usuario_id`) VALUES ('27/06/2024', 'Pendiente', '2400', 'TDC', '3');
INSERT INTO `beach`.`pedido` (`fecha`, `status`, `total`, `metodopago`, `Usuario_id`) VALUES ('27/06/2024', 'Pendiente', '800', 'TDC', '4');
INSERT INTO `beach`.`pedido` (`fecha`, `status`, `total`, `metodopago`, `Usuario_id`) VALUES ('27/06/2024', 'Pendiente', '950', 'TDD', '5');

INSERT INTO `beach`.`detallespedido` (`talla`, `color`, `cantidad`, `Pedido_id`, `Productos_id`) VALUES ('S', 'Dorado', '1', '1', '1');
INSERT INTO `beach`.`detallespedido` (`talla`, `color`, `cantidad`, `Pedido_id`, `Productos_id`) VALUES ('M', 'Azul', '2', '2', '2');
INSERT INTO `beach`.`detallespedido` (`talla`, `color`, `cantidad`, `Pedido_id`, `Productos_id`) VALUES ('M', 'Rosa', '1', '3', '3');
INSERT INTO `beach`.`detallespedido` (`talla`, `color`, `cantidad`, `Pedido_id`, `Productos_id`) VALUES ('L', 'Verde', '2', '4', '4');
INSERT INTO `beach`.`detallespedido` (`talla`, `color`, `cantidad`, `Pedido_id`, `Productos_id`) VALUES ('u', 'Rojo', '1', '5', '5');
