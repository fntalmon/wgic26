-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 15-06-2026 a las 09:41:08
-- Versión del servidor: 10.3.39-MariaDB-log
-- Versión de PHP: 8.1.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `premiumf_melej48`
--

DELIMITER $$
--
-- Procedimientos
--
$$

$$

$$

--
-- Funciones
--
$$

$$

$$

$$

$$

$$

$$

$$

$$

$$

$$

$$

$$

$$

$$

$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `A/B`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `A/B` (
`id` int(11)
,`id_cuenta` int(11)
,`pais` varchar(50)
,`idioma` varchar(20)
,`AB` varchar(50)
,`A/B` varchar(50)
,`Fecha` timestamp
,`Xyz` int(11)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `AB`
--

CREATE TABLE `AB` (
  `id` int(11) NOT NULL,
  `id_cuenta` int(11) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `idioma` varchar(20) NOT NULL,
  `AB` varchar(50) DEFAULT NULL,
  `Fecha` timestamp NULL DEFAULT current_timestamp(),
  `Xyz` int(11) NOT NULL,
  `UserAgent` varchar(4096) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acciones_por_pedido`
--

CREATE TABLE `acciones_por_pedido` (
  `app_id` int(11) NOT NULL,
  `app_pedido` int(6) UNSIGNED ZEROFILL NOT NULL,
  `app_detalle` longtext NOT NULL,
  `app_fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `app_tipo_accion` int(11) NOT NULL,
  `app_operador` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `ip` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acuerdos_floristas`
--

CREATE TABLE `acuerdos_floristas` (
  `id` bigint(20) NOT NULL,
  `type_product` varchar(2) NOT NULL,
  `product_id` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `price_df` decimal(12,2) NOT NULL,
  `price_centro` decimal(12,2) NOT NULL,
  `price_norte` decimal(12,2) NOT NULL,
  `price_sur` decimal(12,2) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adicionales`
--

CREATE TABLE `adicionales` (
  `id_adicionales` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(250) NOT NULL DEFAULT '',
  `precio_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `zonas` mediumtext NOT NULL,
  `descripcion_ch` mediumtext NOT NULL,
  `descripcion_m` mediumtext NOT NULL,
  `descripcion_g` mediumtext NOT NULL,
  `ocasion` mediumtext NOT NULL,
  `rubro` mediumtext NOT NULL,
  `foto` varchar(50) NOT NULL DEFAULT '',
  `destacado` char(2) NOT NULL DEFAULT '',
  `pais` int(6) NOT NULL DEFAULT 0,
  `condolencias` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_f` char(2) NOT NULL DEFAULT '',
  `foto_chica` varchar(50) NOT NULL DEFAULT '',
  `foto_grande` varchar(50) NOT NULL DEFAULT '',
  `costo_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `muestro_foto_al_florista` char(1) NOT NULL,
  `horarios` mediumtext NOT NULL,
  `nota_florista_ch` longtext NOT NULL,
  `nota_florista_m` longtext NOT NULL,
  `nota_florista_g` longtext NOT NULL,
  `foto_florista` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `orden` int(11) DEFAULT 50,
  `id_linea_producto` int(11) NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `nivel_entrega` int(11) NOT NULL DEFAULT 0,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0,
  `configuracion_personalizacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adicionales_cuentas`
--

CREATE TABLE `adicionales_cuentas` (
  `id` int(11) NOT NULL,
  `adicional` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adicionales_e`
--

CREATE TABLE `adicionales_e` (
  `id_adicionales` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(250) NOT NULL DEFAULT '',
  `precio_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `zonas` mediumtext NOT NULL,
  `descripcion_ch` mediumtext NOT NULL,
  `descripcion_m` mediumtext NOT NULL,
  `descripcion_g` mediumtext NOT NULL,
  `ocasion` mediumtext NOT NULL,
  `rubro` mediumtext NOT NULL,
  `foto` varchar(50) NOT NULL DEFAULT '',
  `destacado` char(2) NOT NULL DEFAULT '',
  `pais` int(6) NOT NULL DEFAULT 0,
  `condolencias` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_f` char(2) NOT NULL DEFAULT '',
  `foto_chica` varchar(50) NOT NULL DEFAULT '',
  `foto_grande` varchar(50) NOT NULL DEFAULT '',
  `costo_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `horarios` varchar(500) NOT NULL,
  `orden` int(11) NOT NULL DEFAULT 50,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adicionales_por_producto`
--

CREATE TABLE `adicionales_por_producto` (
  `id` int(11) NOT NULL,
  `adicional` int(11) NOT NULL,
  `producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adjuntos_pedido`
--

CREATE TABLE `adjuntos_pedido` (
  `id` int(11) NOT NULL,
  `pedido` varchar(20) NOT NULL,
  `operador` varchar(20) DEFAULT NULL,
  `filename` varchar(255) NOT NULL,
  `storage_path` varchar(500) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `mime_type` varchar(100) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `comentario` varchar(500) DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `borrado` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `afiliados`
--

CREATE TABLE `afiliados` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(75) NOT NULL DEFAULT '',
  `url` varchar(100) NOT NULL DEFAULT '',
  `correo` varchar(100) NOT NULL DEFAULT '',
  `pancarta` varchar(25) NOT NULL DEFAULT '',
  `sitio` varchar(100) NOT NULL DEFAULT '',
  `codigo_html` mediumtext NOT NULL,
  `cuando` varchar(25) NOT NULL DEFAULT '',
  `visitas` int(6) NOT NULL DEFAULT 0,
  `compras` int(6) NOT NULL DEFAULT 0,
  `password01` varchar(20) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alerts`
--

CREATE TABLE `alerts` (
  `id` int(11) NOT NULL,
  `alert_name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `json_event` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `script_type` enum('sql','shellscript','curl') NOT NULL,
  `require_data` tinyint(4) NOT NULL DEFAULT 1,
  `script_content` text NOT NULL,
  `notifications_type` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `notifications_users` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `notifications_difference` int(11) NOT NULL,
  `state` enum('active','desactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alerts_records`
--

CREATE TABLE `alerts_records` (
  `id` int(11) NOT NULL,
  `alert_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `interval` enum('min','15min','30min','1h','6h','12h','1d','7d','15d','1m','6m','1a') NOT NULL,
  `result_records` int(11) NOT NULL,
  `result_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `status` int(11) DEFAULT NULL,
  `result` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aliases_zonas`
--

CREATE TABLE `aliases_zonas` (
  `alias` varchar(60) NOT NULL,
  `id_zona` int(11) NOT NULL,
  `orden` int(11) NOT NULL,
  `fam` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app_geoip`
--

CREATE TABLE `app_geoip` (
  `ip` varchar(40) NOT NULL,
  `pais_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `archiculo`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `archiculo` (
`tipo` varchar(11)
,`id_productos` varchar(13)
,`nombre` varchar(250)
,`precio_ch` decimal(6,2)
,`precio_m` decimal(6,2)
,`precio_g` decimal(6,2)
,`zonas` longtext
,`categorias` longtext
,`pais` int(11)
,`id_linea_producto` int(11)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ariel_fotos`
--

CREATE TABLE `ariel_fotos` (
  `foto` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `automatic_assign_operator`
--

CREATE TABLE `automatic_assign_operator` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  `time_start` time NOT NULL,
  `time_end` time NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `countries` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`countries`)),
  `zones` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`zones`)),
  `daily_orders` int(11) NOT NULL,
  `remaining_orders` int(11) NOT NULL,
  `created_by` bigint(20) UNSIGNED DEFAULT NULL,
  `updated_by` bigint(20) UNSIGNED DEFAULT NULL,
  `deleted_by` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `backup_precios_sv`
--

CREATE TABLE `backup_precios_sv` (
  `id_producto` int(11) NOT NULL,
  `precio_ch` mediumtext NOT NULL,
  `precio_m` mediumtext NOT NULL,
  `precio_g` mediumtext NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banners_fam`
--

CREATE TABLE `banners_fam` (
  `id` int(11) NOT NULL,
  `nombre` mediumtext NOT NULL,
  `etiqueta` mediumtext NOT NULL,
  `cuentas` longtext NOT NULL,
  `paises` longtext NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `orden` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banners_fecha_especial`
--

CREATE TABLE `banners_fecha_especial` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `nombre_banner` varchar(300) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `posicion` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `ancho` int(11) NOT NULL,
  `alto` int(11) NOT NULL,
  `url` varchar(300) NOT NULL,
  `alt` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banners_html5`
--

CREATE TABLE `banners_html5` (
  `bannerID` int(11) NOT NULL,
  `bannerNombre` varchar(255) NOT NULL,
  `bannerEstado` tinyint(1) NOT NULL,
  `bannerPaises` mediumtext NOT NULL,
  `bannerCuentas` mediumtext NOT NULL,
  `bannerPositions` mediumtext NOT NULL,
  `bannerCodigo` longtext NOT NULL,
  `bannerCodigoIngles` longtext NOT NULL,
  `bannerAncho` mediumtext NOT NULL,
  `bannerAlto` mediumtext NOT NULL,
  `bannerJpg` varchar(255) NOT NULL,
  `bannerJpgIngles` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banners_html5_positions`
--

CREATE TABLE `banners_html5_positions` (
  `posID` int(11) NOT NULL,
  `posNombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banners_pf`
--

CREATE TABLE `banners_pf` (
  `id` int(11) NOT NULL,
  `nombre` mediumtext NOT NULL,
  `etiqueta` mediumtext NOT NULL,
  `cuentas` longtext NOT NULL,
  `paises` longtext NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banners_por_cuenta`
--

CREATE TABLE `banners_por_cuenta` (
  `id` int(11) NOT NULL,
  `banner` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banners_por_pais`
--

CREATE TABLE `banners_por_pais` (
  `id` int(11) NOT NULL,
  `banner` int(11) NOT NULL,
  `pais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bin_cards`
--

CREATE TABLE `bin_cards` (
  `id` int(11) NOT NULL,
  `bin` varchar(12) NOT NULL,
  `country` varchar(5) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `bank` varchar(100) NOT NULL,
  `type` varchar(20) NOT NULL,
  `origen` varchar(20) NOT NULL,
  `json` text DEFAULT NULL,
  `dt_created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bloqueos_stock_florista`
--

CREATE TABLE `bloqueos_stock_florista` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `florista_id` bigint(20) UNSIGNED NOT NULL,
  `tipo_bloqueo` enum('color','categoria') NOT NULL,
  `referencia_id` bigint(20) NOT NULL,
  `inicio_en` timestamp NOT NULL DEFAULT current_timestamp(),
  `expira_en` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `estado_intermediario` enum('pendiente','backup_con_tarjeton','backup_sin_tarjeton','sin_backup') DEFAULT 'pendiente',
  `notificado_reapertura` tinyint(4) DEFAULT 0,
  `intermediario_user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `intermediario_respondio_en` timestamp NULL DEFAULT NULL,
  `revocado_en` timestamp NULL DEFAULT NULL,
  `revocado_por_id` bigint(20) UNSIGNED DEFAULT NULL,
  `creado_por_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bonificaciones`
--

CREATE TABLE `bonificaciones` (
  `id` int(10) UNSIGNED NOT NULL,
  `f_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `t_bonificacion` char(1) NOT NULL DEFAULT 'P',
  `de_codigo` varchar(20) NOT NULL,
  `de_bonificacion` varchar(60) NOT NULL,
  `de_bonificacion_e` varchar(60) NOT NULL,
  `descripcion` mediumtext NOT NULL,
  `descripcion_e` mediumtext NOT NULL,
  `visible_front` tinyint(1) DEFAULT NULL,
  `visible_front_pais` tinyint(1) DEFAULT NULL,
  `f_vencimiento` date NOT NULL,
  `f_vencimiento_entrega` date DEFAULT NULL,
  `m_importe_minimo` decimal(10,2) NOT NULL DEFAULT 0.00,
  `m_importe_fijo` decimal(10,2) NOT NULL,
  `n_descuento` int(11) NOT NULL,
  `b_repetible` char(1) NOT NULL DEFAULT 'N',
  `b_repetible_cliente` varchar(1) NOT NULL DEFAULT 'N',
  `b_cliente_existente` tinyint(1) NOT NULL,
  `paises` varchar(50) DEFAULT NULL COMMENT 'son los numero de paises separados por comas',
  `b_cuentas` mediumtext NOT NULL,
  `b_paises` mediumtext NOT NULL,
  `zonas` varchar(50) DEFAULT NULL COMMENT 'son los numeros de zonas separados por comas',
  `id_cliente` int(11) NOT NULL,
  `f_utilizacion` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `repeticiones` int(11) NOT NULL,
  `costo_regalo` decimal(10,2) NOT NULL,
  `descripcion_florista` varchar(1000) DEFAULT NULL,
  `super_cupon` tinyint(4) NOT NULL DEFAULT 0,
  `productos_minimo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bonificaciones_historicos`
--

CREATE TABLE `bonificaciones_historicos` (
  `id` int(10) UNSIGNED NOT NULL,
  `f_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `t_bonificacion` char(1) NOT NULL DEFAULT 'P',
  `de_codigo` varchar(20) NOT NULL,
  `de_bonificacion` varchar(60) NOT NULL,
  `de_bonificacion_e` varchar(60) NOT NULL,
  `descripcion` mediumtext NOT NULL,
  `descripcion_e` mediumtext NOT NULL,
  `visible_front` tinyint(1) DEFAULT NULL,
  `visible_front_pais` tinyint(1) DEFAULT NULL,
  `f_vencimiento` date NOT NULL,
  `m_importe_minimo` decimal(10,2) NOT NULL DEFAULT 0.00,
  `m_importe_fijo` decimal(10,2) NOT NULL,
  `n_descuento` int(11) NOT NULL,
  `b_repetible` char(1) NOT NULL DEFAULT 'N',
  `b_repetible_cliente` varchar(1) NOT NULL DEFAULT 'N',
  `b_cliente_existente` tinyint(1) NOT NULL,
  `paises` varchar(50) DEFAULT NULL COMMENT 'son los numero de paises separados por comas',
  `b_cuentas` mediumtext NOT NULL,
  `b_paises` mediumtext NOT NULL,
  `zonas` varchar(50) DEFAULT NULL COMMENT 'son los numeros de zonas separados por comas',
  `id_cliente` int(11) NOT NULL,
  `f_utilizacion` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `repeticiones` int(11) NOT NULL,
  `costo_regalo` decimal(10,2) NOT NULL,
  `descripcion_florista` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bonuses`
--

CREATE TABLE `bonuses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `bonus_code` varchar(191) NOT NULL,
  `bonus_type` varchar(191) NOT NULL DEFAULT 'P',
  `bonus_name` varchar(191) NOT NULL,
  `visible_front` int(11) DEFAULT NULL,
  `visible_front_country` int(11) DEFAULT NULL,
  `expiration_date` date NOT NULL,
  `minimum_amount` int(11) NOT NULL DEFAULT 0,
  `fixed_amount` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `repeatable` varchar(191) NOT NULL DEFAULT 'N',
  `repeatable_client` varchar(191) NOT NULL DEFAULT 'N',
  `existing_customer` int(11) NOT NULL,
  `country` varchar(191) DEFAULT NULL,
  `zone` varchar(191) DEFAULT NULL,
  `id_client` varchar(191) NOT NULL,
  `gift_cost` varchar(191) NOT NULL,
  `description_in_spanish` longtext NOT NULL,
  `description_in_english` longtext NOT NULL,
  `description_florist` longtext DEFAULT NULL,
  `date_of_use` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bonu_country`
--

CREATE TABLE `bonu_country` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bonus_id` bigint(20) UNSIGNED NOT NULL,
  `country_id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bonu_site`
--

CREATE TABLE `bonu_site` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bonus_id` bigint(20) UNSIGNED NOT NULL,
  `site_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_menu`
--

CREATE TABLE `cache_menu` (
  `id` int(11) NOT NULL,
  `recuperadas` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `categoria` int(11) NOT NULL,
  `tipo` mediumtext NOT NULL,
  `cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_menu_fam`
--

CREATE TABLE `cache_menu_fam` (
  `id` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `zona` int(11) NOT NULL,
  `listado` mediumtext NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cancellation_reasons`
--

CREATE TABLE `cancellation_reasons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `responsible_cancellation` enum('cliente','proveedor','operador') NOT NULL DEFAULT 'cliente',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cantidad_chequeos_ip`
--

CREATE TABLE `cantidad_chequeos_ip` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `llamados` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogs`
--

CREATE TABLE `catalogs` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `country_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` int(11) NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalog_by_zone`
--

CREATE TABLE `catalog_by_zone` (
  `id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL,
  `catalog_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalog_exclusion_exceptions`
--

CREATE TABLE `catalog_exclusion_exceptions` (
  `id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalog_inclusion_exceptions`
--

CREATE TABLE `catalog_inclusion_exceptions` (
  `id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(100) NOT NULL DEFAULT '',
  `ocaocate` varchar(15) NOT NULL DEFAULT '',
  `activo` char(2) NOT NULL DEFAULT '',
  `texto` varchar(100) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `html_top` mediumtext NOT NULL,
  `html_bottom` mediumtext NOT NULL,
  `notainterna` mediumtext NOT NULL,
  `etiqueta_nombre` varchar(300) NOT NULL,
  `banner_top` varchar(255) NOT NULL,
  `banner_top_eng` varchar(255) NOT NULL,
  `alias_es` mediumtext NOT NULL,
  `alias_en` mediumtext NOT NULL,
  `etiqueta_h1` varchar(200) NOT NULL,
  `etiqueta_h2` varchar(400) NOT NULL,
  `etiqueta_description` varchar(800) NOT NULL,
  `etiqueta_title` varchar(100) DEFAULT NULL,
  `id_categoria_padre` int(11) DEFAULT NULL,
  `es_generica` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
PARTITION BY SYSTEM_TIME (PARTITION `p0` HISTORY ENGINE = InnoDB, PARTITION `pn` CURRENT ENGINE = InnoDB);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_df`
--

CREATE TABLE `categorias_df` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(100) NOT NULL DEFAULT '',
  `ocaocate` varchar(15) NOT NULL DEFAULT '',
  `activo` char(2) NOT NULL DEFAULT '',
  `notainterna` mediumtext NOT NULL,
  `imagen` varchar(255) NOT NULL DEFAULT '',
  `leyenda` longtext NOT NULL,
  `leyendab` longtext NOT NULL,
  `orden` int(5) NOT NULL DEFAULT 0,
  `catpf` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_especiales`
--

CREATE TABLE `categorias_especiales` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(100) NOT NULL DEFAULT '',
  `activo` char(2) NOT NULL DEFAULT '',
  `imagen_superior` varchar(100) DEFAULT NULL,
  `url_de_imagen_superior` varchar(120) DEFAULT NULL,
  `imagen_inferior` varchar(100) DEFAULT NULL,
  `url_de_imagen_inferior` varchar(120) DEFAULT NULL,
  `texto` mediumtext DEFAULT NULL,
  `html` mediumtext DEFAULT NULL,
  `nombre_e` varchar(100) NOT NULL,
  `imagen_superior_e` varchar(100) DEFAULT NULL,
  `imagen_inferior_e` varchar(100) DEFAULT NULL,
  `texto_e` mediumtext DEFAULT NULL,
  `html_e` mediumtext DEFAULT NULL,
  `html2` mediumtext DEFAULT NULL,
  `html2_e` mediumtext DEFAULT NULL,
  `categoria_diapositiva` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `categoria_cinta` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `categoria_cuadro1` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `categoria_cuadro2` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `backcolor1` varchar(6) NOT NULL,
  `backcolor2` varchar(6) NOT NULL,
  `categoria_cuadro3` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `texto1` varchar(1000) DEFAULT NULL,
  `texto2` varchar(1000) DEFAULT NULL,
  `texto3` varchar(1000) DEFAULT NULL,
  `texto1_e` varchar(1000) DEFAULT NULL,
  `texto2_e` varchar(1000) DEFAULT NULL,
  `texto3_e` varchar(1000) DEFAULT NULL,
  `url1` varchar(1000) DEFAULT NULL,
  `url2` varchar(1000) DEFAULT NULL,
  `url3` varchar(1000) DEFAULT NULL,
  `imagen1` varchar(1000) DEFAULT NULL,
  `imagen2` varchar(1000) DEFAULT NULL,
  `imagen3` varchar(1000) DEFAULT NULL,
  `etiqueta_nombre` varchar(300) NOT NULL,
  `banner_top` varchar(255) NOT NULL,
  `categoria_boton` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `texto_boton` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_por_producto`
--

CREATE TABLE `categorias_por_producto` (
  `cppID` int(11) NOT NULL,
  `cppProducto` int(6) NOT NULL,
  `cppCategoria` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat2desk_countries`
--

CREATE TABLE `chat2desk_countries` (
  `id` int(11) NOT NULL,
  `code` varchar(20) DEFAULT NULL,
  `name_ru` varchar(20) DEFAULT NULL,
  `name_en` varchar(20) DEFAULT NULL,
  `iso_code` varchar(20) NOT NULL,
  `currency_id` int(11) DEFAULT NULL,
  `timezone_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat2desk_messages`
--

CREATE TABLE `chat2desk_messages` (
  `id` int(11) NOT NULL,
  `message_id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transport` varchar(50) DEFAULT NULL,
  `client_id` int(11) DEFAULT NULL,
  `operator_id` int(11) DEFAULT NULL,
  `dialog_id` int(11) DEFAULT NULL,
  `channel_id` int(11) DEFAULT NULL,
  `event_time` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chat2desk_pending_messages`
--

CREATE TABLE `chat2desk_pending_messages` (
  `id` int(11) NOT NULL,
  `operador_id` int(8) NOT NULL,
  `chat2desk_id` int(11) NOT NULL,
  `channel_id` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `sent` tinyint(4) NOT NULL DEFAULT 0,
  `sent_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `checkinj`
--

CREATE TABLE `checkinj` (
  `id` int(11) NOT NULL,
  `ip` mediumtext NOT NULL,
  `date` datetime NOT NULL,
  `site` mediumtext NOT NULL,
  `url` mediumtext NOT NULL,
  `session` mediumtext NOT NULL,
  `post` mediumtext NOT NULL,
  `get` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `claim_reasons`
--

CREATE TABLE `claim_reasons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `responsible_claim` enum('cliente','proveedor','operador') NOT NULL DEFAULT 'cliente',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `click_productos`
--

CREATE TABLE `click_productos` (
  `id_pais` int(11) NOT NULL,
  `pais` varchar(100) NOT NULL,
  `id_cuenta` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `id_producto` int(11) NOT NULL,
  `session` varchar(2048) DEFAULT NULL,
  `userAgent` varchar(2048) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` char(25) NOT NULL DEFAULT '',
  `apellido` char(25) NOT NULL DEFAULT '',
  `domicilio` char(75) NOT NULL DEFAULT '',
  `ciudad` char(25) NOT NULL DEFAULT '',
  `estado` char(25) NOT NULL DEFAULT '',
  `pais` char(100) NOT NULL,
  `cp` char(15) NOT NULL DEFAULT '',
  `telefono01` char(25) NOT NULL DEFAULT '',
  `extension` char(25) NOT NULL DEFAULT '',
  `lugar` char(10) NOT NULL DEFAULT '',
  `telefono02` char(25) NOT NULL DEFAULT '',
  `extension02` char(25) NOT NULL DEFAULT '',
  `telefono03` varchar(300) NOT NULL,
  `lugar02` char(10) NOT NULL DEFAULT '',
  `referido` char(25) NOT NULL DEFAULT '',
  `mail` char(50) NOT NULL DEFAULT '',
  `password01` char(10) NOT NULL DEFAULT '',
  `password02` char(10) NOT NULL DEFAULT '',
  `newsletter` char(2) NOT NULL DEFAULT '',
  `idioma` varchar(30) NOT NULL,
  `changename` tinyint(1) NOT NULL,
  `fid` varchar(300) NOT NULL,
  `verificado` tinyint(1) NOT NULL,
  `googleID` mediumtext NOT NULL,
  `NoRecibirReminders` bit(1) DEFAULT NULL,
  `aux` char(25) NOT NULL,
  `hashed_password` varchar(300) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `token` varchar(300) DEFAULT NULL,
  `customerIdBrantree` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `chat2desk_id` int(11) DEFAULT NULL,
  `customerIdBrantreeMethodDefault` varchar(100) NOT NULL,
  `fraude` bit(1) DEFAULT NULL,
  `telefono01_digitos` varchar(30) GENERATED ALWAYS AS (regexp_replace(regexp_replace(regexp_replace(coalesce(`telefono01`,''),'[^0-9]',''),'^54([^9][0-9]{9})$','549\\1'),'^521([0-9]{10})$','52\\1')) STORED
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Disparadores `clientes`
--
DELIMITER $$
CREATE TRIGGER `hash_pass_change_client` BEFORE UPDATE ON `clientes` FOR EACH ROW BEGIN
	IF (NEW.password01 <> OLD.password01 AND (NEW.hashed_password = OLD.hashed_password)) THEN
    	SET NEW.hashed_password = NULL;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_bags`
--

CREATE TABLE `clientes_bags` (
  `bagID` int(11) NOT NULL,
  `bagCode` varchar(15) NOT NULL,
  `bagPais` int(11) NOT NULL,
  `bagZona` int(11) NOT NULL,
  `bagCuenta` int(11) NOT NULL,
  `bagProductos` mediumtext NOT NULL,
  `bagAdicionales` mediumtext DEFAULT NULL,
  `bagBonificacion` mediumtext DEFAULT NULL,
  `bagData` mediumtext NOT NULL,
  `bagDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `bagCliente` int(11) DEFAULT NULL,
  `bagPedido` int(11) NOT NULL,
  `bagUltimaModificacion` datetime NOT NULL,
  `bagUrls` mediumtext NOT NULL,
  `bagStartDate` datetime NOT NULL,
  `bagIP` mediumtext NOT NULL,
  `bagRefresh` int(11) NOT NULL,
  `bagToken` varchar(255) NOT NULL,
  `bagUbicaciones` mediumtext NOT NULL,
  `bagMoneda` mediumtext NOT NULL,
  `bagCostoEnvio` decimal(10,2) DEFAULT NULL,
  `bagMontoBonificacion` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients_chat2desk`
--

CREATE TABLE `clients_chat2desk` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `chat2desk_country_id` int(11) DEFAULT NULL,
  `client_phone` varchar(20) NOT NULL,
  `chat2desk_id` int(11) NOT NULL,
  `chat2desk_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chat2desk_source` varchar(50) DEFAULT NULL,
  `dialog_id` int(11) DEFAULT NULL,
  `channel_id` bigint(20) DEFAULT NULL,
  `operator_id` int(11) DEFAULT NULL,
  `first_contact` datetime DEFAULT NULL,
  `last_contact` datetime DEFAULT NULL,
  `archived` tinyint(1) NOT NULL DEFAULT 0,
  `archived_at` timestamp NULL DEFAULT NULL,
  `archived_by` int(8) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clients_chat2desk_event_notification`
--

CREATE TABLE `clients_chat2desk_event_notification` (
  `id` int(11) NOT NULL,
  `chat2desk_id` int(11) NOT NULL,
  `event_name` varchar(50) NOT NULL,
  `channel_id` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `sent` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `club`
--

CREATE TABLE `club` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `correo` char(100) NOT NULL DEFAULT '',
  `pais` int(6) DEFAULT 0,
  `fecha` datetime NOT NULL,
  `cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cobranzas_online`
--

CREATE TABLE `cobranzas_online` (
  `tipo_cobranza` varchar(15) NOT NULL,
  `id_cobranza` varchar(50) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `fecha_cobranza` datetime NOT NULL,
  `moneda` varchar(5) NOT NULL DEFAULT 'USD',
  `importe` decimal(18,2) NOT NULL,
  `fecha_proceso` datetime NOT NULL,
  `importe_devuelto` decimal(18,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cobranzas_online_devoluciones`
--

CREATE TABLE `cobranzas_online_devoluciones` (
  `tipo_cobranza` varchar(10) NOT NULL,
  `id_cobranza` varchar(50) NOT NULL,
  `fecha_devolucion` datetime NOT NULL,
  `importe_devolucion` decimal(18,2) NOT NULL,
  `operador` int(11) NOT NULL,
  `motivo` tinyint(4) NOT NULL,
  `comentario` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE `colores` (
  `id` int(10) UNSIGNED NOT NULL,
  `etiqueta` varchar(200) DEFAULT NULL,
  `hex` varchar(7) DEFAULT NULL,
  `es_principal` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `orden` int(11) NOT NULL,
  `alternativas` int(11) NOT NULL DEFAULT 1,
  `no_personalizacion` bit(1) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color_availability_exceptions`
--

CREATE TABLE `color_availability_exceptions` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `since` date NOT NULL,
  `until` date DEFAULT NULL,
  `deleted` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprobantes`
--

CREATE TABLE `comprobantes` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `archivo` varchar(300) NOT NULL,
  `pedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `person_id` int(11) NOT NULL,
  `type_contact_id` int(11) NOT NULL,
  `value` varchar(255) NOT NULL,
  `main` tinyint(1) DEFAULT 0,
  `external_id` varchar(50) DEFAULT NULL,
  `wa_business` tinyint(1) NOT NULL DEFAULT 0,
  `send_sms` tinyint(4) NOT NULL DEFAULT 0,
  `verified` tinyint(1) DEFAULT 0,
  `verification_code` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts_log`
--

CREATE TABLE `contacts_log` (
  `id` int(10) UNSIGNED NOT NULL,
  `contact_id` int(10) UNSIGNED NOT NULL,
  `is_business` tinyint(1) NOT NULL DEFAULT 0,
  `message` text DEFAULT NULL,
  `success` tinyint(1) NOT NULL,
  `error_response` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contact_notifications`
--

CREATE TABLE `contact_notifications` (
  `id` int(11) NOT NULL,
  `notification_type_id` int(11) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `corregidos_ingles`
--

CREATE TABLE `corregidos_ingles` (
  `id` int(11) NOT NULL,
  `producto` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `correos_excluidos_para_campanias`
--

CREATE TABLE `correos_excluidos_para_campanias` (
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `CostosPromedioPorProveedor`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `CostosPromedioPorProveedor` (
`id_pais` int(11)
,`id_zonas` int(6)
,`id_productos` int(6)
,`descripcion` varchar(500)
,`descripcion_ingles` varchar(50)
,`proveedorNombre` varchar(255)
,`NombreZona` char(250)
,`MinCosto` decimal(10,2)
,`MaxCosto` decimal(10,2)
,`PromedioCosto` decimal(14,6)
,`CantPedidos` bigint(21)
,`UltimoCosto` decimal(10,2)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costos_fecha`
--

CREATE TABLE `costos_fecha` (
  `id` int(11) NOT NULL,
  `fecha` varchar(100) NOT NULL,
  `costo` decimal(10,2) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `etiqueta` varchar(300) NOT NULL,
  `horario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costos_fecha_cuentas`
--

CREATE TABLE `costos_fecha_cuentas` (
  `id` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `costo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costos_por_pedido`
--

CREATE TABLE `costos_por_pedido` (
  `id` int(11) NOT NULL,
  `pedido` int(6) UNSIGNED ZEROFILL NOT NULL,
  `costo` decimal(10,2) NOT NULL,
  `operador` int(11) NOT NULL,
  `nota` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `costos_promedios_pais`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `costos_promedios_pais` (
`id_pais` int(11)
,`id_productos` int(6) unsigned zerofill
,`nombre` varchar(250)
,`tamanio` int(1)
,`descripcion` varchar(500)
,`descripcion_ingles` varchar(500)
,`foto` varchar(300)
,`cantidad_ventas` int(11)
,`CostoPromedioGeneral_Pais` decimal(14,6)
,`CostoMinimoGeneral_Pais` decimal(10,2)
,`CostoMaximoGeneral_Pais` decimal(10,2)
,`CantidadComprasGeneral_Pais` bigint(21)
,`CostoPromedioConDrop_Pais` decimal(14,6)
,`CostoMinimoConDrop_Pais` decimal(10,2)
,`CostoMaximoConDrop_Pais` decimal(10,2)
,`CantidadComprasConDrop_Pais` bigint(21)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `costos_promedios_zona`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `costos_promedios_zona` (
`id_pais` int(11)
,`id_zona_padre` int(6)
,`id_zonas` int(6)
,`id_productos` int(6) unsigned zerofill
,`nombre` varchar(250)
,`tamanio` int(1)
,`descripcion` varchar(500)
,`descripcion_ingles` varchar(500)
,`foto` varchar(300)
,`cantidad_ventas` int(11)
,`CostoPromedioGeneral_Zona` decimal(14,6)
,`CostoMinimoGeneral_Zona` decimal(10,2)
,`CostoMaximoGeneral_Zona` decimal(10,2)
,`CantidadComprasGeneral_Zona` bigint(21)
,`CostoPromedioConDrop_Zona` decimal(14,6)
,`CostoMinimoConDrop_Zona` decimal(10,2)
,`CostoMaximoConDrop_Zona` decimal(10,2)
,`CantidadComprasConDrop_Zona` bigint(21)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `costos_promedios_zonaPadre`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `costos_promedios_zonaPadre` (
`id_pais` int(11)
,`id_zona_padre` int(6)
,`id_productos` int(6) unsigned zerofill
,`nombre` varchar(250)
,`tamanio` int(1)
,`descripcion` varchar(500)
,`descripcion_ingles` varchar(500)
,`foto` varchar(300)
,`cantidad_ventas` int(11)
,`CostoPromedioGeneral_ZonaPadre` decimal(14,6)
,`CostoMinimoGeneral_ZonaPadre` decimal(10,2)
,`CostoMaximoGeneral_ZonaPadre` decimal(10,2)
,`CantidadComprasGeneral_ZonaPadre` bigint(21)
,`CostoPromedioConDrop_ZonaPadre` decimal(14,6)
,`CostoMinimoConDrop_ZonaPadre` decimal(10,2)
,`CostoMaximoConDrop_ZonaPadre` decimal(10,2)
,`CantidadComprasConDrop_ZonaPadre` bigint(21)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacionporfecha`
--

CREATE TABLE `cotizacionporfecha` (
  `id` int(11) NOT NULL,
  `desde` date NOT NULL,
  `hasta` date NOT NULL,
  `cotizacion` decimal(10,2) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion_dolar_mx`
--

CREATE TABLE `cotizacion_dolar_mx` (
  `cotizacionID` int(11) NOT NULL,
  `cotizacionValor` decimal(10,2) NOT NULL,
  `cotizacionFechaModificacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `alias` varchar(100) NOT NULL,
  `alias_es` varchar(60) DEFAULT NULL,
  `alias_en` varchar(60) DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `name_in_spanish` varchar(200) NOT NULL,
  `name_in_english` varchar(200) NOT NULL,
  `country_code` varchar(191) NOT NULL,
  `twenty_four_hour_city` varchar(191) NOT NULL,
  `mail` varchar(191) NOT NULL DEFAULT '',
  `mail_florist` varchar(191) NOT NULL,
  `mail_florist_states` int(11) NOT NULL,
  `average_start_year` int(11) NOT NULL,
  `flower_delivery_022` varchar(191) DEFAULT NULL,
  `they_deliver_same_day` varchar(256) DEFAULT NULL,
  `take_country_products` int(11) NOT NULL,
  `take_area_products` int(11) NOT NULL,
  `percentage_in_canada` decimal(5,2) NOT NULL,
  `percentage_in_original_canada` decimal(10,2) NOT NULL,
  `time_difference` int(11) NOT NULL,
  `only_one_zone` int(11) NOT NULL,
  `utc_offset` int(11) NOT NULL,
  `closed_saturday` int(11) NOT NULL,
  `closed_sunday` int(11) NOT NULL,
  `message_in_spanish` longtext NOT NULL,
  `message_in_english` longtext NOT NULL,
  `local_currency_id` int(11) NOT NULL,
  `flag` varchar(50) NOT NULL,
  `json_business_hours` text DEFAULT NULL,
  `two_letters_code` varchar(2) DEFAULT NULL,
  `active` int(11) NOT NULL,
  `admin_language` int(11) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Disparadores `countries`
--
DELIMITER $$
CREATE TRIGGER `trg_countries_after_update` AFTER UPDATE ON `countries` FOR EACH ROW BEGIN
  IF NEW.take_country_products != OLD.take_country_products
  OR NEW.take_area_products    != OLD.take_area_products THEN
    UPDATE zonas SET
      pais_catalogo = IF(NEW.take_country_products = NEW.id, NEW.id,  NEW.take_country_products),
      zona_catalogo = IF(NEW.take_country_products = NEW.id, id_zonas, NEW.take_area_products)
    WHERE pais = NEW.id;
  END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas_facebook`
--

CREATE TABLE `cuentas_facebook` (
  `id` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `facebook` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentas_twitter`
--

CREATE TABLE `cuentas_twitter` (
  `id` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `twitter` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_pedido`
--

CREATE TABLE `datos_pedido` (
  `id_pedido` int(7) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `valor` varchar(300) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `fecha_actualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `habilitado` bit(1) NOT NULL,
  `date_mail_cost_not_accepted` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_proveedor_por_pedido`
--

CREATE TABLE `datos_proveedor_por_pedido` (
  `id` int(11) NOT NULL,
  `pedido` int(11) NOT NULL,
  `datos` longtext NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `operador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `densest_areas`
--

CREATE TABLE `densest_areas` (
  `id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `count` int(11) NOT NULL,
  `zone_aprox_google_map` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destacados_pais`
--

CREATE TABLE `destacados_pais` (
  `destacadoID` int(11) NOT NULL,
  `destacadoPais` int(11) NOT NULL,
  `destacadoCuenta` int(11) NOT NULL,
  `destacadoProductos` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `destinatarios`
--

CREATE TABLE `destinatarios` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `remitente` int(6) NOT NULL DEFAULT 0,
  `nombre` varchar(25) NOT NULL DEFAULT '',
  `apellido` varchar(25) NOT NULL DEFAULT '',
  `domicilio` mediumtext NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `estado` varchar(250) NOT NULL DEFAULT '',
  `pais` varchar(25) NOT NULL DEFAULT '',
  `id_pais` int(11) NOT NULL,
  `cp` varchar(15) NOT NULL DEFAULT '',
  `telefono01` varchar(25) NOT NULL DEFAULT '',
  `extension` varchar(25) DEFAULT '',
  `lugar` varchar(10) DEFAULT '',
  `telefono02` varchar(25) DEFAULT '',
  `extension02` varchar(25) DEFAULT '',
  `lugar02` varchar(10) DEFAULT '',
  `referido` varchar(25) DEFAULT '',
  `mail` varchar(50) DEFAULT '',
  `password01` varchar(10) DEFAULT '',
  `mensaje` varchar(150) DEFAULT '',
  `firma` varchar(50) DEFAULT '',
  `zona` varchar(100) DEFAULT '',
  `zona_id` int(6) NOT NULL DEFAULT 0,
  `zip` varchar(25) DEFAULT '',
  `eliminado` tinyint(1) NOT NULL DEFAULT 0,
  `location_type` int(11) DEFAULT NULL,
  `location_description` varchar(300) DEFAULT NULL,
  `ocation` int(11) DEFAULT NULL,
  `lat` double NOT NULL DEFAULT 0,
  `lng` double NOT NULL DEFAULT 0,
  `formatted_address_google_map` varchar(500) DEFAULT NULL,
  `zone_aprox_google_map` varchar(500) DEFAULT NULL,
  `distancia_punto_de_referencia` int(11) DEFAULT NULL COMMENT 'coord: 21.379298, -101.682666',
  `source_geo` enum('GoogleMap','OpenStreetMap','Importacion','Otros','GoogleMapZone') NOT NULL,
  `observaciones` mediumtext DEFAULT NULL,
  `ultima_compra` timestamp NULL DEFAULT NULL,
  `json_google_maps` longtext DEFAULT NULL,
  `piso_depto` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `details_order_delivered`
--

CREATE TABLE `details_order_delivered` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `delivered_at` datetime NOT NULL,
  `delivered_to` varchar(191) NOT NULL,
  `fullname` varchar(191) NOT NULL,
  `cellphone` varchar(191) DEFAULT NULL,
  `details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_ordenes_aprobadas`
--

CREATE TABLE `detalle_ordenes_aprobadas` (
  `id` int(11) NOT NULL,
  `orden` int(11) NOT NULL,
  `medio_pago` varchar(1000) NOT NULL,
  `operador` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `monto` decimal(10,2) NOT NULL,
  `confirmada` tinyint(1) NOT NULL,
  `fecha_confirmada` datetime NOT NULL,
  `monto_confirmado` decimal(10,2) NOT NULL,
  `operador_confirmado` int(11) NOT NULL,
  `liquidado` tinyint(1) NOT NULL,
  `operador_liquidado` int(11) NOT NULL,
  `fecha_liquidado` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emails_adjuntos`
--

CREATE TABLE `emails_adjuntos` (
  `id` int(10) UNSIGNED NOT NULL,
  `email_id` int(11) NOT NULL,
  `pedido` int(10) UNSIGNED DEFAULT NULL,
  `filename` varchar(255) NOT NULL,
  `storage_path` varchar(512) NOT NULL COMMENT 'key en R2',
  `url` varchar(1024) NOT NULL COMMENT 'URL publica en R2',
  `mime_type` varchar(128) DEFAULT NULL,
  `size` bigint(20) UNSIGNED DEFAULT NULL,
  `uploaded_by` int(11) DEFAULT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emails_enviados`
--

CREATE TABLE `emails_enviados` (
  `id` int(11) NOT NULL,
  `asunto` varchar(300) NOT NULL,
  `content` longtext NOT NULL,
  `fromemail` varchar(300) NOT NULL,
  `fromname` varchar(300) NOT NULL,
  `fecha` datetime NOT NULL,
  `operador` int(11) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 0,
  `pedido` int(6) UNSIGNED ZEROFILL NOT NULL,
  `groupID` int(11) NOT NULL,
  `debug` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emails_rechazados`
--

CREATE TABLE `emails_rechazados` (
  `id` int(11) NOT NULL,
  `Host` varchar(50) NOT NULL,
  `CharSet` varchar(50) NOT NULL,
  `SMTPAuth` tinyint(1) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Subject` varchar(300) NOT NULL,
  `Body` longtext NOT NULL,
  `AltBody` longtext NOT NULL,
  `fromemail` varchar(300) NOT NULL,
  `FromName` varchar(300) NOT NULL,
  `MessageID` varchar(50) NOT NULL,
  `to_email` varchar(300) NOT NULL,
  `cc` varchar(300) NOT NULL,
  `ReplyTo` varchar(300) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `estado` enum('pendiente','enviado','rechazado','bloqueado') NOT NULL DEFAULT 'pendiente',
  `intentos` int(11) NOT NULL,
  `error_message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `emails_templates`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `emails_templates` (
`et_id` bigint(20) unsigned
,`et_nombre` varchar(191)
,`et_content` longtext
,`et_observaciones` longtext
,`et_asunto` varchar(191)
,`et_asunto_e` varchar(191)
,`et_content_e` longtext
,`et_mail_from` varchar(191)
,`et_from` varchar(191)
,`et_activo` int(11)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `emails_whitelist`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `emails_whitelist` (
`email` longtext
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especiales_por_producto`
--

CREATE TABLE `especiales_por_producto` (
  `epp_id` int(11) NOT NULL,
  `epp_producto` int(11) NOT NULL,
  `epp_especial` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especiales_tipos`
--

CREATE TABLE `especiales_tipos` (
  `especial_id` int(11) NOT NULL,
  `especial_nombre` varchar(300) NOT NULL,
  `especial_img` varchar(300) NOT NULL,
  `especial_activo` tinyint(1) NOT NULL,
  `especial_img_ficha` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_auto`
--

CREATE TABLE `estados_auto` (
  `estadoID` int(11) NOT NULL,
  `estadoNombre` mediumtext NOT NULL,
  `estadoEtiqueta` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_backend`
--

CREATE TABLE `estados_backend` (
  `eb_id` int(11) NOT NULL,
  `eb_nombre` varchar(300) NOT NULL,
  `eb_estado_cliente` varchar(300) NOT NULL,
  `eb_estado_admin` varchar(300) NOT NULL,
  `eb_estado_default` varchar(300) NOT NULL,
  `eb_template_asociado` int(11) NOT NULL,
  `pos` int(11) NOT NULL,
  `estado_aprobado` tinyint(1) NOT NULL,
  `requiere_permiso` int(11) NOT NULL,
  `grupo` int(11) NOT NULL,
  `estado_rapido` int(11) NOT NULL,
  `grupo_botones_admin` int(11) NOT NULL,
  `secuencia_cliente` int(11) NOT NULL,
  `etiqueta_paso1_cliente` varchar(100) NOT NULL,
  `etiqueta_comentario_cliente` varchar(100) NOT NULL,
  `elementos_contextuales` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_por_pedido`
--

CREATE TABLE `estados_por_pedido` (
  `epp_id` int(11) NOT NULL,
  `epp_pedido` int(7) UNSIGNED ZEROFILL NOT NULL,
  `epp_estado_backend` int(11) NOT NULL,
  `epp_fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `epp_operador` int(11) NOT NULL,
  `final` tinyint(1) NOT NULL,
  `motivo_anulacion` mediumtext NOT NULL,
  `motivo_reprogramacion` int(11) NOT NULL,
  `supervisado` tinyint(4) NOT NULL DEFAULT 0,
  `debug` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Disparadores `estados_por_pedido`
--
DELIMITER $$
CREATE TRIGGER `estados_por_pedido_INSERT_estado` AFTER INSERT ON `estados_por_pedido` FOR EACH ROW BEGIN
  IF new.final = 1 <> 0 AND EXISTS(
    SELECT *
    FROM pedidos
    WHERE id = new.epp_pedido
    AND ifnull(estadoBackendID, 0) <> new.epp_estado_backend
  ) THEN
    UPDATE pedidos
    SET estadoBackendID = new.epp_estado_backend
    WHERE id = new.epp_pedido;
  END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetas_descripcion`
--

CREATE TABLE `etiquetas_descripcion` (
  `id` int(11) NOT NULL,
  `codigo` int(6) UNSIGNED ZEROFILL NOT NULL,
  `de_ingles` longtext NOT NULL,
  `de_castellano` longtext NOT NULL,
  `de_portugues` longtext NOT NULL,
  `id_cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `etiquetas_descripcion_bu`
--

CREATE TABLE `etiquetas_descripcion_bu` (
  `id` int(11) NOT NULL,
  `codigo` int(6) UNSIGNED ZEROFILL NOT NULL,
  `de_ingles` longtext NOT NULL,
  `de_castellano` longtext NOT NULL,
  `de_portugues` longtext NOT NULL,
  `id_cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id_evento` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `f_evento` date NOT NULL,
  `de_nombre` varchar(50) NOT NULL,
  `de_tipo` varchar(50) NOT NULL,
  `id_tipo` int(11) DEFAULT NULL,
  `id_relacion` int(11) DEFAULT NULL,
  `de_texto` varchar(160) NOT NULL DEFAULT '',
  `b_repetible` char(1) NOT NULL DEFAULT 'N',
  `n_dias_recordar` int(3) NOT NULL,
  `de_idioma` varchar(2) NOT NULL DEFAULT 'sp' COMMENT 'Idioma con que se ingreso el evento',
  `de_site` varchar(50) DEFAULT NULL,
  `id_contacto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `extractor_url`
--

CREATE TABLE `extractor_url` (
  `id` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `url` longtext NOT NULL,
  `ocasiones` varchar(300) NOT NULL,
  `categorias` varchar(300) NOT NULL,
  `actualizacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ExtraData`
--

CREATE TABLE `ExtraData` (
  `TableName` varchar(50) NOT NULL,
  `AccountId` int(11) NOT NULL DEFAULT 0,
  `RecordId` int(11) NOT NULL,
  `Value` varchar(4096) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facebook_apis`
--

CREATE TABLE `facebook_apis` (
  `cuenta` int(11) NOT NULL,
  `appid` varchar(80) NOT NULL,
  `secret` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturacion_por_medio_cuenta`
--

CREATE TABLE `facturacion_por_medio_cuenta` (
  `id` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `medio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `faq_cuentas`
--

CREATE TABLE `faq_cuentas` (
  `faqID` int(11) NOT NULL,
  `faqNombre` varchar(255) NOT NULL,
  `faqCuentas` mediumtext NOT NULL,
  `faqPaises` mediumtext NOT NULL,
  `faqEtiqueta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fechas_entrega_por_pedido`
--

CREATE TABLE `fechas_entrega_por_pedido` (
  `id` int(11) NOT NULL,
  `pedido` int(6) UNSIGNED ZEROFILL NOT NULL,
  `fecha` varchar(400) NOT NULL,
  `nota` longtext NOT NULL,
  `operador` int(11) NOT NULL,
  `motivo` int(11) NOT NULL,
  `fecha_alta` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feedback`
--

CREATE TABLE `feedback` (
  `id` int(11) NOT NULL,
  `pedido` int(6) UNSIGNED ZEROFILL NOT NULL,
  `q1` int(11) NOT NULL,
  `q2` int(11) NOT NULL,
  `q3` int(11) NOT NULL,
  `q4` int(11) NOT NULL,
  `q5` int(11) NOT NULL,
  `q6` longtext NOT NULL,
  `q7` longtext NOT NULL,
  `q8` longtext NOT NULL,
  `fecha` datetime NOT NULL,
  `operador` int(11) NOT NULL,
  `hash` varchar(40) NOT NULL,
  `id_cuenta` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `fecha_respuesta` datetime NOT NULL,
  `accion` tinyint(1) NOT NULL,
  `veces_enviado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feriados`
--

CREATE TABLE `feriados` (
  `id` int(11) UNSIGNED ZEROFILL NOT NULL,
  `fh_feriado` date NOT NULL,
  `id_pais` int(11) NOT NULL,
  `de_observaciones` mediumtext DEFAULT NULL,
  `us_creacion` varchar(60) NOT NULL,
  `operador_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `floristas`
--

CREATE TABLE `floristas` (
  `id` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `usuario` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `floristas_acciones`
--

CREATE TABLE `floristas_acciones` (
  `accionID` int(11) NOT NULL,
  `accionFecha` datetime NOT NULL,
  `accionPedido` int(11) NOT NULL,
  `accionOperador` int(11) NOT NULL,
  `accionZona` int(11) NOT NULL,
  `accionComentarios` text NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `floristas_hash`
--

CREATE TABLE `floristas_hash` (
  `id` int(11) NOT NULL,
  `email` varchar(300) NOT NULL,
  `hash` varchar(300) NOT NULL,
  `pais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `floristas_nueva_db`
--

CREATE TABLE `floristas_nueva_db` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `floristas_por_pedido`
--

CREATE TABLE `floristas_por_pedido` (
  `fppID` int(11) NOT NULL,
  `fppFlorista` int(11) NOT NULL,
  `fppPedido` int(11) NOT NULL,
  `fppCosto` decimal(10,2) NOT NULL,
  `fppFecha` datetime NOT NULL,
  `fppPrincipal` tinyint(1) NOT NULL,
  `fppOperador` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `floristas_usuarios`
--

CREATE TABLE `floristas_usuarios` (
  `userID` int(11) NOT NULL,
  `userEmail` text NOT NULL,
  `userPassword` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `florista_productos`
--

CREATE TABLE `florista_productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `p1` varchar(255) NOT NULL,
  `p2` varchar(255) NOT NULL,
  `p3` varchar(255) NOT NULL,
  `estado1` varchar(255) DEFAULT 'NoEstado',
  `estado2` varchar(255) DEFAULT 'NoEstado',
  `estado3` varchar(255) DEFAULT 'NoEstado',
  `producto_id` int(10) UNSIGNED NOT NULL,
  `florista_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `pa1` varchar(255) DEFAULT '0',
  `pa2` varchar(255) DEFAULT '0',
  `pa3` varchar(255) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `florista_productos_acuerdos`
--

CREATE TABLE `florista_productos_acuerdos` (
  `id` int(10) UNSIGNED NOT NULL,
  `p1` decimal(10,2) NOT NULL,
  `p2` decimal(10,2) NOT NULL,
  `p3` decimal(10,2) NOT NULL,
  `type` enum('producto','adicional') DEFAULT 'producto',
  `producto_id` int(10) UNSIGNED NOT NULL,
  `florista_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `florist_actions`
--

CREATE TABLE `florist_actions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_type_florist_action` int(11) NOT NULL,
  `id_action` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_canceled` tinyint(1) NOT NULL DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `current` int(11) NOT NULL,
  `whatsapp_notification_sent` tinyint(1) NOT NULL DEFAULT 0,
  `email_notification_sent` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `florist_errors`
--

CREATE TABLE `florist_errors` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `error_message` text DEFAULT NULL,
  `url` text DEFAULT NULL,
  `florist_name` varchar(255) DEFAULT NULL,
  `florist_email` varchar(255) DEFAULT NULL,
  `florist_message` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `follow_up_comments`
--

CREATE TABLE `follow_up_comments` (
  `id` int(11) NOT NULL,
  `report` varchar(30) NOT NULL,
  `product` int(11) NOT NULL,
  `size` int(11) NOT NULL,
  `comment` text NOT NULL,
  `operador` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `frases_sugeridas`
--

CREATE TABLE `frases_sugeridas` (
  `id` int(11) NOT NULL,
  `frase` longtext NOT NULL,
  `ocasion` int(11) NOT NULL,
  `titulo` varchar(300) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `frases_sugeridas_refund`
--

CREATE TABLE `frases_sugeridas_refund` (
  `id` int(11) NOT NULL,
  `frase` longtext NOT NULL,
  `tipo` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generar_imagenes`
--

CREATE TABLE `generar_imagenes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_producto` bigint(20) UNSIGNED NOT NULL,
  `tipo_imagen` varchar(191) NOT NULL DEFAULT 'PRINCIPAL',
  `version_prompt` int(11) NOT NULL DEFAULT 1,
  `prompt_usado` text NOT NULL,
  `reprocesar` bit(1) DEFAULT NULL,
  `modelo_ia` varchar(191) NOT NULL DEFAULT 'dall-e-3',
  `parametros` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `estado` enum('pendiente','procesado','fallo','pendiente_aprobacion') NOT NULL DEFAULT 'pendiente',
  `mensaje_error` text DEFAULT NULL,
  `url_imagen_generada` varchar(191) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `GetResponseData`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `GetResponseData` (
`mail` char(50)
,`idioma` varchar(30)
,`PaisCliente` char(100)
,`fhm_creacion` timestamp
,`de_cuenta` varchar(80)
,`NombreDestinatario` varchar(25)
,`ApellidoDestinatario` varchar(25)
,`CiudadDestinatario` varchar(100)
,`EstadoDestinatario` varchar(250)
,`PaisDestinatario` varchar(25)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gifts`
--

CREATE TABLE `gifts` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `message_es` text NOT NULL,
  `message_en` text NOT NULL,
  `with_additional` tinyint(4) NOT NULL DEFAULT 0,
  `additional_product_id` int(11) DEFAULT NULL,
  `additional_product_size` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` int(11) NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gifts_for_products`
--

CREATE TABLE `gifts_for_products` (
  `id` int(11) NOT NULL,
  `gift_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_size` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` int(11) NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gift_for_sales_order`
--

CREATE TABLE `gift_for_sales_order` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `gift_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `glocalgo_checkout`
--

CREATE TABLE `glocalgo_checkout` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `order_dlocalgo_id` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'PENDING',
  `currency` varchar(3) NOT NULL,
  `amount` decimal(12,2) NOT NULL,
  `amount_usd` decimal(12,2) NOT NULL,
  `description` varchar(50) NOT NULL,
  `client_id` int(11) NOT NULL,
  `url_source` varchar(200) NOT NULL,
  `redirect_url` varchar(200) NOT NULL,
  `message` varchar(200) NOT NULL,
  `dt_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos`
--

CREATE TABLE `grupos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(500) NOT NULL,
  `alerta_encender` varchar(300) NOT NULL,
  `alerta_apagar` varchar(300) NOT NULL,
  `pais` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `notas` tinytext NOT NULL,
  `por_zonas` bit(1) NOT NULL,
  `zonas` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos_productos`
--

CREATE TABLE `grupos_productos` (
  `id` int(11) NOT NULL,
  `grupo` int(11) NOT NULL,
  `producto` int(11) NOT NULL,
  `zonas` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos_productos_cuentas`
--

CREATE TABLE `grupos_productos_cuentas` (
  `id` int(11) NOT NULL,
  `producto` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `destacado` int(11) NOT NULL,
  `grupo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupos_productos_zonas`
--

CREATE TABLE `grupos_productos_zonas` (
  `id` int(6) NOT NULL,
  `producto` int(6) NOT NULL,
  `zona` int(6) NOT NULL,
  `grupo` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hash_por_pedido`
--

CREATE TABLE `hash_por_pedido` (
  `id` int(11) NOT NULL,
  `pedido` int(11) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios_de_entrega`
--

CREATE TABLE `horarios_de_entrega` (
  `id` int(10) UNSIGNED NOT NULL,
  `n_hora_corte` int(10) UNSIGNED NOT NULL DEFAULT 17,
  `f_feriado_a` date DEFAULT NULL,
  `f_feriado_b` date DEFAULT NULL,
  `f_feriado_c` date DEFAULT NULL,
  `n_dias_a_entregar` int(10) UNSIGNED NOT NULL,
  `b_sabado` char(1) DEFAULT 'S',
  `b_domingo` char(1) DEFAULT 'S',
  `b_lunes` char(1) DEFAULT 'S',
  `de_nombre` char(30) NOT NULL,
  `fh_alta` timestamp NOT NULL DEFAULT current_timestamp(),
  `costo_sabado` decimal(10,2) NOT NULL,
  `costo_domingo` decimal(10,2) NOT NULL,
  `costo_lunes` decimal(10,2) NOT NULL,
  `costo_martes` decimal(10,2) NOT NULL,
  `costo_miercoles` decimal(10,2) NOT NULL,
  `costo_jueves` decimal(10,2) NOT NULL,
  `costo_viernes` decimal(10,2) NOT NULL,
  `es_fedex` bit(1) DEFAULT NULL,
  `es_turbo` bit(1) DEFAULT NULL,
  `nivel_entrega` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hora_entrega`
--

CREATE TABLE `hora_entrega` (
  `id` int(11) NOT NULL,
  `etiqueta` varchar(300) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `horarioFlorista` varchar(600) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `soloMX` tinyint(1) NOT NULL,
  `orden` int(11) NOT NULL,
  `hora_corte` int(11) NOT NULL,
  `hora_corte_domingo` int(11) NOT NULL,
  `hora_corte_sabado` int(11) NOT NULL,
  `dia_anticipacion` tinyint(1) NOT NULL,
  `cierra_dia_anticipacion` int(11) NOT NULL,
  `hora_alerta` int(11) NOT NULL,
  `etiqueta_alerta` mediumtext NOT NULL,
  `solo_fecha_especial` tinyint(1) NOT NULL,
  `fecha_especial` date NOT NULL,
  `descripcion` mediumtext NOT NULL,
  `paises` mediumtext NOT NULL,
  `cuentas` mediumtext NOT NULL,
  `hora_comienzo_entrega` int(11) NOT NULL,
  `hora_fin_entrega` int(11) NOT NULL,
  `nota` tinytext NOT NULL,
  `domingo_cerrado` bit(1) NOT NULL,
  `sabado_cerrado` bit(1) NOT NULL,
  `hora_corte_CDMX` int(11) NOT NULL,
  `hora_corte_domingo_CDMX` int(11) NOT NULL,
  `hora_corte_sabado_CDMX` int(11) NOT NULL,
  `fecha_feriado_a` date DEFAULT NULL,
  `fecha_feriado_b` date DEFAULT NULL,
  `type_of_schedule` enum('standard','reduced_hours') DEFAULT NULL,
  `nivel_entrega` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hora_entrega_especial`
--

CREATE TABLE `hora_entrega_especial` (
  `hID` int(11) NOT NULL,
  `hNombre` mediumtext NOT NULL,
  `hHorarios` mediumtext NOT NULL,
  `hActivo` tinyint(1) NOT NULL,
  `hFecha` date NOT NULL,
  `hDescripcion` mediumtext NOT NULL,
  `hPaises` longtext NOT NULL,
  `hCuentas` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `code` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `codigo` varchar(300) NOT NULL,
  `campo` varchar(300) NOT NULL,
  `nombre_objeto` varchar(100) NOT NULL,
  `inicial` varchar(1) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `mensajeTraductor` longtext NOT NULL,
  `inicial_tablas` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `intentos_pago`
--

CREATE TABLE `intentos_pago` (
  `id` int(11) NOT NULL,
  `tipo` varchar(10) NOT NULL DEFAULT '2CO',
  `orden` int(11) DEFAULT NULL,
  `name` varchar(60) NOT NULL,
  `vence` varchar(6) NOT NULL,
  `brand` char(10) NOT NULL,
  `country_code` char(2) NOT NULL,
  `address_zip` varchar(20) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ip` varchar(255) DEFAULT NULL,
  `bin` mediumtext DEFAULT NULL,
  `ultimos` mediumtext DEFAULT NULL,
  `observaciones` mediumtext NOT NULL,
  `bin_json` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ip_info`
--

CREATE TABLE `ip_info` (
  `id` int(11) NOT NULL,
  `ip` mediumtext NOT NULL,
  `info` mediumtext NOT NULL,
  `pedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(191) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `landing_images`
--

CREATE TABLE `landing_images` (
  `landingID` int(11) NOT NULL,
  `landingTitle` mediumtext NOT NULL,
  `landingEtiqueta` mediumtext NOT NULL,
  `landingName` mediumtext NOT NULL,
  `landingStatus` tinyint(1) NOT NULL,
  `landingCode` mediumtext NOT NULL,
  `landingUltimoMinuto` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linea_producto`
--

CREATE TABLE `linea_producto` (
  `id` int(11) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(400) NOT NULL,
  `correo_florista` varchar(200) NOT NULL,
  `fhm_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_mensajes_productos`
--

CREATE TABLE `lista_mensajes_productos` (
  `id` int(11) NOT NULL,
  `id_tipo_lista_mensajes` int(11) NOT NULL,
  `detalle` varchar(255) DEFAULT NULL,
  `orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `llamados_florista`
--

CREATE TABLE `llamados_florista` (
  `id` int(11) NOT NULL,
  `pedido` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `operador` int(11) NOT NULL,
  `llamado` tinyint(1) NOT NULL,
  `comentarios` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `location_types`
--

CREATE TABLE `location_types` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `title` varchar(300) NOT NULL,
  `orden` int(11) NOT NULL,
  `location_info_tag` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lock_pedido`
--

CREATE TABLE `lock_pedido` (
  `id_pedido` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log2co`
--

CREATE TABLE `log2co` (
  `pedido` int(11) NOT NULL,
  `envio_regreso` bit(1) NOT NULL,
  `monto` decimal(18,2) NOT NULL,
  `moneda` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logpagos`
--

CREATE TABLE `logpagos` (
  `id` int(11) NOT NULL,
  `pedido` int(11) DEFAULT NULL,
  `fecha` datetime NOT NULL,
  `mensaje` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `logRemito`
--

CREATE TABLE `logRemito` (
  `id` int(11) NOT NULL,
  `dt` timestamp NOT NULL DEFAULT current_timestamp(),
  `pedido` int(11) NOT NULL,
  `datos` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log_ipn`
--

CREATE TABLE `log_ipn` (
  `id` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  `datos` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `log_modificacion_productos`
--

CREATE TABLE `log_modificacion_productos` (
  `Id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `fecha` date NOT NULL,
  `operador` varchar(100) NOT NULL,
  `pais` varchar(100) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(100) NOT NULL,
  `datos` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mailtesteo`
--

CREATE TABLE `mailtesteo` (
  `parametro` varchar(300) NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios_por_cuenta`
--

CREATE TABLE `medios_por_cuenta` (
  `id` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `medio` int(11) NOT NULL,
  `modulo` enum('todos','barrapagos','compraonline') NOT NULL DEFAULT 'todos'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_fechas_especiales`
--

CREATE TABLE `mensajes_fechas_especiales` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `mensaje` varchar(300) NOT NULL,
  `mensaje_email` varchar(300) NOT NULL,
  `mensaje_contacto` varchar(300) NOT NULL,
  `mensaje_tracking` varchar(300) NOT NULL,
  `mensaje_tracking_pedido` varchar(300) NOT NULL,
  `mensaje_fecha` varchar(300) NOT NULL,
  `mensaje_homezona` varchar(300) NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `resumen_final` tinyint(1) NOT NULL,
  `email_cliente` tinyint(1) NOT NULL,
  `contacto` tinyint(1) NOT NULL,
  `tracking` tinyint(1) NOT NULL,
  `tracking_pedido` tinyint(1) NOT NULL,
  `fecha` tinyint(1) NOT NULL,
  `homezona` tinyint(1) NOT NULL,
  `mes_desde` int(2) UNSIGNED ZEROFILL NOT NULL,
  `dia_desde` int(2) UNSIGNED ZEROFILL NOT NULL,
  `mes_hasta` int(2) UNSIGNED ZEROFILL NOT NULL,
  `dia_hasta` int(2) UNSIGNED ZEROFILL NOT NULL,
  `show_fecha` tinyint(1) NOT NULL,
  `bloqueamedios` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_fechas_especiales_paises`
--

CREATE TABLE `mensajes_fechas_especiales_paises` (
  `id` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `mensaje` int(11) NOT NULL,
  `zonas` varchar(8192) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_operador`
--

CREATE TABLE `mensajes_operador` (
  `mensajeID` int(11) NOT NULL,
  `mensajeHTML` longtext NOT NULL,
  `mensajeDate` datetime NOT NULL,
  `mensajeAsunto` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_operador_relacion`
--

CREATE TABLE `mensajes_operador_relacion` (
  `rID` int(11) NOT NULL,
  `rOperador` int(11) NOT NULL,
  `rLeido` tinyint(1) NOT NULL,
  `rFechaLeido` datetime NOT NULL,
  `rMensaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_paises`
--

CREATE TABLE `mensajes_paises` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `seccion` varchar(25) NOT NULL DEFAULT '',
  `mensaje_top` mediumtext NOT NULL,
  `mensaje_pie` mediumtext NOT NULL,
  `mensaje_izq` mediumtext NOT NULL,
  `mensaje_der` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_paises_i`
--

CREATE TABLE `mensajes_paises_i` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `seccion` varchar(25) NOT NULL DEFAULT '',
  `mensaje_top` mediumtext NOT NULL,
  `mensaje_pie` mediumtext NOT NULL,
  `mensaje_izq` mediumtext NOT NULL,
  `mensaje_der` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_por_horario`
--

CREATE TABLE `mensajes_por_horario` (
  `mens_id` int(11) NOT NULL,
  `mens_mensaje` longtext NOT NULL,
  `mens_mensaje_en` longtext NOT NULL,
  `mens_horario` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `mens_nombre` varchar(100) NOT NULL,
  `mens_activo` tinyint(1) NOT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `etiqueta_mensaje_short` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_por_horario_imagenes`
--

CREATE TABLE `mensajes_por_horario_imagenes` (
  `id` int(11) NOT NULL,
  `mensaje` int(11) NOT NULL,
  `path` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Disparadores `mensajes_por_horario_imagenes`
--
DELIMITER $$
CREATE TRIGGER `mensajes_por_horario_imagenes_insert` BEFORE INSERT ON `mensajes_por_horario_imagenes` FOR EACH ROW UPDATE mensajes_por_horario SET imagen=NEW.path WHERE mens_id=NEW.mensaje
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `mensajes_por_horario_imagenes_update` BEFORE UPDATE ON `mensajes_por_horario_imagenes` FOR EACH ROW UPDATE mensajes_por_horario SET imagen=NEW.path WHERE mens_id=NEW.mensaje
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(191) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(191) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `motivos_anulacion`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `motivos_anulacion` (
`motivoID` bigint(20) unsigned
,`motivoNombre` varchar(191)
,`responsible_cancellation` enum('cliente','proveedor','operador')
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motivos_cambio_producto`
--

CREATE TABLE `motivos_cambio_producto` (
  `id` int(11) NOT NULL,
  `name` mediumtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `motivos_devolucion`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `motivos_devolucion` (
`ID` bigint(20) unsigned
,`Name` varchar(191)
,`responsible_return` enum('cliente','proveedor','operador')
,`email_template_id` bigint(20)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motivos_reprogramacion`
--

CREATE TABLE `motivos_reprogramacion` (
  `motivoID` int(11) NOT NULL,
  `motivoNombre` mediumtext NOT NULL,
  `responsible_return` enum('cliente','proveedor','operador') NOT NULL DEFAULT 'cliente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `motivo_cambio_producto_x_pedido`
--

CREATE TABLE `motivo_cambio_producto_x_pedido` (
  `id` int(11) NOT NULL,
  `motivo_cambio_id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `operador_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multas_catalogo`
--

CREATE TABLE `multas_catalogo` (
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `severidad` enum('Minor','Major','Critical') NOT NULL,
  `tipo_calculo` enum('FIJO','PORCENTAJE') NOT NULL,
  `monto_directo_usd` decimal(10,2) DEFAULT NULL,
  `monto_mas_40_usd` decimal(10,2) DEFAULT NULL,
  `monto_interm_10_40_usd` decimal(10,2) DEFAULT NULL,
  `monto_menos_10_usd` decimal(10,2) DEFAULT NULL,
  `porcentaje` decimal(5,2) DEFAULT NULL,
  `porcentaje_minimo_directo` decimal(10,2) DEFAULT NULL,
  `porcentaje_minimo_interm` decimal(10,2) DEFAULT NULL,
  `aplica_directo` tinyint(1) DEFAULT 1,
  `aplica_mas_40` tinyint(1) DEFAULT 1,
  `aplica_interm_10_40` tinyint(1) DEFAULT 1,
  `aplica_menos_10` tinyint(1) DEFAULT 1,
  `activo` tinyint(1) DEFAULT 1,
  `orden_visual` int(11) DEFAULT 100,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multas_floristas`
--

CREATE TABLE `multas_floristas` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `proveedor_id` int(11) NOT NULL,
  `proveedor_actual_pedido` int(11) DEFAULT NULL,
  `codigo` varchar(20) NOT NULL,
  `motivo` text NOT NULL,
  `monto_usd` decimal(10,2) NOT NULL,
  `monto_mxn` decimal(10,2) NOT NULL,
  `porcentaje` decimal(5,2) DEFAULT NULL,
  `costo_fl_ref` decimal(10,2) DEFAULT NULL,
  `tipo_fl` enum('DIRECTO','MAS_40','INTERM_10_40','MENOS_10') NOT NULL,
  `severidad` enum('Minor','Major','Critical') NOT NULL,
  `operador_id` int(11) NOT NULL,
  `fecha_aplicacion` datetime NOT NULL,
  `estado` enum('Aplicada','Anulada','Disputada') NOT NULL DEFAULT 'Aplicada',
  `anulada_por` int(11) DEFAULT NULL,
  `fecha_anulacion` datetime DEFAULT NULL,
  `motivo_anulacion` text DEFAULT NULL,
  `motivo_anulacion_publico` text DEFAULT NULL,
  `email_enviado` tinyint(1) DEFAULT 0,
  `fecha_envio_email` datetime DEFAULT NULL,
  `thread_gmail_id` varchar(100) DEFAULT NULL,
  `es_auto_detectada` tinyint(1) DEFAULT 0,
  `fecha_deteccion` datetime DEFAULT NULL,
  `revisada_micaela` tinyint(1) DEFAULT 0,
  `revisada_por` int(11) DEFAULT NULL,
  `fecha_revision` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multas_templates`
--

CREATE TABLE `multas_templates` (
  `id` int(11) NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `tipo` enum('APLICAR','ANULAR') NOT NULL,
  `asunto` varchar(200) DEFAULT NULL,
  `cuerpo` text NOT NULL,
  `activo` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `negotiations`
--

CREATE TABLE `negotiations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `folder` varchar(20) NOT NULL,
  `uid` bigint(20) NOT NULL,
  `message_id` varchar(100) NOT NULL,
  `email_subject` varchar(250) NOT NULL,
  `email_from` varchar(255) DEFAULT NULL,
  `email_to` varchar(255) DEFAULT NULL,
  `email_date` datetime NOT NULL,
  `florist_id` int(10) UNSIGNED NOT NULL,
  `rounds` int(11) DEFAULT 0,
  `text_body` text DEFAULT NULL,
  `response` text DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `derivacion_motivo` varchar(255) DEFAULT NULL,
  `response_openai_id` varchar(255) NOT NULL,
  `last_price` decimal(10,2) DEFAULT NULL,
  `precio_ofertado_florista` decimal(10,2) DEFAULT NULL,
  `precio_contraoferta_nuestra` decimal(10,2) DEFAULT NULL,
  `contraoferta_parse_status` tinyint(4) NOT NULL DEFAULT 0,
  `contraoferta_parse_at` datetime NOT NULL,
  `precio_piso_calculado` decimal(10,2) DEFAULT NULL,
  `precio_techo_calculado` decimal(10,2) DEFAULT NULL,
  `precio_contraoferta_anterior` decimal(10,2) DEFAULT NULL,
  `marked_read` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `proveedor_id` int(11) DEFAULT NULL,
  `tipo_negociacion` enum('intermediario','directo') DEFAULT 'intermediario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `negotiations_anterior`
--

CREATE TABLE `negotiations_anterior` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `folder` varchar(20) NOT NULL,
  `uid` bigint(20) NOT NULL,
  `message_id` varchar(100) NOT NULL,
  `email_subject` varchar(250) NOT NULL,
  `email_from` varchar(255) DEFAULT NULL,
  `email_to` varchar(255) DEFAULT NULL,
  `email_date` datetime NOT NULL,
  `florist_id` int(10) UNSIGNED NOT NULL,
  `rounds` int(11) DEFAULT 0,
  `text_body` text DEFAULT NULL,
  `response` text DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `derivacion_motivo` varchar(255) DEFAULT NULL,
  `response_openai_id` varchar(255) NOT NULL,
  `last_price` decimal(10,2) DEFAULT NULL,
  `precio_ofertado_florista` decimal(10,2) DEFAULT NULL,
  `precio_contraoferta_nuestra` decimal(10,2) DEFAULT NULL,
  `contraoferta_parse_status` tinyint(4) NOT NULL DEFAULT 0,
  `contraoferta_parse_at` datetime NOT NULL,
  `precio_piso_calculado` decimal(10,2) DEFAULT NULL,
  `precio_techo_calculado` decimal(10,2) DEFAULT NULL,
  `precio_contraoferta_anterior` decimal(10,2) DEFAULT NULL,
  `marked_read` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `proveedor_id` int(11) DEFAULT NULL,
  `tipo_negociacion` enum('intermediario','directo') DEFAULT 'intermediario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas_florista_manuales`
--

CREATE TABLE `notas_florista_manuales` (
  `id` int(11) NOT NULL,
  `pedido` int(11) NOT NULL,
  `regalo` int(11) NOT NULL,
  `nota` longtext NOT NULL,
  `fecha_nota` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas_florista_patrones_automaticos`
--

CREATE TABLE `notas_florista_patrones_automaticos` (
  `id` int(11) NOT NULL,
  `patrones` varchar(200) NOT NULL,
  `etiqueta_nota` varchar(255) NOT NULL,
  `estado` tinyint(4) NOT NULL,
  `fecha_nota` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notas_internas_pedidos`
--

CREATE TABLE `notas_internas_pedidos` (
  `nota_id` int(11) NOT NULL,
  `nota_pedido` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nota_fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nota_detalle` longtext NOT NULL,
  `nota_operador` int(11) NOT NULL,
  `emailto` varchar(300) NOT NULL,
  `urgente` int(11) NOT NULL,
  `cargada` int(11) NOT NULL,
  `fhm_recordatorio` timestamp NULL DEFAULT NULL,
  `b_recordatorio_leido` tinyint(1) NOT NULL,
  `id_operador_a_recordar` int(11) NOT NULL,
  `id_cambio_producto` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notification_types`
--

CREATE TABLE `notification_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `is_email` tinyint(1) DEFAULT 1,
  `is_whatsapp` tinyint(1) DEFAULT 0,
  `active` tinyint(1) DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Ocacion_en`
--

CREATE TABLE `Ocacion_en` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL DEFAULT '',
  `mostrar_frases` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ocacion_sp`
--

CREATE TABLE `ocacion_sp` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL DEFAULT '',
  `etiqueta` varchar(50) NOT NULL,
  `mostrar_frases` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ocasiones`
--

CREATE TABLE `ocasiones` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `date_begin` date NOT NULL,
  `date_end` date NOT NULL,
  `is_available` tinyint(1) NOT NULL,
  `etiqueta` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `ofertas_proveedor`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `ofertas_proveedor` (
`florist_id` int(11)
,`username` varchar(255)
,`price` decimal(8,2)
,`type_product` varchar(2)
,`size` varchar(1)
,`product` varchar(1)
,`id_zonas` int(6) unsigned zerofill
,`zona_nombre` char(250)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `openai_logs`
--

CREATE TABLE `openai_logs` (
  `id` int(10) UNSIGNED NOT NULL,
  `prompt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `response` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `completion_id` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `usage` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `source` varchar(255) DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operadores`
--

CREATE TABLE `operadores` (
  `id` int(11) NOT NULL,
  `operador` varchar(300) NOT NULL,
  `password` varchar(300) NOT NULL,
  `permisos` int(11) NOT NULL,
  `email` varchar(300) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `dias` int(11) NOT NULL,
  `perdidos` int(11) NOT NULL,
  `ordenes_vistas` longtext NOT NULL,
  `limite_ordenes` int(11) NOT NULL,
  `limite_ordenes_fecha` date NOT NULL,
  `tope_anulacion_pedidos` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operadores_log`
--

CREATE TABLE `operadores_log` (
  `id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `operador` int(11) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `ip` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operatividad`
--

CREATE TABLE `operatividad` (
  `operatividadID` int(11) NOT NULL,
  `operatividadNombre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes_pagadas_proveedor`
--

CREATE TABLE `ordenes_pagadas_proveedor` (
  `id` int(11) NOT NULL,
  `pedido` int(11) NOT NULL,
  `nota` longtext NOT NULL,
  `estado` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `operador` int(11) NOT NULL,
  `medio_pago` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_issues`
--

CREATE TABLE `order_issues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `type_issue_id` int(11) NOT NULL,
  `issue_description` varchar(191) NOT NULL,
  `solved_description` varchar(191) NOT NULL,
  `solved` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `solved_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_notes`
--

CREATE TABLE `order_notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `note` text NOT NULL,
  `private` tinyint(1) NOT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deleted_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `page_translate`
--

CREATE TABLE `page_translate` (
  `id` int(11) NOT NULL,
  `cast_page_name` varchar(200) DEFAULT NULL,
  `eng_page_name` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos_accounts`
--

CREATE TABLE `pagos_accounts` (
  `id` int(11) NOT NULL,
  `codigo` varchar(20) NOT NULL,
  `estado` enum('activo','creado','anulado') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `client_id` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret_id` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `env` enum('live','sandbox') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `json_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos_intentos`
--

CREATE TABLE `pagos_intentos` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) DEFAULT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `proveedor_pago` enum('STRIPE','BRAINTREE','2CHECKOUT','DLOCALGO') NOT NULL,
  `estado` enum('APROBADO','RECHAZADO') NOT NULL DEFAULT 'RECHAZADO' COMMENT 'Estado del intento de pago',
  `monto` decimal(10,2) DEFAULT NULL,
  `moneda` varchar(3) DEFAULT NULL,
  `error_code` varchar(100) DEFAULT NULL,
  `decline_code` varchar(100) DEFAULT NULL,
  `error_message` text DEFAULT NULL,
  `error_type` varchar(50) DEFAULT NULL,
  `error_param` varchar(100) DEFAULT NULL,
  `http_status` int(11) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `payment_method_id` varchar(255) DEFAULT NULL,
  `requiere_3ds` tinyint(1) DEFAULT 0 COMMENT 'Indica si se requirió autenticación 3D Secure',
  `authentication_method` varchar(50) DEFAULT NULL COMMENT 'Método de autenticación usado (ej: 3d_secure, none)',
  `raw_response` text DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `etiqueta_codigo` varchar(100) DEFAULT NULL COMMENT 'Código de etiqueta usada (ej: BRAIN_ERROR_card_declined, stripe_code_card_declined)',
  `mensaje_cliente` text DEFAULT NULL COMMENT 'Mensaje traducido que vio el cliente',
  `idioma_cliente` varchar(10) DEFAULT NULL COMMENT 'Idioma del cliente: castellano o ingles (default: castellano)',
  `fecha_intento` datetime NOT NULL COMMENT 'Fecha del intento de pago (aprobado o rechazado)',
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla para loguear intentos de pago (aprobados y rechazados). Si falla el insert, NO afecta el flujo de pago.';

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `paises`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `paises` (
`id_pais` int(6) unsigned zerofill
,`alias_en` varchar(60)
,`alias_es` varchar(60)
,`alias` varchar(100)
,`nombre` varchar(191)
,`correo` varchar(191)
,`activo` varchar(2)
,`bandera` varchar(50)
,`mensaje` longtext
,`mensaje_e` longtext
,`entregadeflores022` varchar(191)
,`correo_florista` varchar(191)
,`correo_florista_estado` int(11)
,`toma_productos_pais` int(11)
,`toma_productos_zona` int(11)
,`diferencia_horaria` int(11)
,`cierra_sabado` int(11)
,`cierra_domingo` int(11)
,`anio_inicio_promedios` int(11)
,`country_code` varchar(191)
,`24timezones_city` varchar(191)
,`utc_offset` int(11)
,`entregan_en_el_mismo_dia` varchar(256)
,`porcentaje_canada` decimal(5,2)
,`porcentaje_canada_original` decimal(10,2)
,`solo_una_zona` int(11)
,`id_moneda_local` int(11)
,`nombre_ingles` varchar(200)
,`nombre_espaniol` varchar(200)
,`idioma_admin` int(11)
,`json_business_hours` text
,`two_letters_code` varchar(2)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PaisesNombres`
--

CREATE TABLE `PaisesNombres` (
  `clave` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `id_pais` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `nombre` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paisesporcostofecha`
--

CREATE TABLE `paisesporcostofecha` (
  `id` int(11) NOT NULL,
  `costo` int(11) NOT NULL,
  `pais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises_cliente`
--

CREATE TABLE `paises_cliente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `name` mediumtext DEFAULT NULL,
  `nombre_ingles` varchar(300) NOT NULL,
  `nombre_espaniol` varchar(300) NOT NULL,
  `code` varchar(3) NOT NULL,
  `code_phone` char(3) NOT NULL,
  `top` tinyint(1) NOT NULL,
  `telcode` varchar(20) DEFAULT NULL,
  `bandera` varchar(50) DEFAULT NULL,
  `code3` varchar(10) DEFAULT NULL,
  `code2co` varchar(255) NOT NULL,
  `name_es` varchar(150) GENERATED ALWAYS AS (json_unquote(json_extract(`name`,'$.es'))) VIRTUAL,
  `name_en` varchar(150) GENERATED ALWAYS AS (json_unquote(json_extract(`name`,'$.en'))) VIRTUAL,
  `name_pr` varchar(150) GENERATED ALWAYS AS (json_unquote(json_extract(`name`,'$.pr'))) VIRTUAL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `paises_new`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `paises_new` (
`id_pais` int(6) unsigned zerofill
,`alias_en` varchar(60)
,`alias_es` varchar(60)
,`alias` varchar(100)
,`nombre` varchar(191)
,`correo` varchar(191)
,`activo` varchar(2)
,`bandera` varchar(50)
,`mensaje` longtext
,`mensaje_e` longtext
,`entregadeflores022` varchar(191)
,`correo_florista` varchar(191)
,`correo_florista_estado` int(11)
,`toma_productos_pais` int(11)
,`toma_productos_zona` int(11)
,`diferencia_horaria` int(11)
,`cierra_sabado` int(11)
,`cierra_domingo` int(11)
,`anio_inicio_promedios` int(11)
,`country_code` varchar(191)
,`24timezones_city` varchar(191)
,`utc_offset` int(11)
,`entregan_en_el_mismo_dia` varchar(256)
,`porcentaje_canada` decimal(5,2)
,`porcentaje_canada_original` decimal(10,2)
,`solo_una_zona` int(11)
,`id_moneda_local` int(11)
,`nombre_ingles` varchar(200)
,`nombre_espaniol` varchar(200)
,`idioma_admin` int(11)
,`json_business_hours` text
,`two_letters_code` varchar(2)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises_por_cuenta`
--

CREATE TABLE `paises_por_cuenta` (
  `id` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises_por_operador`
--

CREATE TABLE `paises_por_operador` (
  `id` int(11) NOT NULL,
  `operador` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `sitio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises_top`
--

CREATE TABLE `paises_top` (
  `id` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parametros`
--

CREATE TABLE `parametros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `valor` varchar(2048) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paused_orders`
--

CREATE TABLE `paused_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `paused` tinyint(1) NOT NULL DEFAULT 1,
  `reason` varchar(191) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `observation` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paypal_accounts`
--

CREATE TABLE `paypal_accounts` (
  `accID` int(11) NOT NULL,
  `accUsername` mediumtext NOT NULL,
  `accPassword` mediumtext NOT NULL,
  `accSignature` mediumtext NOT NULL,
  `accStatus` tinyint(1) NOT NULL,
  `accComments` mediumtext NOT NULL,
  `medio_de_pago` int(11) NOT NULL,
  `client_id` varchar(200) NOT NULL,
  `secret_id` varchar(200) NOT NULL,
  `env` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paypal_accounts_cuentas`
--

CREATE TABLE `paypal_accounts_cuentas` (
  `ppID` int(11) NOT NULL,
  `ppCuenta` int(11) NOT NULL,
  `ppPaypal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL,
  `fhm_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha` varchar(22) NOT NULL DEFAULT '',
  `cliente` int(6) NOT NULL DEFAULT 0,
  `destinatario` int(6) NOT NULL DEFAULT 0,
  `tarjeta` varchar(20) NOT NULL DEFAULT '',
  `monto` decimal(6,2) NOT NULL DEFAULT 0.00,
  `numero` varchar(30) NOT NULL DEFAULT '',
  `expira` varchar(10) NOT NULL DEFAULT '',
  `nombretarjeta` varchar(50) NOT NULL DEFAULT '',
  `digito` varchar(50) NOT NULL DEFAULT '',
  `tarjeta_modo` varchar(10) NOT NULL DEFAULT '',
  `adicional01` int(6) NOT NULL DEFAULT 0,
  `a01_precio` decimal(6,2) NOT NULL DEFAULT 0.00,
  `a01_t` varchar(600) NOT NULL DEFAULT '',
  `adicional02` int(6) NOT NULL DEFAULT 0,
  `a02_precio` decimal(6,2) NOT NULL DEFAULT 0.00,
  `a02_t` varchar(600) NOT NULL DEFAULT '',
  `adicional03` int(6) NOT NULL DEFAULT 0,
  `a03_precio` decimal(6,2) NOT NULL DEFAULT 0.00,
  `a03_t` varchar(600) NOT NULL DEFAULT '',
  `adicional04` int(6) NOT NULL DEFAULT 0,
  `a04_precio` decimal(6,2) NOT NULL DEFAULT 0.00,
  `a04_t` varchar(600) NOT NULL DEFAULT '',
  `adicional05` int(6) NOT NULL DEFAULT 0,
  `a05_precio` decimal(6,2) NOT NULL DEFAULT 0.00,
  `a05_t` varchar(600) NOT NULL DEFAULT '',
  `ocacion_elegida_id` int(11) NOT NULL,
  `observaciones` mediumtext NOT NULL,
  `mensaje` mediumtext NOT NULL,
  `firma` varchar(350) NOT NULL DEFAULT '',
  `r01` int(6) NOT NULL DEFAULT 0,
  `r01p` decimal(6,2) NOT NULL DEFAULT 0.00,
  `r01t` varchar(600) NOT NULL DEFAULT '',
  `r01c` varchar(120) NOT NULL DEFAULT '',
  `r02` varchar(6) NOT NULL DEFAULT '',
  `r02p` decimal(6,2) NOT NULL DEFAULT 0.00,
  `r02t` varchar(600) NOT NULL DEFAULT '',
  `r02c` varchar(120) NOT NULL DEFAULT '',
  `r03` varchar(6) NOT NULL DEFAULT '',
  `r03p` decimal(6,2) NOT NULL DEFAULT 0.00,
  `r03t` varchar(600) NOT NULL DEFAULT '',
  `r03c` varchar(120) NOT NULL DEFAULT '',
  `r04` varchar(6) NOT NULL DEFAULT '0.00',
  `r04p` varchar(6) NOT NULL DEFAULT '',
  `r04t` varchar(600) NOT NULL DEFAULT '',
  `r04c` varchar(120) NOT NULL DEFAULT '',
  `r05` varchar(6) NOT NULL DEFAULT '',
  `r05p` decimal(6,2) NOT NULL DEFAULT 0.00,
  `r05t` varchar(600) NOT NULL DEFAULT '',
  `r05c` varchar(120) NOT NULL DEFAULT '',
  `r01_personalizado` int(11) DEFAULT NULL,
  `r02_personalizado` int(11) DEFAULT NULL,
  `r03_personalizado` int(11) DEFAULT NULL,
  `r04_personalizado` int(11) DEFAULT NULL,
  `r05_personalizado` int(11) DEFAULT NULL,
  `r01c_personalizado` mediumtext DEFAULT NULL,
  `r02c_personalizado` mediumtext DEFAULT NULL,
  `r03c_personalizado` mediumtext DEFAULT NULL,
  `r04c_personalizado` mediumtext DEFAULT NULL,
  `r05c_personalizado` mediumtext DEFAULT NULL,
  `r01c_personalizado_florista` mediumtext DEFAULT NULL,
  `r02c_personalizado_florista` mediumtext DEFAULT NULL,
  `r03c_personalizado_florista` mediumtext DEFAULT NULL,
  `r04c_personalizado_florista` mediumtext DEFAULT NULL,
  `r05c_personalizado_florista` mediumtext DEFAULT NULL,
  `fecha_d` varchar(400) NOT NULL DEFAULT '',
  `estado` varchar(25) NOT NULL DEFAULT '',
  `flete` decimal(6,2) NOT NULL DEFAULT 0.00,
  `bonificacion` decimal(6,2) NOT NULL DEFAULT 0.00,
  `id_bonificacion` int(11) NOT NULL DEFAULT 0,
  `total` int(6) NOT NULL DEFAULT 0,
  `correo_florista` mediumtext NOT NULL,
  `afiliado` int(6) NOT NULL DEFAULT 0,
  `liquidaafiliado` char(2) NOT NULL DEFAULT '',
  `id_cuenta` int(11) DEFAULT NULL,
  `cod_moneda` varchar(12) NOT NULL,
  `n_cotizacion` float NOT NULL,
  `n_rebaja` float NOT NULL,
  `fecha_mail_cliente` datetime DEFAULT NULL COMMENT 'fecha de envio de mail al  cliente',
  `plata_conversion` varchar(60) NOT NULL,
  `email_recuperacion_perdido` datetime NOT NULL,
  `email_recuperacion_perdido_times` int(11) NOT NULL,
  `monto_moneda_local` varchar(100) NOT NULL,
  `moneda_local` varchar(300) NOT NULL,
  `horario_entrega` int(11) NOT NULL,
  `warning_horario` longtext NOT NULL,
  `hash` varchar(300) NOT NULL,
  `hash_client` varchar(5) NOT NULL,
  `hash_enviada` varchar(300) NOT NULL,
  `r01cf` varchar(300) NOT NULL,
  `r02cf` varchar(300) NOT NULL,
  `r03cf` varchar(300) NOT NULL,
  `r04cf` varchar(300) NOT NULL,
  `r05cf` varchar(300) NOT NULL,
  `copaypal` tinyint(1) NOT NULL,
  `costo_adicional_horario` decimal(10,2) NOT NULL,
  `id_costo_horario` int(11) NOT NULL,
  `date_entrega` date NOT NULL,
  `florista_costo` tinyint(1) NOT NULL,
  `bloqueada` tinyint(1) NOT NULL,
  `directo` tinyint(1) NOT NULL,
  `nopagar` int(11) NOT NULL,
  `noauto` tinyint(1) NOT NULL,
  `enviado_remito_florista` datetime NOT NULL,
  `enviado_remito_duenio` datetime NOT NULL,
  `zonachile` varchar(300) NOT NULL,
  `user_ip` varchar(300) NOT NULL,
  `anonimo` tinyint(1) NOT NULL,
  `pptoken` varchar(400) NOT NULL,
  `remito_token` varchar(255) NOT NULL,
  `bin` int(11) NOT NULL,
  `enviado_felicitacion` datetime NOT NULL,
  `operadores` mediumtext NOT NULL,
  `paypalData` mediumtext DEFAULT NULL,
  `ocasion` int(11) NOT NULL,
  `infoHistorial` longtext DEFAULT NULL,
  `llamado_florista` tinyint(1) NOT NULL,
  `llamado_florista_comments` varchar(100) NOT NULL,
  `tracking_fedex` tinyint(1) NOT NULL,
  `impuntual` tinyint(1) NOT NULL,
  `impuntual_comments` mediumtext NOT NULL,
  `r01_personalized_text` mediumtext NOT NULL,
  `r02_personalized_text` mediumtext NOT NULL,
  `r03_personalized_text` mediumtext NOT NULL,
  `r04_personalized_text` mediumtext NOT NULL,
  `r05_personalized_text` mediumtext NOT NULL,
  `paypalAccount` int(11) NOT NULL,
  `AB` varchar(50) NOT NULL,
  `telefonoigual` int(11) DEFAULT NULL,
  `facturar` bit(1) DEFAULT NULL,
  `resultado_factura` varchar(1000) DEFAULT NULL,
  `medio_de_pago` varchar(50) DEFAULT NULL,
  `fecha_medio` datetime DEFAULT NULL,
  `opcionMensajeEspecial` varchar(2048) NOT NULL,
  `id_lista_mensajes_productos01` int(11) NOT NULL,
  `id_lista_mensajes_productos02` int(11) NOT NULL,
  `id_lista_mensajes_productos03` int(11) NOT NULL,
  `id_lista_mensajes_productos04` int(11) NOT NULL,
  `id_lista_mensajes_productos05` int(11) NOT NULL,
  `ocultar` tinyint(1) NOT NULL,
  `medio_pago_id` int(10) UNSIGNED DEFAULT 0,
  `whatsapp_recuperation` datetime DEFAULT NULL,
  `whatsapp_recuperation_times` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name_user` varchar(191) DEFAULT NULL,
  `fecha_factura_manual` date DEFAULT NULL,
  `borrar` int(11) DEFAULT NULL,
  `moneda_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `color_rosas_1` tinyint(3) UNSIGNED DEFAULT 0,
  `color_rosas_2` tinyint(3) UNSIGNED DEFAULT 0,
  `color_rosas_centro_1` tinyint(3) UNSIGNED DEFAULT 0,
  `color_rosas_centro_2` tinyint(3) UNSIGNED DEFAULT 0,
  `r01_opcion_elegida` varchar(2) DEFAULT NULL,
  `r02_opcion_elegida` varchar(2) DEFAULT NULL,
  `r03_opcion_elegida` varchar(2) DEFAULT NULL,
  `r04_opcion_elegida` varchar(2) DEFAULT NULL,
  `r05_opcion_elegida` varchar(2) DEFAULT NULL,
  `estado_backend_final_id` int(6) DEFAULT NULL,
  `estadoBackendID` int(11) UNSIGNED DEFAULT 25,
  `direccionInfo` text DEFAULT NULL,
  `turbo` bit(1) DEFAULT NULL,
  `mensajesUsuario` text DEFAULT NULL,
  `A/B` tinytext DEFAULT NULL,
  `json_extradata` text DEFAULT NULL,
  `r01_personalizacion` mediumtext DEFAULT NULL,
  `r02_personalizacion` mediumtext DEFAULT NULL,
  `r03_personalizacion` mediumtext DEFAULT NULL,
  `r04_personalizacion` mediumtext DEFAULT NULL,
  `r05_personalizacion` mediumtext DEFAULT NULL,
  `a01_personalizacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `a02_personalizacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `a03_personalizacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `a04_personalizacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `a05_personalizacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Disparadores `pedidos`
--
DELIMITER $$
CREATE TRIGGER `pedidos_INSERT` AFTER INSERT ON `pedidos` FOR EACH ROW insert into lock_pedido (id_pedido)
	values (NEW.id)
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `pedidos_INSERT_estados` AFTER INSERT ON `pedidos` FOR EACH ROW BEGIN
  IF ifnull(new.estadoBackendID, 0) <> 0 THEN
    INSERT INTO estados_por_pedido (epp_pedido, epp_estado_backend, epp_operador, final, debug)
    SELECT p.id, p.estadoBackendID, 0, 1, concat('pedidos_INSERT_estados ',  CURRENT_USER())
    FROM pedidos p
    LEFT JOIN estados_por_pedido e ON e.epp_pedido = p.id AND e.final = 1 AND e.epp_estado_backend = p.estadoBackendID
    WHERE p.id = new.id
    AND e.epp_pedido IS NULL;
  END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `pedidos_UPDATE_estados` AFTER UPDATE ON `pedidos` FOR EACH ROW BEGIN
  IF ifnull(new.estadoBackendID, 0) <> 0 AND new.estadoBackendID <> ifnull(old.estadoBackendID, 0) AND NOT EXISTS (
    SELECT *
    FROM estados_por_pedido e 
    WHERE e.epp_pedido = new.id
    AND e.final = 1
    AND e.epp_estado_backend = new.estadoBackendID
  ) THEN
    UPDATE estados_por_pedido 
    SET final = 0
    WHERE epp_pedido = new.id
    AND final = 1;

    INSERT INTO estados_por_pedido (epp_pedido, epp_estado_backend, epp_operador, final, debug)
    VALUES (new.id, new.estadoBackendID, 0, 1, concat('pedidos_UPDATE_estados ',  CURRENT_USER()));
  END IF;

  IF new.estadoBackendID in (17, 19, 21, 22, 28, 29, 32, 34, 38, 39, 6) THEN
    UPDATE destinatarios d
    SET d.ultima_compra = new.fhm_creacion
    WHERE d.id = new.destinatario
    AND (d.ultima_compra IS NULL OR d.ultima_compra < new.fhm_creacion);
  END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `pedidos_hash_client_trigger` BEFORE INSERT ON `pedidos` FOR EACH ROW BEGIN
    DECLARE code VARCHAR(5);
    DECLARE exists_flag INT DEFAULT 1;

    WHILE exists_flag DO
        SET code = UPPER(SUBSTR(UUID(), 1, 5));

        -- Verificar existencia solo dentro de los pedidos del mismo cliente
        SELECT COUNT(*) INTO exists_flag
        FROM pedidos
        WHERE hash_client = code 
        AND cliente = NEW.cliente 
        LIMIT 1;

    END WHILE;

    SET NEW.hash_client = code;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_comentarios`
--

CREATE TABLE `pedidos_comentarios` (
  `id` int(11) NOT NULL,
  `de_comentario` mediumtext NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `de_observaciones` mediumtext NOT NULL,
  `usuario` mediumtext NOT NULL,
  `fh_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `pedidos_costos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `pedidos_costos` (
`id_pedido` int(7) unsigned zerofill
,`date_entrega` date
,`id_pais` int(11)
,`id_zona_padre` int(6) unsigned zerofill
,`id_zonas` int(6) unsigned zerofill
,`id_productos` int(6)
,`descripcionTamanio` varchar(500)
,`Costo` decimal(10,2)
,`CostoLocal` decimal(10,2)
,`proveedor` int(11)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `pedidos_costos_paso_1`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `pedidos_costos_paso_1` (
`id_pedido` int(7) unsigned zerofill
,`date_entrega` date
,`id_pais` int(11)
,`id_zona_padre` int(6) unsigned zerofill
,`id_zonas` int(6) unsigned zerofill
,`id_productos` int(6)
,`descripcionTamanio` varchar(500)
,`Costo` decimal(10,2)
,`CostoLocal` decimal(10,2)
,`proveedor` int(11)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_folmx`
--

CREATE TABLE `pedidos_folmx` (
  `id` int(11) NOT NULL,
  `pedido` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_sin_proveedor`
--

CREATE TABLE `pedidos_sin_proveedor` (
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `zone_aprox_google_map` varchar(500) DEFAULT NULL,
  `km` int(11) DEFAULT NULL,
  `tipo_proveedor` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_sin_proveedor_2km`
--

CREATE TABLE `pedidos_sin_proveedor_2km` (
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `zone_aprox_google_map` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_sin_proveedor_50km`
--

CREATE TABLE `pedidos_sin_proveedor_50km` (
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `zone_aprox_google_map` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_trx`
--

CREATE TABLE `pedidos_trx` (
  `id` int(11) NOT NULL,
  `pedido_trx` varchar(255) NOT NULL,
  `paypal_trx` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido_items`
--

CREATE TABLE `pedido_items` (
  `id_pedido` int(11) NOT NULL,
  `item` int(11) NOT NULL,
  `tipo` enum('producto','adicional','','') DEFAULT NULL,
  `id_item` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `token` varchar(512) DEFAULT NULL,
  `precio_unitario` decimal(6,2) DEFAULT NULL,
  `nombre_tamanio` varchar(600) DEFAULT NULL,
  `opcion_elegida` varchar(2) DEFAULT NULL,
  `color` varchar(120) NOT NULL,
  `color_florista` varchar(300) NOT NULL,
  `cantidad_personalizadas` tinyint(4) NOT NULL,
  `color_personalizadas` varchar(120) NOT NULL,
  `color_florista_personalizadas` varchar(300) NOT NULL,
  `texto_personalizacion` mediumtext NOT NULL,
  `id_mensaje` int(11) NOT NULL,
  `json_personalizacion` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pepe`
--

CREATE TABLE `pepe` (
  `id_pais` int(11) NOT NULL,
  `Pais` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `id_zonas` int(6) NOT NULL,
  `Zona` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_productos` int(6) NOT NULL,
  `Producto` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tamanio` bigint(20) NOT NULL,
  `descripcion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion_ingles` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidad_ventas` int(11) NOT NULL,
  `id_pedido` int(7) UNSIGNED ZEROFILL NOT NULL,
  `date_entrega` date NOT NULL,
  `Costo` decimal(10,2) NOT NULL,
  `id_proveedor` int(11) DEFAULT NULL,
  `proveedorNombre` varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos_items`
--

CREATE TABLE `permisos_items` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `hijo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos_por_operador`
--

CREATE TABLE `permisos_por_operador` (
  `id` int(11) NOT NULL,
  `operador` int(11) NOT NULL,
  `permiso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(400) NOT NULL,
  `guard_name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pie_textos`
--

CREATE TABLE `pie_textos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `espanol` longtext NOT NULL,
  `ingles` longtext NOT NULL,
  `portugues` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `possible_attackers`
--

CREATE TABLE `possible_attackers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip` varchar(191) DEFAULT NULL,
  `fingerprint` varchar(191) DEFAULT NULL,
  `times` int(11) NOT NULL DEFAULT 0,
  `blocked` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precios`
--

CREATE TABLE `precios` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_cuenta` int(11) DEFAULT NULL,
  `id_pais` int(11) DEFAULT NULL,
  `id_zona` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `codigo` char(12) NOT NULL DEFAULT '',
  `n_valor` tinyint(6) DEFAULT 0,
  `n_porcentaje` float DEFAULT 0,
  `n_porcentaje_B` float NOT NULL DEFAULT 0,
  `etiqueta_copete_B` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precios_por_pedido`
--

CREATE TABLE `precios_por_pedido` (
  `id` int(11) NOT NULL,
  `pedido` int(6) UNSIGNED ZEROFILL NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `operador` int(11) NOT NULL,
  `nota` longtext NOT NULL,
  `proveedor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precio_maximo_por_pedido`
--

CREATE TABLE `precio_maximo_por_pedido` (
  `id` int(11) NOT NULL,
  `pedido` int(7) UNSIGNED ZEROFILL NOT NULL,
  `precio_reserva` decimal(10,2) NOT NULL,
  `precio_reserva_local` decimal(10,2) NOT NULL,
  `precio_dls` decimal(10,2) NOT NULL,
  `precio_local` decimal(10,2) NOT NULL,
  `flete` decimal(10,2) DEFAULT NULL,
  `flete_local` decimal(10,2) DEFAULT NULL,
  `distancia` decimal(4,2) DEFAULT NULL,
  `distancia_automatica` decimal(10,2) DEFAULT NULL,
  `nota` longtext NOT NULL,
  `operador` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp(),
  `proveedor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `price_lists`
--

CREATE TABLE `price_lists` (
  `id` int(11) NOT NULL,
  `country_id` int(10) UNSIGNED ZEROFILL NOT NULL,
  `code` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `agreement_price_list_id` int(11) DEFAULT NULL COMMENT 'ID de lista de precios vinculada (SansonListaID)',
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_producto_principal` int(11) DEFAULT NULL,
  `nombre` varchar(250) NOT NULL DEFAULT '',
  `precio_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `zonas` mediumtext NOT NULL,
  `ocasion` mediumtext NOT NULL,
  `rubro` mediumtext NOT NULL,
  `foto` varchar(50) NOT NULL DEFAULT '',
  `destacado` char(2) NOT NULL DEFAULT '',
  `pais` int(6) NOT NULL DEFAULT 0,
  `condolencias` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `diamadre` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_f` char(2) NOT NULL DEFAULT '',
  `descripcion` mediumtext NOT NULL,
  `a_color` varchar(15) NOT NULL DEFAULT '',
  `foto_grande` varchar(100) NOT NULL DEFAULT '',
  `foto_grande_w` int(11) DEFAULT NULL,
  `foto_grande_h` int(11) DEFAULT NULL,
  `foto_media` varchar(100) NOT NULL DEFAULT '',
  `foto_chica` varchar(100) NOT NULL DEFAULT '',
  `foto_chica_2` varchar(255) NOT NULL,
  `foto_media_listado` varchar(200) NOT NULL,
  `foto_media_listado2` varchar(100) DEFAULT NULL,
  `foto_media_listado_floresa` varchar(200) NOT NULL,
  `foto_media_listado_floresa2` varchar(200) DEFAULT NULL,
  `foto_extra_chica` varchar(200) NOT NULL,
  `descri_ch` varchar(500) NOT NULL DEFAULT '',
  `descri_m` varchar(500) NOT NULL DEFAULT '',
  `descri_g` varchar(500) NOT NULL DEFAULT '',
  `codigo_int` varchar(100) NOT NULL DEFAULT '',
  `costo_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `pie` mediumtext NOT NULL,
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `sincolor` char(2) NOT NULL DEFAULT '',
  `categorias` mediumtext NOT NULL,
  `ocasiones` mediumtext NOT NULL,
  `nota_interna` mediumtext NOT NULL,
  `nota_florista` mediumtext NOT NULL,
  `nota_florista_2` mediumtext NOT NULL,
  `nota_florista_3` mediumtext NOT NULL,
  `muestro_foto_al_florista` char(1) NOT NULL,
  `envio_automatico_al_florista` char(1) NOT NULL,
  `correo_florista` varchar(200) NOT NULL,
  `id_horario_entrega` int(11) NOT NULL DEFAULT 1,
  `omite_imagen_horario` bit(1) NOT NULL,
  `corregidoingles` tinyint(1) NOT NULL,
  `corregido_fecha` datetime NOT NULL,
  `diferenciaprd` tinyint(1) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `corregir_portugues` tinyint(1) NOT NULL,
  `tipo_pie` int(11) NOT NULL,
  `ftd` int(11) NOT NULL,
  `jacquelines` tinyint(1) NOT NULL,
  `teleflora` tinyint(1) NOT NULL,
  `traducido_lfdm` tinyint(1) NOT NULL,
  `nodisponible` tinyint(1) NOT NULL,
  `tags` longtext NOT NULL,
  `tags_e` longtext NOT NULL,
  `tags_ant` longtext NOT NULL,
  `tags_e_ant` longtext NOT NULL,
  `producto_oculto` tinyint(1) NOT NULL,
  `personalizar_letras` tinyint(1) NOT NULL,
  `personalizar_letras_cantidad` int(11) NOT NULL,
  `personalizar_numeros` tinyint(1) NOT NULL,
  `personalizar_numeros_cantidad` int(11) NOT NULL,
  `personalizar_mixto` tinyint(1) NOT NULL,
  `personalizar_mixto_cantidad` int(11) NOT NULL,
  `no_personalizar` tinyint(1) NOT NULL,
  `no_personalizar_centro` tinyint(1) NOT NULL,
  `A/B` varchar(50) NOT NULL,
  `fecha_alta` timestamp NULL DEFAULT current_timestamp(),
  `cantidad_ventas` int(11) NOT NULL,
  `porcentaje_drop_inferior` int(11) NOT NULL,
  `porcentaje_drop_superior` int(11) NOT NULL,
  `foto_mejorada_con_ai` char(1) DEFAULT NULL,
  `b_newsletter` bit(1) NOT NULL,
  `id_tipo_mensaje_producto` int(11) NOT NULL,
  `id_linea_producto` smallint(6) NOT NULL,
  `orden_producto` int(11) NOT NULL DEFAULT 9999,
  `orden_producto2` int(11) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `no_permite_cupon` tinyint(1) DEFAULT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0,
  `descuento_ch` decimal(4,2) DEFAULT 0.00,
  `descuento_m` decimal(4,2) DEFAULT 0.00,
  `descuento_g` decimal(4,2) DEFAULT 0.00,
  `reviews_avg_value` decimal(6,2) DEFAULT NULL,
  `reviews_count` int(11) DEFAULT NULL,
  `configuracion_personalizacion` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `busqueda` longtext NOT NULL,
  `busqueda_e` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_comprados`
--

CREATE TABLE `productos_comprados` (
  `id_producto` int(6) NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_df`
--

CREATE TABLE `productos_df` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL,
  `codigo` varchar(100) NOT NULL DEFAULT '',
  `nombre` varchar(250) NOT NULL DEFAULT '',
  `precio` decimal(6,2) NOT NULL DEFAULT 0.00,
  `descripcion` mediumtext NOT NULL,
  `categorias` mediumtext NOT NULL,
  `ocasiones` mediumtext NOT NULL,
  `op1` varchar(150) NOT NULL DEFAULT '',
  `pre1` varchar(50) NOT NULL DEFAULT '',
  `op2` varchar(150) NOT NULL DEFAULT '',
  `pre2` varchar(50) NOT NULL DEFAULT '',
  `op3` varchar(150) NOT NULL DEFAULT '',
  `pre3` varchar(50) NOT NULL DEFAULT '',
  `leyenda` longtext NOT NULL,
  `personalizable` char(2) NOT NULL DEFAULT 'si',
  `alternativas` char(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_e`
--

CREATE TABLE `productos_e` (
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(250) NOT NULL DEFAULT '',
  `precio_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `zonas` mediumtext NOT NULL,
  `ocasion` mediumtext NOT NULL,
  `rubro` mediumtext NOT NULL,
  `foto` varchar(50) NOT NULL DEFAULT '',
  `destacado` char(2) NOT NULL DEFAULT '',
  `pais` int(6) NOT NULL DEFAULT 0,
  `condolencias` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `diamadre` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_f` char(2) NOT NULL DEFAULT '',
  `descripcion` mediumtext NOT NULL,
  `a_color` varchar(15) NOT NULL DEFAULT '',
  `foto_grande` varchar(50) NOT NULL DEFAULT '',
  `foto_chica` varchar(50) NOT NULL DEFAULT '',
  `foto_chica_2` varchar(255) NOT NULL,
  `foto_media_listado` mediumtext NOT NULL,
  `foto_media_listado_floresa` mediumtext NOT NULL,
  `foto_extra_chica` mediumtext NOT NULL,
  `descri_ch` varchar(50) NOT NULL DEFAULT '',
  `descri_m` varchar(50) NOT NULL DEFAULT '',
  `descri_g` varchar(50) NOT NULL DEFAULT '',
  `codigo_int` varchar(20) NOT NULL DEFAULT '',
  `costo_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `pie` mediumtext NOT NULL,
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `sincolor` char(2) NOT NULL DEFAULT '',
  `categorias` mediumtext NOT NULL,
  `ocasiones` mediumtext NOT NULL,
  `nota_interna` mediumtext NOT NULL,
  `nota_florista` mediumtext NOT NULL,
  `diferenciaprd` tinyint(1) NOT NULL,
  `tipo_pie` int(11) NOT NULL,
  `tags` longtext NOT NULL,
  `tags_ant` longtext NOT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_fotos`
--

CREATE TABLE `productos_fotos` (
  `id` int(11) NOT NULL,
  `producto` int(11) NOT NULL,
  `tamano` int(11) NOT NULL,
  `foto` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `orden` int(11) DEFAULT NULL,
  `tipo_imagen` varchar(50) NOT NULL DEFAULT 'PRINCIPAL',
  `version` tinyint(4) DEFAULT NULL,
  `reprocesar` bit(1) NOT NULL,
  `imagen` varchar(300) DEFAULT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_ftous_desactivados`
--

CREATE TABLE `productos_ftous_desactivados` (
  `id` int(11) NOT NULL,
  `producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `productos_ingles_vst`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `productos_ingles_vst` (
`id_productos` int(6) unsigned zerofill
,`nombre` varchar(250)
,`id_producto_principal` int(11)
,`precio_ch` decimal(6,2)
,`precio_m` decimal(6,2)
,`precio_g` decimal(6,2)
,`zonas` mediumtext
,`ocasion` mediumtext
,`rubro` mediumtext
,`foto` varchar(50)
,`destacado` char(2)
,`pais` int(6)
,`condolencias` char(2)
,`nacimiento` char(2)
,`aniversario` char(2)
,`bodas` char(2)
,`cumpleannos` char(2)
,`romance` char(2)
,`agradecimiento` char(2)
,`diamadre` char(2)
,`rosas` char(2)
,`girasoles` char(2)
,`surtidas` char(2)
,`desayunos` char(2)
,`margaritas` char(2)
,`frutas` char(2)
,`asucenas` char(2)
,`lirios` char(2)
,`arreglos_f` char(2)
,`descripcion` mediumtext
,`a_color` varchar(15)
,`foto_grande` varchar(100)
,`foto_grande_w` int(11)
,`foto_grande_h` int(11)
,`foto_media` varchar(100)
,`foto_chica` varchar(100)
,`foto_chica_2` varchar(255)
,`foto_media_listado` varchar(200)
,`foto_media_listado2` varchar(100)
,`foto_media_listado_floresa` varchar(200)
,`foto_media_listado_floresa2` varchar(200)
,`foto_extra_chica` varchar(200)
,`descri_ch` varchar(500)
,`descri_m` varchar(500)
,`descri_g` varchar(500)
,`codigo_int` varchar(100)
,`costo_g` decimal(6,2)
,`costo_m` decimal(6,2)
,`costo_ch` decimal(6,2)
,`pie` mediumtext
,`orquideas` char(2)
,`canastas` char(2)
,`annonuevo` char(2)
,`navidad` char(2)
,`sincolor` char(2)
,`categorias` mediumtext
,`ocasiones` mediumtext
,`nota_interna` mediumtext
,`nota_florista` mediumtext
,`nota_florista_2` mediumtext
,`nota_florista_3` mediumtext
,`muestro_foto_al_florista` char(1)
,`envio_automatico_al_florista` char(1)
,`correo_florista` varchar(200)
,`id_horario_entrega` int(11)
,`omite_imagen_horario` bit(1)
,`corregidoingles` tinyint(1)
,`corregido_fecha` datetime
,`diferenciaprd` tinyint(1)
,`fecha_creacion` timestamp
,`corregir_portugues` tinyint(1)
,`tipo_pie` int(11)
,`ftd` int(11)
,`jacquelines` tinyint(1)
,`teleflora` tinyint(1)
,`traducido_lfdm` tinyint(1)
,`nodisponible` tinyint(1)
,`tags` longtext
,`tags_e` longtext
,`tags_ant` longtext
,`tags_e_ant` longtext
,`producto_oculto` tinyint(1)
,`personalizar_letras` tinyint(1)
,`personalizar_letras_cantidad` int(11)
,`personalizar_numeros` tinyint(1)
,`personalizar_numeros_cantidad` int(11)
,`personalizar_mixto` tinyint(1)
,`personalizar_mixto_cantidad` int(11)
,`no_personalizar` tinyint(1)
,`no_personalizar_centro` tinyint(1)
,`A/B` varchar(50)
,`fecha_alta` timestamp
,`cantidad_ventas` int(11)
,`porcentaje_drop_inferior` int(11)
,`porcentaje_drop_superior` int(11)
,`foto_mejorada_con_ai` char(1)
,`b_newsletter` bit(1)
,`id_tipo_mensaje_producto` int(11)
,`sales_of_last_thirty_days` int(11)
,`id_linea_producto` smallint(6)
,`orden_producto` int(11)
,`orden_producto2` int(11)
,`deleted_at` datetime
,`updated_at` datetime
,`no_permite_cupon` tinyint(1)
,`nombre_eng` varchar(250)
,`descripcion_eng` mediumtext
,`descri_ch_eng` varchar(50)
,`descri_m_eng` varchar(50)
,`descri_g_eng` varchar(50)
,`codigo_int_eng` varchar(20)
,`nota_florista_eng` mediumtext
,`foto_grande_eng` varchar(100)
,`foto_media_eng` varchar(100)
,`foto_chica_eng` varchar(100)
,`especial_id` int(11)
,`especial_img` varchar(300)
,`especial_img_eng` varchar(303)
,`especial_img_ficha` varchar(300)
,`especial_img_ficha_eng` varchar(303)
,`foto_tamanio_ch` varchar(300)
,`foto_tamanio_m` varchar(300)
,`foto_tamanio_g` varchar(300)
,`descuento_ch` decimal(4,2)
,`descuento_m` decimal(4,2)
,`descuento_g` decimal(4,2)
,`reviews_avg_value` decimal(6,2)
,`reviews_count` int(11)
,`configuracion_personalizacion` longtext
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_p`
--

CREATE TABLE `productos_p` (
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(250) NOT NULL DEFAULT '',
  `precio_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `zonas` mediumtext NOT NULL,
  `ocasion` mediumtext NOT NULL,
  `rubro` mediumtext NOT NULL,
  `foto` varchar(50) NOT NULL DEFAULT '',
  `destacado` char(2) NOT NULL DEFAULT '',
  `pais` int(6) NOT NULL DEFAULT 0,
  `condolencias` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `diamadre` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_f` char(2) NOT NULL DEFAULT '',
  `descripcion` mediumtext NOT NULL,
  `a_color` varchar(15) NOT NULL DEFAULT '',
  `foto_grande` varchar(50) NOT NULL DEFAULT '',
  `foto_chica` varchar(50) NOT NULL DEFAULT '',
  `descri_ch` varchar(50) NOT NULL DEFAULT '',
  `descri_m` varchar(50) NOT NULL DEFAULT '',
  `descri_g` varchar(50) NOT NULL DEFAULT '',
  `codigo_int` varchar(20) NOT NULL DEFAULT '',
  `costo_g` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_m` decimal(6,2) NOT NULL DEFAULT 0.00,
  `costo_ch` decimal(6,2) NOT NULL DEFAULT 0.00,
  `pie` mediumtext NOT NULL,
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `sincolor` char(2) NOT NULL DEFAULT '',
  `categorias` mediumtext NOT NULL,
  `ocasiones` mediumtext NOT NULL,
  `nota_interna` mediumtext NOT NULL,
  `nota_florista` mediumtext NOT NULL,
  `traducido` datetime NOT NULL,
  `tipo_pie` int(11) NOT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `productos_tamanios`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `productos_tamanios` (
`pais` int(6)
,`id_productos` int(6) unsigned zerofill
,`nombre` varchar(250)
,`tamanio` int(1)
,`descripcion` varchar(500)
,`descripcion_ingles` varchar(500)
,`foto` varchar(300)
,`precio` decimal(6,2)
,`cantidad_ventas` int(11)
,`porcentaje_drop_inferior` int(11)
,`porcentaje_drop_superior` int(11)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `productos_vendidos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `productos_vendidos` (
`id_pedido` int(7) unsigned zerofill
,`fhm_creacion` timestamp
,`date_entrega` date
,`id_productos` int(6) unsigned zerofill
,`tamanio` bigint(20)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto_habilitados`
--

CREATE TABLE `producto_habilitados` (
  `id` int(10) UNSIGNED NOT NULL,
  `producto_id` int(10) UNSIGNED NOT NULL,
  `precio` varchar(255) NOT NULL,
  `precio2` varchar(255) NOT NULL,
  `precio3` varchar(255) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_catalog`
--

CREATE TABLE `product_catalog` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `catalog_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_codes`
--

CREATE TABLE `product_codes` (
  `id` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `url` mediumtext NOT NULL,
  `pais` int(11) NOT NULL,
  `zona` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `producto` int(11) NOT NULL,
  `idioma` mediumtext NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_openai`
--

CREATE TABLE `product_openai` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_en_id` int(11) DEFAULT NULL,
  `openai_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `openai_corrected_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `openai_best_suggestion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `openai_explanation_of_corrections` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `openai_corrected_text_approved` tinyint(1) DEFAULT NULL,
  `openai_best_suggestion_approved` tinyint(1) DEFAULT NULL,
  `openai_corrected_text_approved_by` int(11) DEFAULT NULL,
  `openai_best_suggestion_approved_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_categorias_cuentas`
--

CREATE TABLE `produ_categorias_cuentas` (
  `id` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `tipo` char(1) NOT NULL,
  `id_cuenta` int(11) NOT NULL,
  `activo` char(2) NOT NULL,
  `etiqueta_nombre` varchar(60) DEFAULT NULL,
  `orden` int(11) NOT NULL,
  `fhm_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `usuario` varchar(60) NOT NULL DEFAULT 'ANONIMO',
  `etiqueta_nombre_bk` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_cuentas`
--

CREATE TABLE `produ_cuentas` (
  `id` bigint(11) NOT NULL,
  `cod_cuenta` varchar(12) NOT NULL DEFAULT '',
  `de_cuenta` varchar(80) NOT NULL DEFAULT '',
  `tipo_disenio` varchar(5) DEFAULT NULL,
  `c_ambiente` varchar(15) NOT NULL DEFAULT '',
  `fh_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `usuario_registro` varchar(30) NOT NULL DEFAULT 'Anonimo',
  `de_observaciones` longtext DEFAULT NULL,
  `disenio` int(11) NOT NULL,
  `conversion` longtext NOT NULL,
  `activeChat` int(11) NOT NULL,
  `is_ssl` tinyint(1) NOT NULL,
  `analytics_code` mediumtext NOT NULL,
  `googleClientID` mediumtext NOT NULL,
  `use_https` varchar(10) NOT NULL,
  `photosFolder` varchar(100) NOT NULL,
  `userName2co` varchar(50) DEFAULT NULL,
  `password2co` varbinary(50) DEFAULT NULL,
  `sendpulse_push_code` varchar(50) NOT NULL,
  `mail_florista` varchar(256) DEFAULT NULL,
  `mail_verificacion` varchar(256) DEFAULT NULL,
  `dominio_florista` varchar(255) NOT NULL,
  `recaptchaSiteKey` varchar(50) DEFAULT NULL,
  `recaptchaSecret` varchar(50) DEFAULT NULL,
  `prefijo_pedido` varchar(1) NOT NULL,
  `id_zona_default` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `id_pais_default` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `idioma_forzado_admin` int(11) NOT NULL DEFAULT -1,
  `mail_remito` varchar(256) DEFAULT NULL,
  `disenio_nuevo` tinyint(1) NOT NULL DEFAULT 0,
  `facebook_appid` bigint(20) NOT NULL,
  `facebook_secret` varchar(200) NOT NULL,
  `google_secret` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_etiquetas`
--

CREATE TABLE `produ_etiquetas` (
  `id` bigint(11) NOT NULL,
  `id_sistema` bigint(11) NOT NULL DEFAULT 1,
  `id_cuenta` bigint(11) NOT NULL DEFAULT 0,
  `de_nativo` varchar(255) NOT NULL DEFAULT '',
  `de_espaniol` text DEFAULT NULL,
  `de_ingles` text DEFAULT NULL,
  `de_portugues` text NOT NULL,
  `fh_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `usuario_registro` varchar(30) NOT NULL DEFAULT 'Anonimo',
  `replicar` tinyint(1) NOT NULL,
  `corregido` tinyint(1) NOT NULL,
  `corregido_portugues` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_monedas`
--

CREATE TABLE `produ_monedas` (
  `id_moneda` int(11) NOT NULL DEFAULT 0,
  `cod_moneda` varchar(12) NOT NULL DEFAULT '',
  `de_moneda` varchar(120) NOT NULL DEFAULT '',
  `cod_xurrency` char(3) NOT NULL,
  `n_cotizacion` double NOT NULL,
  `fh_cotizacion` datetime NOT NULL,
  `de_observaciones` mediumtext NOT NULL,
  `fh_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `us_creacion` varchar(30) NOT NULL DEFAULT '',
  `cod_yahoo` varchar(20) NOT NULL,
  `show_all_countries` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_paises_cuentas`
--

CREATE TABLE `produ_paises_cuentas` (
  `id` int(11) NOT NULL,
  `id_pais` int(11) NOT NULL,
  `id_cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_paises_monedas`
--

CREATE TABLE `produ_paises_monedas` (
  `id_pais_moneda` int(11) NOT NULL,
  `id_pais` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `id_moneda` int(11) NOT NULL DEFAULT 0,
  `n_comision` decimal(15,2) DEFAULT NULL,
  `n_cotizacion` decimal(10,2) NOT NULL DEFAULT 0.00,
  `n_rebaja` float NOT NULL DEFAULT 0,
  `t_cotizacion` char(1) NOT NULL DEFAULT '',
  `b_default` char(1) NOT NULL DEFAULT 'N',
  `id_moneda_alternativa` int(11) DEFAULT NULL,
  `de_observaciones` mediumtext NOT NULL,
  `fh_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `us_creacion` varchar(30) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_productos_cuentas`
--

CREATE TABLE `produ_productos_cuentas` (
  `id` int(11) NOT NULL,
  `id_producto` int(6) NOT NULL,
  `id_cuenta` int(11) NOT NULL,
  `b_destacado` char(1) NOT NULL DEFAULT 'N',
  `fh_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `usuario_registro` varchar(30) NOT NULL DEFAULT 'ANONIMO',
  `de_observaciones` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='produ_productos_cuentas' ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_productos_cuentasrot`
--

CREATE TABLE `produ_productos_cuentasrot` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `id_cuenta` int(11) NOT NULL,
  `b_destacado` char(1) NOT NULL DEFAULT 'N',
  `fh_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `usuario_registro` varchar(30) NOT NULL DEFAULT 'ANONIMO',
  `de_observaciones` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='produ_productos_cuentas' ROW_FORMAT=DYNAMIC;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_secuencias`
--

CREATE TABLE `produ_secuencias` (
  `de_tabla` varchar(50) NOT NULL DEFAULT '',
  `n_secuencia` bigint(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `produ_tipos_forma_de_pago`
--

CREATE TABLE `produ_tipos_forma_de_pago` (
  `id` int(11) NOT NULL,
  `de_nombre_interno` varchar(40) NOT NULL COMMENT 'se usa de guia interna dado que los otros campos son etiquetas y es para uso de cliente.',
  `de_nombre` varchar(256) NOT NULL,
  `de_descripcion` mediumtext NOT NULL,
  `id_cuenta` int(11) NOT NULL,
  `id_moneda` int(11) NOT NULL,
  `id_pais_cliente` int(11) NOT NULL COMMENT 'Es el pais donde el cliente esta registrado.',
  `id_pais_cliente_excepcion` int(11) DEFAULT NULL,
  `b_graba_pedido` char(1) NOT NULL DEFAULT 'S',
  `t_estado_pedido` char(1) NOT NULL DEFAULT 'P',
  `tipo` enum('redirect','form','script') NOT NULL DEFAULT 'redirect',
  `c_url_redirect` varchar(256) NOT NULL,
  `script` varchar(500) NOT NULL,
  `fh_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `usuario_registro` varchar(30) NOT NULL DEFAULT 'ANONIMO',
  `de_observaciones` mediumtext NOT NULL,
  `de_icon` varchar(255) NOT NULL,
  `medio_seleccionable` bit(1) DEFAULT b'1',
  `medio_facturable` bit(1) DEFAULT b'0',
  `funcionalidad` varchar(200) NOT NULL,
  `sandbox` bit(1) DEFAULT NULL,
  `json_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `orden` int(11) NOT NULL,
  `id_medio_facturacion` int(11) NOT NULL,
  `script_onselect` varchar(500) NOT NULL,
  `script_onload` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `proveedorID` int(11) NOT NULL,
  `proveedorNombre` varchar(255) DEFAULT NULL,
  `proveedorDireccion` varchar(255) DEFAULT NULL,
  `proveedorPais` int(11) NOT NULL,
  `proveedorEstado` int(11) NOT NULL,
  `proveedorOperatividad` int(11) NOT NULL,
  `proveedorLatitud` mediumtext NOT NULL,
  `proveedorLongitud` mediumtext NOT NULL,
  `proveedorLatitudTurbo` mediumtext DEFAULT NULL,
  `proveedorLongitudTurbo` mediumtext DEFAULT NULL,
  `proveedorEstadoTurbo` int(11) DEFAULT 0,
  `proveedorDistanciaEntregasRapidas` int(11) DEFAULT 0 COMMENT 'En Kms',
  `proveedorMinutosPreparacion` int(11) DEFAULT 0 COMMENT 'Siempre en preparacion que el florista tiene para preparar un arreglo floral.',
  `proveedorSabadoTurbo` int(11) DEFAULT NULL,
  `proveedorDomingoTurbo` int(11) DEFAULT NULL,
  `proveedorLunesTurbo` int(11) DEFAULT NULL,
  `proveedorMartesTurbo` int(11) DEFAULT NULL,
  `proveedorMiercolesTurbo` int(11) DEFAULT NULL,
  `proveedorJuevesTurbo` int(11) DEFAULT NULL,
  `proveedorViernesTurbo` int(11) DEFAULT NULL,
  `proveedorLunesTurboCorte` int(2) DEFAULT 0,
  `proveedorMartesTurboCorte` int(2) DEFAULT 0,
  `proveedorMiercolesTurboCorte` int(2) DEFAULT 0,
  `proveedorJuevesTurboCorte` int(2) DEFAULT 0,
  `proveedorViernesTurboCorte` int(2) DEFAULT 0,
  `proveedorSabadoTurboCorte` int(2) DEFAULT 0,
  `proveedorDomingoTurboCorte` int(2) DEFAULT 0,
  `proveedorZona` int(11) NOT NULL,
  `proveedorOtrasZonas` mediumtext NOT NULL,
  `proveedorTarjeta` int(11) NOT NULL,
  `proveedorTulipanes` int(11) NOT NULL,
  `proveedorEmail` mediumtext NOT NULL,
  `proveedorTiming` int(11) NOT NULL,
  `proveedorTelefono` mediumtext NOT NULL,
  `proveedorTelefonoAlt` mediumtext NOT NULL,
  `proveedorWhatsapp` varchar(255) DEFAULT NULL,
  `proveedorDuenoNombre` mediumtext NOT NULL,
  `proveedorDuenoCel` mediumtext NOT NULL,
  `proveedorDuenoEmail` mediumtext NOT NULL,
  `proveedorEncargadoNombre` mediumtext NOT NULL,
  `proveedorEncargadoCel` mediumtext NOT NULL,
  `proveedorEncargadoEmail` mediumtext NOT NULL,
  `proveedorDomingo` mediumtext NOT NULL,
  `proveedorHorario` mediumtext NOT NULL,
  `proveedorCajas` int(11) NOT NULL,
  `proveedorTarjetones` int(11) NOT NULL,
  `proveedorNotas` mediumtext NOT NULL,
  `proveedorToken` mediumtext NOT NULL,
  `proveedorConfirmado` datetime DEFAULT NULL,
  `proveedorFechaAlta` datetime NOT NULL,
  `proveedorSuperDirecto` bit(1) NOT NULL DEFAULT b'0',
  `proveedorSansonID` int(11) NOT NULL DEFAULT 1,
  `proveedorSansonListaID` int(11) DEFAULT NULL,
  `proveedorAcuerdoActivo` smallint(6) DEFAULT 0,
  `chat2deskID` int(11) NOT NULL,
  `recibe_whatsapp` int(11) NOT NULL,
  `recibe_notificaciones` tinyint(1) NOT NULL DEFAULT 0,
  `automatizar_sanson` int(11) NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores_directos`
--

CREATE TABLE `proveedores_directos` (
  `proveedorID` int(11) NOT NULL,
  `proveedorNombre` varchar(255) NOT NULL,
  `proveedorSansonID` int(11) NOT NULL,
  `proveedorSansonListaID` int(11) DEFAULT NULL,
  `proveedorAcuerdoActivo` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores_zonas`
--

CREATE TABLE `proveedores_zonas` (
  `pzID` int(11) NOT NULL,
  `pzProveedor` int(11) NOT NULL,
  `pzZona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba_whatsapp`
--

CREATE TABLE `prueba_whatsapp` (
  `id` int(11) NOT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `channelId` varchar(30) DEFAULT NULL,
  `dt_created` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ps_cache`
--

CREATE TABLE `ps_cache` (
  `ckey` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_update` datetime DEFAULT NULL,
  `ttl` bigint(20) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reclamos`
--

CREATE TABLE `reclamos` (
  `id` int(11) NOT NULL,
  `pedido` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `recordar` int(11) NOT NULL,
  `detalle` longtext NOT NULL,
  `operador` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `alerta_enviada` datetime NOT NULL,
  `padre` int(11) NOT NULL,
  `emails` longtext NOT NULL,
  `alerta_diaria` date NOT NULL,
  `motivo` int(11) NOT NULL,
  `solucion` int(11) NOT NULL,
  `tiempo_solucion` int(11) NOT NULL,
  `fecha_solucion` datetime NOT NULL,
  `diaria` tinyint(1) NOT NULL,
  `privado` tinyint(1) NOT NULL,
  `inicial` int(11) NOT NULL,
  `detalle_motivo` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `reclamos_motivos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `reclamos_motivos` (
`id` bigint(20) unsigned
,`nombre` varchar(191)
,`responsible_claim` enum('cliente','proveedor','operador')
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reclamos_motivos_old`
--

CREATE TABLE `reclamos_motivos_old` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `responsible_claim` enum('cliente','proveedor','operador') NOT NULL DEFAULT 'cliente'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reclamos_soluciones`
--

CREATE TABLE `reclamos_soluciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Records`
--

CREATE TABLE `Records` (
  `ID` int(11) NOT NULL,
  `UserID` varchar(128) NOT NULL DEFAULT '0',
  `Day` int(2) NOT NULL DEFAULT 0,
  `Month` int(2) NOT NULL DEFAULT 0,
  `OcacionID` int(11) NOT NULL DEFAULT 0,
  `RecNextYear` int(4) NOT NULL DEFAULT 0,
  `PersName` varchar(250) NOT NULL DEFAULT '',
  `Note` mediumtext NOT NULL,
  `days_before` int(1) NOT NULL DEFAULT 0,
  `oneweek_before` int(11) NOT NULL DEFAULT 0,
  `twoweek_before` int(11) NOT NULL DEFAULT 0,
  `UserLang` char(3) NOT NULL DEFAULT '',
  `time` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `relaciones`
--

CREATE TABLE `relaciones` (
  `ID` int(11) NOT NULL,
  `etiqueta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reminder_log`
--

CREATE TABLE `reminder_log` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_reminder_id` int(11) NOT NULL,
  `remind_at` datetime DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `email_send` varchar(255) NOT NULL,
  `whatsapp_send` varchar(255) NOT NULL,
  `sent` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `return_reasons`
--

CREATE TABLE `return_reasons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `responsible_return` enum('cliente','proveedor','operador') NOT NULL DEFAULT 'cliente',
  `template_mail_id` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `guard_name` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `searches`
--

CREATE TABLE `searches` (
  `searchID` int(11) NOT NULL,
  `searchDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `searchSite` int(11) NOT NULL,
  `searchCountry` int(11) DEFAULT NULL,
  `searchZone` int(11) DEFAULT NULL,
  `searchWords` varchar(255) NOT NULL,
  `searchSeo` tinyint(1) NOT NULL,
  `searchHits` int(11) NOT NULL,
  `searchStatus` tinyint(1) NOT NULL,
  `searchLang` mediumtext NOT NULL,
  `searchHash` longtext NOT NULL,
  `searchVisible` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `searchLog`
--

CREATE TABLE `searchLog` (
  `id` int(11) NOT NULL,
  `dateTime` timestamp NULL DEFAULT current_timestamp(),
  `id_cuenta` int(11) DEFAULT NULL,
  `id_pais` int(11) DEFAULT NULL,
  `id_zona` int(11) DEFAULT NULL,
  `idioma` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `terminos` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `IP` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `userAgent` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `referer` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidadResultados` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `session_events`
--

CREATE TABLE `session_events` (
  `session_id` varchar(128) NOT NULL,
  `dt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `session` longtext DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `data` varchar(4000) DEFAULT NULL,
  `id_pedido` int(11) DEFAULT NULL,
  `id_cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `short_urls`
--

CREATE TABLE `short_urls` (
  `id` int(11) NOT NULL,
  `long_url` varchar(255) NOT NULL,
  `short_url` varchar(255) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `redirect_url` varchar(255) DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  `expired` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `short_urls_expired`
--

CREATE TABLE `short_urls_expired` (
  `id` int(11) NOT NULL,
  `long_url` varchar(255) NOT NULL,
  `short_url` varchar(255) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitemap`
--

CREATE TABLE `sitemap` (
  `cadena` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitemaps`
--

CREATE TABLE `sitemaps` (
  `sitemapID` int(11) NOT NULL,
  `sitemapCuenta` int(11) NOT NULL,
  `sitemapURL` varchar(512) NOT NULL,
  `sitemapDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `sitemapPriority` varchar(5) NOT NULL,
  `sitemapPais` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci
PARTITION BY HASH (`sitemapCuenta`)
PARTITIONS 35;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitemaps_request_start`
--

CREATE TABLE `sitemaps_request_start` (
  `id` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `start` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `iteraciones` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitemap_requests`
--

CREATE TABLE `sitemap_requests` (
  `id` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `url` text NOT NULL,
  `crawled` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `smtp_sent`
--

CREATE TABLE `smtp_sent` (
  `id` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `smtp_sent_count`
--

CREATE TABLE `smtp_sent_count` (
  `id` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sql_pendientes`
--

CREATE TABLE `sql_pendientes` (
  `s` varchar(500) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `supplier_notes`
--

CREATE TABLE `supplier_notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `note` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tables_info`
--

CREATE TABLE `tables_info` (
  `TABLE_NAME` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `UPDATE_TIME` datetime DEFAULT NULL,
  `TABLE_ROWS` bigint(21) UNSIGNED DEFAULT NULL,
  `DATA_LENGTH` bigint(21) UNSIGNED DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tags_mickey`
--

CREATE TABLE `tags_mickey` (
  `id` int(11) NOT NULL,
  `notas` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjeta`
--

CREATE TABLE `tarjeta` (
  `estado` varchar(10) NOT NULL DEFAULT '',
  `aprovacion` varchar(15) NOT NULL DEFAULT '',
  `correo_admin` varchar(200) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjetas_fraude`
--

CREATE TABLE `tarjetas_fraude` (
  `tarjetaID` int(11) NOT NULL,
  `tarjetaBIN` varchar(255) NOT NULL,
  `tarjetaFrena` tinyint(1) NOT NULL,
  `tarjetaPaises` mediumtext NOT NULL,
  `tarjetaEstado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `templates_mails`
--

CREATE TABLE `templates_mails` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `matter_in_spanish` varchar(191) NOT NULL,
  `matter_in_english` varchar(191) NOT NULL,
  `observation` longtext NOT NULL,
  `spanish_content` longtext NOT NULL,
  `english_content` longtext NOT NULL,
  `mail_from` varchar(191) DEFAULT NULL,
  `from_alias` varchar(255) DEFAULT NULL,
  `from` varchar(191) DEFAULT NULL,
  `active` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `terminos_busqueda`
--

CREATE TABLE `terminos_busqueda` (
  `id_idioma` int(11) NOT NULL,
  `termino` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_redirigir` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `info_adicional` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `timezonebyzipcode`
--

CREATE TABLE `timezonebyzipcode` (
  `idtimezonebyzipcode` int(11) NOT NULL,
  `zip` varchar(5) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `county` varchar(45) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `timezone` varchar(45) DEFAULT NULL,
  `addressquality` int(11) DEFAULT NULL,
  `source` varchar(45) DEFAULT NULL,
  `sourcedate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_acciones_pedidos`
--

CREATE TABLE `tipos_acciones_pedidos` (
  `acc_id` int(11) NOT NULL,
  `acc_tipo` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_mensajes_productos`
--

CREATE TABLE `tipo_mensajes_productos` (
  `id` int(11) NOT NULL,
  `tipo_de_mje` varchar(75) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trace_orders`
--

CREATE TABLE `trace_orders` (
  `id` int(11) NOT NULL,
  `dt` datetime NOT NULL,
  `order_id` int(11) NOT NULL,
  `text` text NOT NULL,
  `debug` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tracking_por_pedido`
--

CREATE TABLE `tracking_por_pedido` (
  `id` int(11) NOT NULL,
  `pedido` int(11) NOT NULL,
  `tracking` mediumtext NOT NULL,
  `date` datetime NOT NULL,
  `operador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `types_florist_actions`
--

CREATE TABLE `types_florist_actions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(50) NOT NULL,
  `action_description` varchar(100) NOT NULL,
  `sequence` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `types_issues`
--

CREATE TABLE `types_issues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_florist_action_id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_contact`
--

CREATE TABLE `type_contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT 1,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_reminder`
--

CREATE TABLE `type_reminder` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_acuerdos_proveedor2`
--

CREATE TABLE `t_acuerdos_proveedor2` (
  `florist_id` int(11) NOT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `type_product` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `size` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `product` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `id_zonas` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `zona_nombre` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_costos_promedios_pais`
--

CREATE TABLE `t_costos_promedios_pais` (
  `id_pais` int(11) NOT NULL,
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `tamanio` bigint(20) NOT NULL DEFAULT 0,
  `descripcion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion_ingles` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidad_ventas` int(11) NOT NULL,
  `CostoPromedioGeneral_Pais` decimal(14,6) DEFAULT NULL,
  `CostoMinimoGeneral_Pais` decimal(10,2) DEFAULT NULL,
  `CostoMaximoGeneral_Pais` decimal(10,2) DEFAULT NULL,
  `CantidadComprasGeneral_Pais` bigint(21) NOT NULL DEFAULT 0,
  `CostoPromedioConDrop_Pais` decimal(14,6) DEFAULT NULL,
  `CostoMinimoConDrop_Pais` decimal(10,2) DEFAULT NULL,
  `CostoMaximoConDrop_Pais` decimal(10,2) DEFAULT NULL,
  `CantidadComprasConDrop_Pais` bigint(21) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_costos_promedios_zona`
--

CREATE TABLE `t_costos_promedios_zona` (
  `id_pais` int(11) NOT NULL,
  `id_zona_padre` int(6) DEFAULT NULL,
  `id_zonas` int(6) NOT NULL,
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `tamanio` bigint(20) NOT NULL DEFAULT 0,
  `descripcion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion_ingles` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidad_ventas` int(11) NOT NULL,
  `CostoPromedioGeneral_Zona` decimal(14,6) DEFAULT NULL,
  `CostoMinimoGeneral_Zona` decimal(10,2) DEFAULT NULL,
  `CostoMaximoGeneral_Zona` decimal(10,2) DEFAULT NULL,
  `CantidadComprasGeneral_Zona` bigint(21) NOT NULL DEFAULT 0,
  `CostoPromedioConDrop_Zona` decimal(14,6) DEFAULT NULL,
  `CostoMinimoConDrop_Zona` decimal(10,2) DEFAULT NULL,
  `CostoMaximoConDrop_Zona` decimal(10,2) DEFAULT NULL,
  `CantidadComprasConDrop_Zona` bigint(21) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_costos_promedios_zonaPadre`
--

CREATE TABLE `t_costos_promedios_zonaPadre` (
  `id_pais` int(11) NOT NULL,
  `id_zona_padre` int(6) NOT NULL,
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `tamanio` bigint(20) NOT NULL DEFAULT 0,
  `descripcion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion_ingles` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidad_ventas` int(11) NOT NULL,
  `CostoPromedioGeneral_ZonaPadre` decimal(14,6) DEFAULT NULL,
  `CostoMinimoGeneral_ZonaPadre` decimal(10,2) DEFAULT NULL,
  `CostoMaximoGeneral_ZonaPadre` decimal(10,2) DEFAULT NULL,
  `CantidadComprasGeneral_ZonaPadre` bigint(21) NOT NULL DEFAULT 0,
  `CostoPromedioConDrop_ZonaPadre` decimal(14,6) DEFAULT NULL,
  `CostoMinimoConDrop_ZonaPadre` decimal(10,2) DEFAULT NULL,
  `CostoMaximoConDrop_ZonaPadre` decimal(10,2) DEFAULT NULL,
  `CantidadComprasConDrop_ZonaPadre` bigint(21) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `t_lista_productos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `t_lista_productos` (
`id_cuenta` int(11)
,`b_destacado` char(1)
,`pais` int(11)
,`zppZona` int(10) unsigned
,`cppCategoria` int(11)
,`activo` char(2)
,`id_productos` int(10) unsigned
,`condolencias` int(11)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `t_lista_productos_anterior`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `t_lista_productos_anterior` (
`id_cuenta` int(11)
,`b_destacado` char(1)
,`pais` int(11)
,`zppZona` int(10) unsigned
,`cppCategoria` int(11)
,`activo` char(2)
,`id_productos` int(10) unsigned
,`condolencias` int(11)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `t_lista_productos_v2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `t_lista_productos_v2` (
`id_cuenta` int(11)
,`b_destacado` char(1)
,`pais` int(6)
,`zppZona` int(6) unsigned zerofill
,`cppCategoria` int(6)
,`activo` char(2)
,`id_productos` int(6) unsigned zerofill
,`condolencias` int(1)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_pedidos_costos`
--

CREATE TABLE `t_pedidos_costos` (
  `id_pedido` int(7) UNSIGNED ZEROFILL NOT NULL,
  `date_entrega` date NOT NULL,
  `id_pais` int(11) NOT NULL,
  `id_zona_padre` int(6) DEFAULT NULL,
  `id_zonas` int(6) NOT NULL,
  `id_productos` int(6) NOT NULL,
  `descripcionTamanio` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `Costo` decimal(10,2) NOT NULL,
  `CostoLocal` decimal(10,2) DEFAULT NULL,
  `proveedor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_pedidos_costos_paso_1`
--

CREATE TABLE `t_pedidos_costos_paso_1` (
  `id_pedido` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `date_entrega` date NOT NULL,
  `id_pais` int(11) NOT NULL,
  `id_zona_padre` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `id_productos` int(6) NOT NULL DEFAULT 0,
  `descripcionTamanio` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Costo` decimal(10,2) DEFAULT NULL,
  `CostoLocal` decimal(10,2) DEFAULT NULL,
  `proveedor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_productos_tamanios`
--

CREATE TABLE `t_productos_tamanios` (
  `pais` int(6) NOT NULL,
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tamanio` bigint(20) NOT NULL,
  `descripcion` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion_ingles` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `precio` decimal(6,2) NOT NULL,
  `foto` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidad_ventas` int(11) NOT NULL,
  `porcentaje_drop_inferior` int(11) NOT NULL,
  `porcentaje_drop_superior` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_producto_categorias`
--

CREATE TABLE `t_producto_categorias` (
  `id_cuenta` int(11) NOT NULL,
  `b_destacado` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'N',
  `pais` int(6) NOT NULL DEFAULT 0,
  `cppCategoria` int(6) NOT NULL,
  `c_activo` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `condolencias` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_zonas_populares`
--

CREATE TABLE `t_zonas_populares` (
  `zona_id` decimal(10,0) NOT NULL,
  `nombre_zona` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `q` bigint(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_zonas_por_producto_catalogs`
--

CREATE TABLE `t_zonas_por_producto_catalogs` (
  `product_id` int(11) NOT NULL,
  `zone_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_zonas_por_producto_no_entrega`
--

CREATE TABLE `t_zonas_por_producto_no_entrega` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_zonas_x_productos`
--

CREATE TABLE `t_zonas_x_productos` (
  `zppZona` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `id_productos` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ultimo_minuto`
--

CREATE TABLE `ultimo_minuto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(300) NOT NULL,
  `pantalla` int(11) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nota` longtext NOT NULL,
  `prioridad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ultimo_minuto_etiquetas`
--

CREATE TABLE `ultimo_minuto_etiquetas` (
  `id` int(11) NOT NULL,
  `padre` int(11) NOT NULL,
  `etiqueta` varchar(300) NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ultimo_minuto_relaciones`
--

CREATE TABLE `ultimo_minuto_relaciones` (
  `id` int(11) NOT NULL,
  `padre` int(11) NOT NULL,
  `pais` int(11) NOT NULL,
  `cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `uploaded_s3_files`
--

CREATE TABLE `uploaded_s3_files` (
  `fileType` enum('quality-control','customization') NOT NULL,
  `path` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `orderId` bigint(20) UNSIGNED DEFAULT NULL,
  `dueDate` datetime DEFAULT NULL,
  `internalId` varchar(255) DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  `reprocesar` tinyint(1) NOT NULL DEFAULT 0,
  `cdn` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `url_thanks`
--

CREATE TABLE `url_thanks` (
  `id` int(11) NOT NULL,
  `dt_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `order_id` int(11) NOT NULL,
  `url_thanks` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `User`
--

CREATE TABLE `User` (
  `ID` int(11) NOT NULL,
  `Email` varchar(128) NOT NULL DEFAULT '',
  `Passd` varchar(50) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(60) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `active` int(11) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `last_seen` timestamp NULL DEFAULT NULL,
  `external` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_actions`
--

CREATE TABLE `user_actions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `orders_later_days` int(11) NOT NULL,
  `number_lost_list` int(11) NOT NULL,
  `view_orders` longtext DEFAULT '0',
  `daily_order_limits` int(11) NOT NULL,
  `date_order_limits` date NOT NULL,
  `order_cancellation_limit` int(11) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_country`
--

CREATE TABLE `user_country` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_action_id` bigint(20) UNSIGNED NOT NULL,
  `country_id` int(6) UNSIGNED ZEROFILL NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_fingerprint`
--

CREATE TABLE `user_fingerprint` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(191) DEFAULT NULL,
  `fingerprint` varchar(191) DEFAULT NULL,
  `ip` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_site`
--

CREATE TABLE `user_site` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_action_id` bigint(20) UNSIGNED NOT NULL,
  `site_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `uso_bonificaciones`
--

CREATE TABLE `uso_bonificaciones` (
  `id` int(11) NOT NULL,
  `bonificacion` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `uso_bonificaciones2`
--

CREATE TABLE `uso_bonificaciones2` (
  `bonificacion_id` int(10) UNSIGNED NOT NULL,
  `cliente_id` int(10) UNSIGNED NOT NULL,
  `fecha` datetime NOT NULL,
  `id_carrito` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitas_afiliados`
--

CREATE TABLE `visitas_afiliados` (
  `id` mediumint(6) UNSIGNED ZEROFILL NOT NULL,
  `fecha` char(17) NOT NULL DEFAULT '',
  `fecha_reves` char(17) NOT NULL DEFAULT '',
  `afiliado` char(6) NOT NULL DEFAULT '',
  `sesion` char(100) NOT NULL DEFAULT '',
  `ip` char(30) NOT NULL DEFAULT '',
  `referer` char(100) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_acuerdos_proveedor2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_acuerdos_proveedor2` (
`florist_id` int(11)
,`price` decimal(12,2)
,`type_product` varchar(2)
,`size` int(11)
,`product` int(11)
,`id_zonas` int(6) unsigned zerofill
,`zona_nombre` char(250)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_herencia_zonas`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_herencia_zonas` (
`id_zonas` int(10) unsigned
,`is_zona_h` decimal(10,0)
,`tipo` varchar(1)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_kpi_proveeedores`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_kpi_proveeedores` (
`proveedor_id` int(11)
,`q` bigint(21)
,`qa` decimal(22,8)
,`date_entrega_teorica_desde` datetime
,`r01` int(11)
,`r01t` varchar(600)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_lista_blanca_emails`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_lista_blanca_emails` (
`email` varchar(300)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_lista_productos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_lista_productos` (
`id_cuenta` int(11)
,`b_destacado` char(1)
,`pais` int(10) unsigned
,`zppZona` int(10) unsigned
,`cppCategoria` int(11)
,`c_activo` char(2)
,`id_productos` int(10) unsigned
,`condolencias` int(1)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_notificaciones_proveedores_deshabilitadas`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_notificaciones_proveedores_deshabilitadas` (
`proveedorID` int(11)
,`proveedorNombre` varchar(255)
,`whatsapp` varchar(8)
,`remainder_delivery` varchar(22)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_producto_categorias`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_producto_categorias` (
`id_cuenta` int(11)
,`b_destacado` char(1)
,`pais` int(6)
,`cppCategoria` int(6)
,`c_activo` char(2)
,`id_productos` int(6) unsigned zerofill
,`condolencias` int(1)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_proveedores_productos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_proveedores_productos` (
`proveedor_id` int(11)
,`date_entrega_realizada` datetime
,`date_entrega_teorica_hasta` datetime
,`anulacion` varchar(191)
,`reprogramacion` mediumtext
,`reclamo` varchar(191)
,`r01` int(11)
,`r01t` varchar(600)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_zonas_x_productos`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_zonas_x_productos` (
`zppZona` int(10) unsigned
,`id_productos` int(10) unsigned
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_zonas_x_productos2`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_zonas_x_productos2` (
`zppZona` int(10) unsigned
,`id_productos` int(10) unsigned
,`pais` int(11)
);

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `v_zonas_x_productos_new`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `v_zonas_x_productos_new` (
`zppZona` int(10) unsigned
,`id_productos` int(10) unsigned
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `whatsapp_batches_messages`
--

CREATE TABLE `whatsapp_batches_messages` (
  `id` int(11) NOT NULL,
  `recipient_type` enum('client','supplier') NOT NULL,
  `whatsapp_predefined_id` int(11) NOT NULL,
  `whatsapp_channel_id` int(11) NOT NULL,
  `total_messages_sent` int(11) NOT NULL,
  `number_per_batch` int(11) NOT NULL DEFAULT 100,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `whatsapp_campaigns`
--

CREATE TABLE `whatsapp_campaigns` (
  `id` int(11) NOT NULL,
  `client_id` int(10) UNSIGNED NOT NULL,
  `phone_id` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `campaign_name` varchar(100) NOT NULL,
  `id_cuenta` int(11) NOT NULL,
  `channel_id` varchar(50) NOT NULL,
  `template_name` varchar(100) NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(20) NOT NULL,
  `response_msg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `whatsapp_channels`
--

CREATE TABLE `whatsapp_channels` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `recipient_type` enum('client','supplier') NOT NULL,
  `country_id` int(11) DEFAULT NULL,
  `limit_per_day` int(11) NOT NULL DEFAULT 0,
  `first_use_of_day_at` datetime DEFAULT NULL,
  `channel_id` varchar(191) NOT NULL,
  `used_times` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `whatsapp_contacts`
--

CREATE TABLE `whatsapp_contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_chat2desk` bigint(20) DEFAULT NULL,
  `id_client` bigint(20) DEFAULT NULL,
  `id_channel` int(11) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `lastOrder` text DEFAULT NULL,
  `status` text DEFAULT NULL,
  `archived` int(11) NOT NULL DEFAULT 0,
  `visibility` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `whatsapp_messages`
--

CREATE TABLE `whatsapp_messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_chat2desk` bigint(20) DEFAULT NULL,
  `id_contact` bigint(20) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `source` text DEFAULT NULL,
  `creation` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `whatsapp_predefined`
--

CREATE TABLE `whatsapp_predefined` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `template_name` varchar(255) NOT NULL,
  `language` varchar(20) NOT NULL,
  `recipient_type` enum('client','supplier') NOT NULL,
  `title` varchar(191) DEFAULT NULL,
  `message` varchar(191) DEFAULT NULL,
  `created_by` varchar(191) DEFAULT NULL,
  `edited_by` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `whatsapp_refreshs`
--

CREATE TABLE `whatsapp_refreshs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_negociaciones`
--

CREATE TABLE `xx_negociaciones` (
  `orden` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `estado` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `pagado_cliente` decimal(6,2) NOT NULL DEFAULT 0.00,
  `precio_florista` decimal(10,2) NOT NULL,
  `utilidad` decimal(17,2) DEFAULT NULL,
  `tipo` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `horario` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_aprob`
--

CREATE TABLE `xx_pedidos_aprob` (
  `fecha` varchar(18) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `count(*)` bigint(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_aprob_2024`
--

CREATE TABLE `xx_pedidos_aprob_2024` (
  `fecha` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `count(*)` bigint(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_aprob_2024_mx`
--

CREATE TABLE `xx_pedidos_aprob_2024_mx` (
  `fecha` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `count(*)` bigint(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_aprob_por_pais`
--

CREATE TABLE `xx_pedidos_aprob_por_pais` (
  `fecha` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `count(*)` bigint(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_aprob_por_pais_2024`
--

CREATE TABLE `xx_pedidos_aprob_por_pais_2024` (
  `fecha` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `count(*)` bigint(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_sin_asignar`
--

CREATE TABLE `xx_pedidos_sin_asignar` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_sin_asignar_14`
--

CREATE TABLE `xx_pedidos_sin_asignar_14` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_sin_asignar_15`
--

CREATE TABLE `xx_pedidos_sin_asignar_15` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_sin_asignar_16`
--

CREATE TABLE `xx_pedidos_sin_asignar_16` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_sin_asignar_17`
--

CREATE TABLE `xx_pedidos_sin_asignar_17` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_sin_asignar_monte`
--

CREATE TABLE `xx_pedidos_sin_asignar_monte` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pedidos_sin_asignar_total`
--

CREATE TABLE `xx_pedidos_sin_asignar_total` (
  `date_entrega` date NOT NULL,
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pendiente_de_carga_precio`
--

CREATE TABLE `xx_pendiente_de_carga_precio` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `date_entrega` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pendiente_de_carga_precio_10_05`
--

CREATE TABLE `xx_pendiente_de_carga_precio_10_05` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `date_entrega` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_pendiente_de_carga_precio_mayor_a_07`
--

CREATE TABLE `xx_pendiente_de_carga_precio_mayor_a_07` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `nombre` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `date_entrega` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_perdidas`
--

CREATE TABLE `xx_perdidas` (
  `id` int(7) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000,
  `fecha` varchar(22) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `monto` decimal(6,2) NOT NULL DEFAULT 0.00,
  `tarjeta_modo` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `date_entrega` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_precios_base`
--

CREATE TABLE `xx_precios_base` (
  `producto_id` int(6) NOT NULL DEFAULT 0,
  `size` int(1) NOT NULL,
  `promedio_real` decimal(14,6) DEFAULT NULL,
  `desviacion_std` double(26,6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_proceso`
--

CREATE TABLE `xx_proceso` (
  `sql_delete` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sql_insert` varchar(279) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_productos20250829`
--

CREATE TABLE `xx_productos20250829` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `c` decimal(8,2) NOT NULL,
  `m` decimal(8,2) NOT NULL,
  `l` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_productos_0a5_ventas_7sitios`
--

CREATE TABLE `xx_productos_0a5_ventas_7sitios` (
  `codigo_producto` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre_producto` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `definido_premiumflorist_com` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `definido_floresamexico_com_mx` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `definido_lafloreriademexico_com` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `en_categorias` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `en_zonas` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ventas_premiumflorist_com` decimal(42,0) DEFAULT NULL,
  `ventas_floreriasonline_com` decimal(42,0) DEFAULT NULL,
  `ventas_floresamexico_com_mx` decimal(42,0) DEFAULT NULL,
  `ventas_lafloreriademexico_com` decimal(42,0) DEFAULT NULL,
  `total_7_sitios` decimal(42,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_productos_1a5_ventas_7sitios`
--

CREATE TABLE `xx_productos_1a5_ventas_7sitios` (
  `codigo_producto` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre_producto` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `premiumflorist_com` decimal(42,0) DEFAULT NULL,
  `premiumflorist_com_mx` decimal(42,0) DEFAULT NULL,
  `floreriasonline_com` decimal(42,0) DEFAULT NULL,
  `floresamexico_com_mx` decimal(42,0) DEFAULT NULL,
  `lafloreriademexico_com` decimal(42,0) DEFAULT NULL,
  `floreriasendf_com_mx` decimal(42,0) DEFAULT NULL,
  `floreriasguadalajara_com_mx` decimal(42,0) DEFAULT NULL,
  `total_7_sitios` decimal(42,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_productos_acordados`
--

CREATE TABLE `xx_productos_acordados` (
  `florist_id` int(11) DEFAULT NULL,
  `size` varchar(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `product` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_productos_activos`
--

CREATE TABLE `xx_productos_activos` (
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tamanio` bigint(20) NOT NULL,
  `tiene` int(1) NOT NULL,
  `lista` int(2) NOT NULL,
  `q_pedidos` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_productos_activos_2`
--

CREATE TABLE `xx_productos_activos_2` (
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tamanio` bigint(20) NOT NULL,
  `lista` int(2) NOT NULL,
  `nombre_lista` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_productos_activos_3`
--

CREATE TABLE `xx_productos_activos_3` (
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL,
  `nombre` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `q_pedidos` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_productos_mayor_a_5`
--

CREATE TABLE `xx_productos_mayor_a_5` (
  `codigo_producto` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre_producto` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pf` decimal(22,0) DEFAULT NULL,
  `pf_mx` decimal(22,0) DEFAULT NULL,
  `fam` decimal(22,0) DEFAULT NULL,
  `lfdm` decimal(22,0) DEFAULT NULL,
  `sitio_30` decimal(22,0) DEFAULT NULL,
  `otros` decimal(22,0) DEFAULT NULL,
  `total` decimal(23,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_productos_sin_acuerdo`
--

CREATE TABLE `xx_productos_sin_acuerdo` (
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `tamanio` bigint(20) NOT NULL,
  `detalle` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_proveedores`
--

CREATE TABLE `xx_proveedores` (
  `proveedorID` int(11) NOT NULL DEFAULT 0,
  `proveedorNombre` varchar(255) NOT NULL,
  `proveedorLatitud` text NOT NULL,
  `proveedorLongitud` text NOT NULL,
  `proveedorAcuerdoActivo` smallint(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_proveedoresNoTomar`
--

CREATE TABLE `xx_proveedoresNoTomar` (
  `proveedorID` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_proveedores_duplicados_en_telefonos`
--

CREATE TABLE `xx_proveedores_duplicados_en_telefonos` (
  `proveedorID` int(11) NOT NULL DEFAULT 0,
  `proveedorNombre` varchar(255) NOT NULL,
  `proveedorWhatsapp` text NOT NULL,
  `pedidos_ultimo_mes` bigint(21) DEFAULT NULL,
  `pedidos_ultimo_anio` bigint(21) DEFAULT NULL,
  `proveedorDireccion` varchar(255) NOT NULL,
  `ZonaPrincipal` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '',
  `OtrasZonas` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_proveedores_rosas`
--

CREATE TABLE `xx_proveedores_rosas` (
  `PROVEEDOR_ID` int(11) NOT NULL,
  `PROVEEDORNOMBRE` varchar(255) NOT NULL,
  `periodo` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `color1` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `q` decimal(24,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_proveedores_rosas_2`
--

CREATE TABLE `xx_proveedores_rosas_2` (
  `PROVEEDOR_ID` int(11) NOT NULL,
  `PROVEEDORNOMBRE` varchar(255) NOT NULL,
  `periodo` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ROJO` decimal(46,0) NOT NULL,
  `SALMON` decimal(46,0) NOT NULL,
  `AMARILLO` decimal(46,0) NOT NULL,
  `ROSADO` decimal(46,0) NOT NULL,
  `SURTIDO` decimal(46,0) NOT NULL,
  `BLANCO` decimal(46,0) NOT NULL,
  `NARANJA` decimal(46,0) NOT NULL,
  `VIOLETA` decimal(46,0) NOT NULL,
  `TOTAL_Unidades_de_ROSAS` decimal(46,0) NOT NULL,
  `TOTAL_PEDIDOS` bigint(21) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_a_borrar`
--

CREATE TABLE `xx_reporte_a_borrar` (
  `mail` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mail_valido` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ciudad` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono01` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `telefono02` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idioma` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `de_cuenta` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado_destino` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais_destino` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_nombre` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_apellido` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `UltimaFechaEntrega` date NOT NULL,
  `mensaje` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posible_madre` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_a_borrar1`
--

CREATE TABLE `xx_reporte_a_borrar1` (
  `mail` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mail_valido` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ciudad` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono01` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `telefono02` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idioma` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `de_cuenta` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado_destino` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais_destino` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_nombre` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_apellido` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `UltimaFechaEntrega` date NOT NULL,
  `mensaje` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posible` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_a_borrar_no_mexico`
--

CREATE TABLE `xx_reporte_a_borrar_no_mexico` (
  `mail` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mail_valido` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ciudad` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono01` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `telefono02` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idioma` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `de_cuenta` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado_destino` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais_destino` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_nombre` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_apellido` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `UltimaFechaEntrega` date NOT NULL,
  `mensaje` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posible` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `did` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_a_borrar_usa`
--

CREATE TABLE `xx_reporte_a_borrar_usa` (
  `mail` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mail_valido` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ciudad` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `telefono01` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `telefono02` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idioma` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `de_cuenta` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado_destino` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais_destino` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_nombre` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_apellido` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `UltimaFechaEntrega` date NOT NULL,
  `mensaje` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posible_madre` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_costo_whatsappp`
--

CREATE TABLE `xx_reporte_costo_whatsappp` (
  `pais_normalizado` varchar(14) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `costo` decimal(25,4) NOT NULL,
  `total_mensajes` bigint(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_dia_del_amor_y_amistad_pf`
--

CREATE TABLE `xx_reporte_dia_del_amor_y_amistad_pf` (
  `mail` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mail_valido` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ciudad` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono01` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `telefono02` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idioma` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `de_cuenta` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado_destino` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais_destino` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_nombre` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_apellido` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `UltimaFechaEntrega` date NOT NULL,
  `mensaje` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posible` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `did` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_fiesta_fin_anio`
--

CREATE TABLE `xx_reporte_fiesta_fin_anio` (
  `mail` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mail_valido` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ciudad` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono01` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `telefono02` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idioma` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `de_cuenta` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado_destino` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais_destino` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_nombre` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_apellido` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `UltimaFechaEntrega` date NOT NULL,
  `mensaje` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posible` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `did` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_flores_amarillas`
--

CREATE TABLE `xx_reporte_flores_amarillas` (
  `mail` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mail_valido` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ciudad` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono01` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `telefono02` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idioma` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `de_cuenta` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado_destino` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais_destino` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_nombre` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_apellido` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `UltimaFechaEntrega` date NOT NULL,
  `mensaje` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posible` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `did` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_flores_amarillas_pf`
--

CREATE TABLE `xx_reporte_flores_amarillas_pf` (
  `mail` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `mail_valido` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `nombre` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `ciudad` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono01` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `telefono02` char(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `idioma` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `de_cuenta` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `estado_destino` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `pais_destino` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_nombre` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `destinatario_apellido` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `UltimaFechaEntrega` date NOT NULL,
  `mensaje` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `posible` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `did` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_reporte_ventas_tipo_producto`
--

CREATE TABLE `xx_reporte_ventas_tipo_producto` (
  `nombre` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `periodo` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidad` bigint(21) NOT NULL,
  `reclamos` decimal(22,0) DEFAULT NULL,
  `reprogramaciones` decimal(22,0) DEFAULT NULL,
  `anulaciones` decimal(22,0) DEFAULT NULL,
  `calidad_verificada` decimal(22,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_robot_aborrar`
--

CREATE TABLE `xx_robot_aborrar` (
  `intermediario` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `robot` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `response` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_tabla_para_analisis`
--

CREATE TABLE `xx_tabla_para_analisis` (
  `NUEVA` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `name_pf` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `type` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alias` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `valor_flete_ef` decimal(10,2) NOT NULL DEFAULT 0.00,
  `valor_flete_pf` decimal(10,2) NOT NULL DEFAULT 0.00,
  `variacion_de_precio` float DEFAULT NULL,
  `productos_ef` bigint(21) DEFAULT NULL,
  `productos_pf` bigint(21) DEFAULT NULL,
  `productos_todos_pf` bigint(21) DEFAULT NULL,
  `id_zona_padre` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `zona_padre` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `formatted_address_google_map` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_ventas_202410_interanual`
--

CREATE TABLE `xx_ventas_202410_interanual` (
  `de_cuenta` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `venta23` decimal(28,2) DEFAULT NULL,
  `venta24` decimal(28,2) DEFAULT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_pais` int(11),
  `variacion` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `porcentaje` decimal(38,6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_wp_aborrar`
--

CREATE TABLE `xx_wp_aborrar` (
  `id` bigint(20) DEFAULT NULL,
  `did` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zonas`
--

CREATE TABLE `xx_zonas` (
  `alias` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correo_florista` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zonas_202502`
--

CREATE TABLE `xx_zonas_202502` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `correo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correo_florista` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zonas_calientes_de_entrega`
--

CREATE TABLE `xx_zonas_calientes_de_entrega` (
  `zona` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zonas_de_alta_entrega`
--

CREATE TABLE `xx_zonas_de_alta_entrega` (
  `destid` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `zone_aprox_google_map` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `q` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zonas_de_alta_entrega2`
--

CREATE TABLE `xx_zonas_de_alta_entrega2` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `lat` double NOT NULL DEFAULT 0,
  `lng` double NOT NULL DEFAULT 0,
  `ciudad` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `zone_aprox_google_map` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `q` decimal(53,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zonas_de_alta_entrega3`
--

CREATE TABLE `xx_zonas_de_alta_entrega3` (
  `id` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `lat` double NOT NULL DEFAULT 0,
  `lng` double NOT NULL DEFAULT 0,
  `ciudad` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `zona` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `q` decimal(53,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zonas_dia_de_enamorados`
--

CREATE TABLE `xx_zonas_dia_de_enamorados` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `correo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correo_florista` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zonas_fecha_especial`
--

CREATE TABLE `xx_zonas_fecha_especial` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `correo` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correo_florista` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zonas_regiones`
--

CREATE TABLE `xx_zonas_regiones` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `nombre` char(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `region_id` int(11) NOT NULL,
  `code` varchar(10)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zona_productos_tabla_nueva`
--

CREATE TABLE `xx_zona_productos_tabla_nueva` (
  `zppZona` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `id_productos` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xx_zona_productos_tabla_vieja`
--

CREATE TABLE `xx_zona_productos_tabla_vieja` (
  `zppZona` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `id_productos` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zipcodes`
--

CREATE TABLE `zipcodes` (
  `zipID` int(11) NOT NULL,
  `id_pais` int(11) DEFAULT NULL,
  `zipCode` bigint(20) NOT NULL,
  `zipType` varchar(20) NOT NULL,
  `zipCity` varchar(40) NOT NULL,
  `zipCity2` varchar(200) DEFAULT NULL,
  `zipCity3` varchar(200) DEFAULT NULL,
  `zipCity4` varchar(200) DEFAULT NULL,
  `zipState` varchar(2) NOT NULL,
  `id_zona` int(11) DEFAULT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `json_google_maps` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zipcodes_aborrar`
--

CREATE TABLE `zipcodes_aborrar` (
  `zipID` int(11) NOT NULL,
  `id_pais` int(11) DEFAULT NULL,
  `zipCode` bigint(20) NOT NULL,
  `zipType` varchar(20) NOT NULL,
  `zipCity` varchar(40) NOT NULL,
  `zipCity2` varchar(200) DEFAULT NULL,
  `zipCity3` varchar(200) DEFAULT NULL,
  `zipCity4` varchar(200) DEFAULT NULL,
  `zipState` varchar(2) NOT NULL,
  `id_zona` int(11) DEFAULT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `json_google_maps` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zipcode_cerrados`
--

CREATE TABLE `zipcode_cerrados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(60) DEFAULT NULL,
  `timezone` varchar(2048) NOT NULL,
  `zipcode` varchar(2048) NOT NULL,
  `fecha` date NOT NULL,
  `desde` date NOT NULL,
  `hasta` date NOT NULL,
  `mensaje` varchar(100) NOT NULL,
  `permite_fedex` bit(1) NOT NULL,
  `opcion_fedex` int(11) DEFAULT NULL,
  `tipo` enum('fedex','florista','ambos') NOT NULL DEFAULT 'ambos',
  `operador` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas`
--

CREATE TABLE `zonas` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_zona_padre` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `id_zona_principal` int(6) NOT NULL,
  `alias` varchar(60) NOT NULL,
  `alias_es` varchar(60) DEFAULT NULL,
  `alias_en` varchar(60) DEFAULT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `price_list_id` int(11) NOT NULL,
  `nombre` char(250) NOT NULL DEFAULT '',
  `type` enum('state','top','base') DEFAULT NULL,
  `destacada` char(2) NOT NULL DEFAULT '',
  `show_view` varchar(15) NOT NULL COMMENT 'En que vista se visualiza.',
  `navegabilidad` char(2) NOT NULL DEFAULT '',
  `searchable` char(2) NOT NULL,
  `tipo_zona` enum('state','city','neighborhood','place') NOT NULL,
  `es_cosmetica_de_id` int(11) DEFAULT NULL,
  `t_show_hijos` char(3) NOT NULL DEFAULT 'AM' COMMENT 'TYPE:NN,NA,AM,NI;No navegable, Navegable, Ambos, Ninguno;',
  `nodisponible` bit(1) NOT NULL,
  `nodisponible_desde` date DEFAULT NULL,
  `nodisponible_hasta` date DEFAULT NULL,
  `nodisponible_mensaje` varchar(200) DEFAULT NULL,
  `no_disponible_aplica_mensaje_pf` enum('si','no') NOT NULL DEFAULT 'no',
  `valor_flete` decimal(6,2) NOT NULL DEFAULT 0.00,
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `condolencias` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_florales` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `t_set_hijos_destinatario` varchar(3) NOT NULL DEFAULT 'ZM' COMMENT 'ZM=Zona+Misma&HI=Zonas+Hijas&PNA=Pais+Navegable&PNN=PaisNoNav',
  `b_hereda_padre` char(1) NOT NULL DEFAULT 'S',
  `etiqueta_nombre` varchar(256) DEFAULT NULL,
  `etiqueta_titulo` varchar(256) NOT NULL,
  `etiqueta_descripcion` varchar(256) NOT NULL,
  `etiqueta_top` varchar(256) NOT NULL,
  `etiqueta_top2` varchar(256) NOT NULL,
  `etiqueta_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_top` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom2` varchar(256) DEFAULT NULL,
  `alias_fam` varchar(300) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `formatted_address_google_map` varchar(500) NOT NULL,
  `path_google_map` varchar(500) NOT NULL,
  `json_google_maps` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `distancia_punto_de_referencia` int(11) DEFAULT NULL,
  `source_geo` enum('GoogleMap','OpenStreetMap','Importacion','Otros') NOT NULL,
  `etiqueta_h2` varchar(256) DEFAULT NULL,
  `etiqueta_h2_mobile` varchar(256) DEFAULT NULL,
  `etiqueta_description` varchar(256) DEFAULT NULL,
  `etiqueta_fecha_especial` varchar(100) NOT NULL,
  `cierra_sabado` bit(1) NOT NULL,
  `cierra_domingo` bit(1) NOT NULL,
  `correo` varchar(200) DEFAULT NULL,
  `correo_florista` varchar(200) DEFAULT NULL,
  `timezone` varchar(500) DEFAULT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0,
  `type_of_schedule` enum('standard','reduced_hours') NOT NULL DEFAULT 'standard',
  `nombre_estado` varchar(500) NOT NULL,
  `nombre_ciudad` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `pais_catalogo` int(6) NOT NULL DEFAULT 0,
  `zona_catalogo` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Disparadores `zonas`
--
DELIMITER $$
CREATE TRIGGER `trg_zonas_before_insert` BEFORE INSERT ON `zonas` FOR EACH ROW BEGIN
  DECLARE v_pais_cat INT;
  DECLARE v_zona_cat INT;

  SELECT
    IF(pa.take_country_products = pa.id, NEW.pais,     pa.take_country_products),
    IF(pa.take_country_products = pa.id, NEW.id_zonas, pa.take_area_products)
  INTO v_pais_cat, v_zona_cat
  FROM countries pa WHERE pa.id = NEW.pais;

  SET NEW.pais_catalogo = v_pais_cat;
  SET NEW.zona_catalogo = v_zona_cat;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas1`
--

CREATE TABLE `zonas1` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_zona_padre` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `id_zona_principal` int(6) NOT NULL,
  `alias` varchar(60) NOT NULL,
  `alias_es` varchar(60) DEFAULT NULL,
  `alias_en` varchar(60) DEFAULT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `nombre` char(250) NOT NULL DEFAULT '',
  `destacada` char(2) NOT NULL DEFAULT '',
  `show_view` varchar(15) NOT NULL COMMENT 'En que vista se visualiza.',
  `navegabilidad` char(2) NOT NULL DEFAULT '',
  `t_show_hijos` char(3) NOT NULL DEFAULT 'AM' COMMENT 'TYPE:NN,NA,AM,NI;No navegable, Navegable, Ambos, Ninguno;',
  `nodisponible` bit(1) NOT NULL,
  `nodisponible_desde` date DEFAULT NULL,
  `nodisponible_hasta` date DEFAULT NULL,
  `nodisponible_mensaje` varchar(200) DEFAULT NULL,
  `no_disponible_aplica_mensaje_pf` enum('si','no') NOT NULL DEFAULT 'no',
  `valor_flete` decimal(6,2) NOT NULL DEFAULT 0.00,
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `condolencias` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_florales` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `t_set_hijos_destinatario` varchar(3) NOT NULL DEFAULT 'ZM' COMMENT 'ZM=Zona+Misma&HI=Zonas+Hijas&PNA=Pais+Navegable&PNN=PaisNoNav',
  `b_hereda_padre` char(1) NOT NULL DEFAULT 'S',
  `etiqueta_nombre` varchar(256) DEFAULT NULL,
  `etiqueta_titulo` varchar(256) NOT NULL,
  `etiqueta_descripcion` varchar(256) NOT NULL,
  `etiqueta_top` varchar(256) NOT NULL,
  `etiqueta_top2` varchar(256) NOT NULL,
  `etiqueta_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_top` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom2` varchar(256) DEFAULT NULL,
  `alias_fam` varchar(300) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `formatted_address_google_map` varchar(500) NOT NULL,
  `json_google_maps` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `source_geo` enum('GoogleMap','OpenStreetMap','Importacion','Otros') NOT NULL,
  `etiqueta_h2` varchar(256) DEFAULT NULL,
  `etiqueta_h2_mobile` varchar(256) DEFAULT NULL,
  `etiqueta_description` varchar(256) DEFAULT NULL,
  `etiqueta_fecha_especial` varchar(100) NOT NULL,
  `cierra_sabado` bit(1) NOT NULL,
  `cierra_domingo` bit(1) NOT NULL,
  `correo` varchar(200) DEFAULT NULL,
  `correo_florista` varchar(200) DEFAULT NULL,
  `timezone` varchar(500) DEFAULT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `zonasParaAnalytics`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `zonasParaAnalytics` (
`condicion` mediumtext
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_70_sin_proveedor`
--

CREATE TABLE `zonas_70_sin_proveedor` (
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `zone_aprox_google_map` varchar(500) DEFAULT NULL,
  `km` int(11) DEFAULT NULL,
  `tipo_proveedor` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_70_sin_proveedor_2km`
--

CREATE TABLE `zonas_70_sin_proveedor_2km` (
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `zone_aprox_google_map` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_70_sin_proveedor_50km`
--

CREATE TABLE `zonas_70_sin_proveedor_50km` (
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `zone_aprox_google_map` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_202502`
--

CREATE TABLE `zonas_202502` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_zona_padre` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `id_zona_principal` int(6) NOT NULL,
  `alias` varchar(60) NOT NULL,
  `alias_es` varchar(60) DEFAULT NULL,
  `alias_en` varchar(60) DEFAULT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `nombre` char(250) NOT NULL DEFAULT '',
  `type` enum('state','top','base') DEFAULT NULL,
  `destacada` char(2) NOT NULL DEFAULT '',
  `show_view` varchar(15) NOT NULL COMMENT 'En que vista se visualiza.',
  `navegabilidad` char(2) NOT NULL DEFAULT '',
  `searchable` char(2) NOT NULL,
  `tipo_zona` enum('state','city','neighborhood','place') NOT NULL,
  `es_cosmetica_de_id` int(11) DEFAULT NULL,
  `t_show_hijos` char(3) NOT NULL DEFAULT 'AM' COMMENT 'TYPE:NN,NA,AM,NI;No navegable, Navegable, Ambos, Ninguno;',
  `nodisponible` bit(1) NOT NULL,
  `nodisponible_desde` date DEFAULT NULL,
  `nodisponible_hasta` date DEFAULT NULL,
  `nodisponible_mensaje` varchar(200) DEFAULT NULL,
  `no_disponible_aplica_mensaje_pf` enum('si','no') NOT NULL DEFAULT 'no',
  `valor_flete` decimal(6,2) NOT NULL DEFAULT 0.00,
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `condolencias` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_florales` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `t_set_hijos_destinatario` varchar(3) NOT NULL DEFAULT 'ZM' COMMENT 'ZM=Zona+Misma&HI=Zonas+Hijas&PNA=Pais+Navegable&PNN=PaisNoNav',
  `b_hereda_padre` char(1) NOT NULL DEFAULT 'S',
  `etiqueta_nombre` varchar(256) DEFAULT NULL,
  `etiqueta_titulo` varchar(256) NOT NULL,
  `etiqueta_descripcion` varchar(256) NOT NULL,
  `etiqueta_top` varchar(256) NOT NULL,
  `etiqueta_top2` varchar(256) NOT NULL,
  `etiqueta_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_top` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom2` varchar(256) DEFAULT NULL,
  `alias_fam` varchar(300) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `formatted_address_google_map` varchar(500) NOT NULL,
  `path_google_map` varchar(500) NOT NULL,
  `json_google_maps` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `distancia_punto_de_referencia` int(11) DEFAULT NULL,
  `source_geo` enum('GoogleMap','OpenStreetMap','Importacion','Otros') NOT NULL,
  `etiqueta_h2` varchar(256) DEFAULT NULL,
  `etiqueta_h2_mobile` varchar(256) DEFAULT NULL,
  `etiqueta_description` varchar(256) DEFAULT NULL,
  `etiqueta_fecha_especial` varchar(100) NOT NULL,
  `cierra_sabado` bit(1) NOT NULL,
  `cierra_domingo` bit(1) NOT NULL,
  `correo` varchar(200) DEFAULT NULL,
  `correo_florista` varchar(200) DEFAULT NULL,
  `timezone` varchar(500) DEFAULT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0,
  `type_of_schedule` enum('standard','reduced_hours') NOT NULL DEFAULT 'standard',
  `nombre_estado` varchar(500) NOT NULL,
  `nombre_ciudad` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_20250217`
--

CREATE TABLE `zonas_20250217` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_zona_padre` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `id_zona_principal` int(6) NOT NULL,
  `alias` varchar(60) NOT NULL,
  `alias_es` varchar(60) DEFAULT NULL,
  `alias_en` varchar(60) DEFAULT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `nombre` char(250) NOT NULL DEFAULT '',
  `type` enum('state','top','base') DEFAULT NULL,
  `destacada` char(2) NOT NULL DEFAULT '',
  `show_view` varchar(15) NOT NULL COMMENT 'En que vista se visualiza.',
  `navegabilidad` char(2) NOT NULL DEFAULT '',
  `searchable` char(2) NOT NULL,
  `tipo_zona` enum('state','city','neighborhood','place') NOT NULL,
  `es_cosmetica_de_id` int(11) DEFAULT NULL,
  `t_show_hijos` char(3) NOT NULL DEFAULT 'AM' COMMENT 'TYPE:NN,NA,AM,NI;No navegable, Navegable, Ambos, Ninguno;',
  `nodisponible` bit(1) NOT NULL,
  `nodisponible_desde` date DEFAULT NULL,
  `nodisponible_hasta` date DEFAULT NULL,
  `nodisponible_mensaje` varchar(200) DEFAULT NULL,
  `no_disponible_aplica_mensaje_pf` enum('si','no') NOT NULL DEFAULT 'no',
  `valor_flete` decimal(6,2) NOT NULL DEFAULT 0.00,
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `condolencias` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_florales` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `t_set_hijos_destinatario` varchar(3) NOT NULL DEFAULT 'ZM' COMMENT 'ZM=Zona+Misma&HI=Zonas+Hijas&PNA=Pais+Navegable&PNN=PaisNoNav',
  `b_hereda_padre` char(1) NOT NULL DEFAULT 'S',
  `etiqueta_nombre` varchar(256) DEFAULT NULL,
  `etiqueta_titulo` varchar(256) NOT NULL,
  `etiqueta_descripcion` varchar(256) NOT NULL,
  `etiqueta_top` varchar(256) NOT NULL,
  `etiqueta_top2` varchar(256) NOT NULL,
  `etiqueta_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_top` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom2` varchar(256) DEFAULT NULL,
  `alias_fam` varchar(300) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `formatted_address_google_map` varchar(500) NOT NULL,
  `path_google_map` varchar(500) NOT NULL,
  `json_google_maps` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `distancia_punto_de_referencia` int(11) DEFAULT NULL,
  `source_geo` enum('GoogleMap','OpenStreetMap','Importacion','Otros') NOT NULL,
  `etiqueta_h2` varchar(256) DEFAULT NULL,
  `etiqueta_h2_mobile` varchar(256) DEFAULT NULL,
  `etiqueta_description` varchar(256) DEFAULT NULL,
  `etiqueta_fecha_especial` varchar(100) NOT NULL,
  `cierra_sabado` bit(1) NOT NULL,
  `cierra_domingo` bit(1) NOT NULL,
  `correo` varchar(200) DEFAULT NULL,
  `correo_florista` varchar(200) DEFAULT NULL,
  `timezone` varchar(500) DEFAULT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0,
  `type_of_schedule` enum('standard','reduced_hours') NOT NULL DEFAULT 'standard',
  `nombre_estado` varchar(500) NOT NULL,
  `nombre_ciudad` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_backup20250210`
--

CREATE TABLE `zonas_backup20250210` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_zona_padre` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `id_zona_principal` int(6) NOT NULL,
  `alias` varchar(60) NOT NULL,
  `alias_es` varchar(60) DEFAULT NULL,
  `alias_en` varchar(60) DEFAULT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `nombre` char(250) NOT NULL DEFAULT '',
  `type` enum('state','top','base') DEFAULT NULL,
  `destacada` char(2) NOT NULL DEFAULT '',
  `show_view` varchar(15) NOT NULL COMMENT 'En que vista se visualiza.',
  `navegabilidad` char(2) NOT NULL DEFAULT '',
  `searchable` char(2) NOT NULL,
  `tipo_zona` enum('state','city','neighborhood','place') NOT NULL,
  `es_cosmetica_de_id` int(11) DEFAULT NULL,
  `t_show_hijos` char(3) NOT NULL DEFAULT 'AM' COMMENT 'TYPE:NN,NA,AM,NI;No navegable, Navegable, Ambos, Ninguno;',
  `nodisponible` bit(1) NOT NULL,
  `nodisponible_desde` date DEFAULT NULL,
  `nodisponible_hasta` date DEFAULT NULL,
  `nodisponible_mensaje` varchar(200) DEFAULT NULL,
  `no_disponible_aplica_mensaje_pf` enum('si','no') NOT NULL DEFAULT 'no',
  `valor_flete` decimal(6,2) NOT NULL DEFAULT 0.00,
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `condolencias` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_florales` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `t_set_hijos_destinatario` varchar(3) NOT NULL DEFAULT 'ZM' COMMENT 'ZM=Zona+Misma&HI=Zonas+Hijas&PNA=Pais+Navegable&PNN=PaisNoNav',
  `b_hereda_padre` char(1) NOT NULL DEFAULT 'S',
  `etiqueta_nombre` varchar(256) DEFAULT NULL,
  `etiqueta_titulo` varchar(256) NOT NULL,
  `etiqueta_descripcion` varchar(256) NOT NULL,
  `etiqueta_top` varchar(256) NOT NULL,
  `etiqueta_top2` varchar(256) NOT NULL,
  `etiqueta_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_top` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom2` varchar(256) DEFAULT NULL,
  `alias_fam` varchar(300) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `formatted_address_google_map` varchar(500) NOT NULL,
  `path_google_map` varchar(500) NOT NULL,
  `json_google_maps` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `distancia_punto_de_referencia` int(11) DEFAULT NULL,
  `source_geo` enum('GoogleMap','OpenStreetMap','Importacion','Otros') NOT NULL,
  `etiqueta_h2` varchar(256) DEFAULT NULL,
  `etiqueta_h2_mobile` varchar(256) DEFAULT NULL,
  `etiqueta_description` varchar(256) DEFAULT NULL,
  `etiqueta_fecha_especial` varchar(100) NOT NULL,
  `cierra_sabado` bit(1) NOT NULL,
  `cierra_domingo` bit(1) NOT NULL,
  `correo` varchar(200) DEFAULT NULL,
  `correo_florista` varchar(200) DEFAULT NULL,
  `timezone` varchar(500) DEFAULT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0,
  `type_of_schedule` enum('standard','reduced_hours') NOT NULL DEFAULT 'standard',
  `nombre_estado` varchar(500) NOT NULL,
  `nombre_ciudad` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_bu`
--

CREATE TABLE `zonas_bu` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_zona_padre` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `alias` varchar(60) NOT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `nombre` char(250) NOT NULL DEFAULT '',
  `destacada` char(2) NOT NULL DEFAULT '',
  `show_view` varchar(15) NOT NULL COMMENT 'En que vista se visualiza.',
  `navegabilidad` char(2) NOT NULL DEFAULT '',
  `t_show_hijos` char(3) NOT NULL DEFAULT 'AM' COMMENT 'TYPE:NN,NA,AM,NI;No navegable, Navegable, Ambos, Ninguno;',
  `valor_flete` decimal(6,2) NOT NULL DEFAULT 0.00,
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `condolencias` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_florales` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `t_set_hijos_destinatario` varchar(3) NOT NULL DEFAULT 'ZM' COMMENT 'ZM=Zona+Misma&HI=Zonas+Hijas&PNA=Pais+Navegable&PNN=PaisNoNav',
  `b_hereda_padre` char(1) NOT NULL DEFAULT 'S',
  `etiqueta_nombre` varchar(256) DEFAULT NULL,
  `etiqueta_titulo` varchar(256) NOT NULL,
  `etiqueta_top` varchar(256) NOT NULL,
  `etiqueta_top2` varchar(256) NOT NULL,
  `etiqueta_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_top` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom2` varchar(256) DEFAULT NULL,
  `alias_fam` varchar(300) NOT NULL,
  `latitud` varchar(50) NOT NULL,
  `longitud` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_fecha_especial`
--

CREATE TABLE `zonas_fecha_especial` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_zona_padre` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `id_zona_principal` int(6) NOT NULL,
  `alias` varchar(60) NOT NULL,
  `alias_es` varchar(60) DEFAULT NULL,
  `alias_en` varchar(60) DEFAULT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `nombre` char(250) NOT NULL DEFAULT '',
  `destacada` char(2) NOT NULL DEFAULT '',
  `show_view` varchar(15) NOT NULL COMMENT 'En que vista se visualiza.',
  `navegabilidad` char(2) NOT NULL DEFAULT '',
  `t_show_hijos` char(3) NOT NULL DEFAULT 'AM' COMMENT 'TYPE:NN,NA,AM,NI;No navegable, Navegable, Ambos, Ninguno;',
  `nodisponible` bit(1) NOT NULL,
  `nodisponible_desde` date DEFAULT NULL,
  `nodisponible_hasta` date DEFAULT NULL,
  `nodisponible_mensaje` varchar(200) DEFAULT NULL,
  `no_disponible_aplica_mensaje_pf` enum('si','no') NOT NULL DEFAULT 'no',
  `valor_flete` decimal(6,2) NOT NULL DEFAULT 0.00,
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `condolencias` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_florales` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `t_set_hijos_destinatario` varchar(3) NOT NULL DEFAULT 'ZM' COMMENT 'ZM=Zona+Misma&HI=Zonas+Hijas&PNA=Pais+Navegable&PNN=PaisNoNav',
  `b_hereda_padre` char(1) NOT NULL DEFAULT 'S',
  `etiqueta_nombre` varchar(256) DEFAULT NULL,
  `etiqueta_titulo` varchar(256) NOT NULL,
  `etiqueta_descripcion` varchar(256) NOT NULL,
  `etiqueta_top` varchar(256) NOT NULL,
  `etiqueta_top2` varchar(256) NOT NULL,
  `etiqueta_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_top` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom2` varchar(256) DEFAULT NULL,
  `alias_fam` varchar(300) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `formatted_address_google_map` varchar(500) NOT NULL,
  `json_google_maps` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `source_geo` enum('GoogleMap','OpenStreetMap','Importacion','Otros') NOT NULL,
  `etiqueta_h2` varchar(256) DEFAULT NULL,
  `etiqueta_h2_mobile` varchar(256) DEFAULT NULL,
  `etiqueta_description` varchar(256) DEFAULT NULL,
  `etiqueta_fecha_especial` varchar(100) NOT NULL,
  `cierra_sabado` bit(1) NOT NULL,
  `cierra_domingo` bit(1) NOT NULL,
  `correo` varchar(200) DEFAULT NULL,
  `correo_florista` varchar(200) DEFAULT NULL,
  `timezone` varchar(500) DEFAULT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_fecha_normal`
--

CREATE TABLE `zonas_fecha_normal` (
  `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL,
  `id_zona_padre` int(6) UNSIGNED ZEROFILL DEFAULT NULL,
  `id_zona_principal` int(6) NOT NULL,
  `alias` varchar(60) NOT NULL,
  `alias_es` varchar(60) DEFAULT NULL,
  `alias_en` varchar(60) DEFAULT NULL,
  `pais` int(6) NOT NULL DEFAULT 0,
  `nombre` char(250) NOT NULL DEFAULT '',
  `destacada` char(2) NOT NULL DEFAULT '',
  `show_view` varchar(15) NOT NULL COMMENT 'En que vista se visualiza.',
  `navegabilidad` char(2) NOT NULL DEFAULT '',
  `tipo_zona` enum('state','city','neighborhood','place') NOT NULL,
  `es_cosmetica_de_id` int(11) DEFAULT NULL,
  `t_show_hijos` char(3) NOT NULL DEFAULT 'AM' COMMENT 'TYPE:NN,NA,AM,NI;No navegable, Navegable, Ambos, Ninguno;',
  `nodisponible` bit(1) NOT NULL,
  `nodisponible_desde` date DEFAULT NULL,
  `nodisponible_hasta` date DEFAULT NULL,
  `nodisponible_mensaje` varchar(200) DEFAULT NULL,
  `no_disponible_aplica_mensaje_pf` enum('si','no') NOT NULL DEFAULT 'no',
  `valor_flete` decimal(6,2) NOT NULL DEFAULT 0.00,
  `cumpleannos` char(2) NOT NULL DEFAULT '',
  `nacimiento` char(2) NOT NULL DEFAULT '',
  `romance` char(2) NOT NULL DEFAULT '',
  `aniversario` char(2) NOT NULL DEFAULT '',
  `agradecimiento` char(2) NOT NULL DEFAULT '',
  `bodas` char(2) NOT NULL DEFAULT '',
  `condolencias` char(2) NOT NULL DEFAULT '',
  `rosas` char(2) NOT NULL DEFAULT '',
  `surtidas` char(2) NOT NULL DEFAULT '',
  `margaritas` char(2) NOT NULL DEFAULT '',
  `asucenas` char(2) NOT NULL DEFAULT '',
  `girasoles` char(2) NOT NULL DEFAULT '',
  `desayunos` char(2) NOT NULL DEFAULT '',
  `frutas` char(2) NOT NULL DEFAULT '',
  `lirios` char(2) NOT NULL DEFAULT '',
  `arreglos_florales` char(2) NOT NULL DEFAULT '',
  `navidad` char(2) NOT NULL DEFAULT '',
  `annonuevo` char(2) NOT NULL DEFAULT '',
  `orquideas` char(2) NOT NULL DEFAULT '',
  `canastas` char(2) NOT NULL DEFAULT '',
  `t_set_hijos_destinatario` varchar(3) NOT NULL DEFAULT 'ZM' COMMENT 'ZM=Zona+Misma&HI=Zonas+Hijas&PNA=Pais+Navegable&PNN=PaisNoNav',
  `b_hereda_padre` char(1) NOT NULL DEFAULT 'S',
  `etiqueta_nombre` varchar(256) DEFAULT NULL,
  `etiqueta_titulo` varchar(256) NOT NULL,
  `etiqueta_descripcion` varchar(256) NOT NULL,
  `etiqueta_top` varchar(256) NOT NULL,
  `etiqueta_top2` varchar(256) NOT NULL,
  `etiqueta_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_top` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom` varchar(256) NOT NULL,
  `etiqueta_destacado_bottom2` varchar(256) DEFAULT NULL,
  `alias_fam` varchar(300) NOT NULL,
  `latitud` double NOT NULL,
  `longitud` double NOT NULL,
  `formatted_address_google_map` varchar(500) NOT NULL,
  `json_google_maps` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `source_geo` enum('GoogleMap','OpenStreetMap','Importacion','Otros') NOT NULL,
  `etiqueta_h2` varchar(256) DEFAULT NULL,
  `etiqueta_h2_mobile` varchar(256) DEFAULT NULL,
  `etiqueta_description` varchar(256) DEFAULT NULL,
  `etiqueta_fecha_especial` varchar(100) NOT NULL,
  `cierra_sabado` bit(1) NOT NULL,
  `cierra_domingo` bit(1) NOT NULL,
  `correo` varchar(200) DEFAULT NULL,
  `correo_florista` varchar(200) DEFAULT NULL,
  `timezone` varchar(500) DEFAULT NULL,
  `sales_of_last_thirty_days` int(11) NOT NULL DEFAULT 0,
  `type_of_schedule` enum('standard','reduced_hours') NOT NULL DEFAULT 'standard',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_nodisponibles`
--

CREATE TABLE `zonas_nodisponibles` (
  `id` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `id_zona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_populares`
--

CREATE TABLE `zonas_populares` (
  `zona_id` decimal(10,0) NOT NULL,
  `nombre_zona` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `q` bigint(21) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_por_producto`
--

CREATE TABLE `zonas_por_producto` (
  `zppID` int(11) NOT NULL,
  `zppZona` int(6) NOT NULL,
  `zppProducto` int(6) NOT NULL,
  `puntaje` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zonas_sin_proveedor`
--

CREATE TABLE `zonas_sin_proveedor` (
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `zone_aprox_google_map` varchar(500) DEFAULT NULL,
  `km` int(11) DEFAULT NULL,
  `tipo_proveedor` varchar(20) DEFAULT NULL,
  `porcentual` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zooz_apis`
--

CREATE TABLE `zooz_apis` (
  `id` int(11) NOT NULL,
  `appid` varchar(400) NOT NULL,
  `appname` varchar(400) NOT NULL,
  `id_cuenta` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `zooz_trx`
--

CREATE TABLE `zooz_trx` (
  `id` int(11) NOT NULL,
  `pedido` int(11) NOT NULL,
  `trxID` varchar(300) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `z_descuentos_originales`
--

CREATE TABLE `z_descuentos_originales` (
  `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL DEFAULT 000000,
  `descuento_ch` decimal(4,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Estructura para la vista `A/B`
--
DROP TABLE IF EXISTS `A/B`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `A/B`  AS SELECT `AB`.`id` AS `id`, `AB`.`id_cuenta` AS `id_cuenta`, `AB`.`pais` AS `pais`, `AB`.`idioma` AS `idioma`, `AB`.`AB` AS `AB`, `AB`.`AB` AS `A/B`, `AB`.`Fecha` AS `Fecha`, `AB`.`Xyz` AS `Xyz` FROM `AB` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `archiculo`
--
DROP TABLE IF EXISTS `archiculo`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `archiculo`  AS SELECT 'productos' AS `tipo`, concat('PR-',`productos`.`id_productos`) AS `id_productos`, `productos`.`nombre` AS `nombre`, `productos`.`precio_ch` AS `precio_ch`, `productos`.`precio_m` AS `precio_m`, `productos`.`precio_g` AS `precio_g`, `productos`.`zonas` AS `zonas`, `productos`.`categorias` AS `categorias`, `productos`.`pais` AS `pais`, `productos`.`id_linea_producto` AS `id_linea_producto` FROM `productos`union all select 'adicionales' AS `tipo`,concat('AD-',`adicionales`.`id_adicionales`) AS `id_productos`,`adicionales`.`nombre` AS `nombre`,`adicionales`.`precio_ch` AS `precio_ch`,`adicionales`.`precio_m` AS `precio_m`,`adicionales`.`precio_g` AS `precio_g`,`adicionales`.`zonas` AS `zonas`,'000001;' AS `categorias`,`adicionales`.`pais` AS `pais`,`adicionales`.`id_linea_producto` AS `id_linea_producto` from `adicionales`  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `CostosPromedioPorProveedor`
--
DROP TABLE IF EXISTS `CostosPromedioPorProveedor`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `CostosPromedioPorProveedor`  AS SELECT `pr`.`id_pais` AS `id_pais`, `pr`.`id_zonas` AS `id_zonas`, `pr`.`id_productos` AS `id_productos`, `pt`.`descripcion` AS `descripcion`, `pt`.`descripcion_ingles` AS `descripcion_ingles`, `p`.`proveedorNombre` AS `proveedorNombre`, `z`.`nombre` AS `NombreZona`, `pr`.`MinCosto` AS `MinCosto`, `pr`.`MaxCosto` AS `MaxCosto`, `pr`.`PromedioCosto` AS `PromedioCosto`, `pr`.`CantPedidos` AS `CantPedidos`, `upc`.`Costo` AS `UltimoCosto` FROM ((((((select `pc`.`id_pais` AS `id_pais`,`pc`.`id_zonas` AS `id_zonas`,`pc`.`id_productos` AS `id_productos`,`pc`.`descripcionTamanio` AS `descripcionTamanio`,`pc`.`proveedor` AS `proveedor`,min(`pc`.`Costo`) AS `MinCosto`,max(`pc`.`Costo`) AS `MaxCosto`,avg(`pc`.`Costo`) AS `PromedioCosto`,count(0) AS `CantPedidos`,max(`pc`.`id_pedido`) AS `ultimoPedido` from `t_pedidos_costos` `pc` group by `pc`.`id_pais`,`pc`.`id_zonas`,`pc`.`id_productos`,`pc`.`descripcionTamanio`,`pc`.`proveedor`)) `pr` join `proveedores` `p` on(`p`.`proveedorID` = `pr`.`proveedor`)) join `zonas` `z` on(`z`.`id_zonas` = `pr`.`id_zonas`)) join `t_pedidos_costos` `upc` on(`upc`.`id_pedido` = `pr`.`ultimoPedido`)) join `t_productos_tamanios` `pt` on(`pt`.`id_productos` = `pr`.`id_productos` and `pr`.`descripcionTamanio` in (`pt`.`descripcion`,`pt`.`descripcion_ingles`))) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `costos_promedios_pais`
--
DROP TABLE IF EXISTS `costos_promedios_pais`;

CREATE ALGORITHM=UNDEFINED DEFINER=`premiumf`@`localhost` SQL SECURITY DEFINER VIEW `costos_promedios_pais`  AS SELECT `PG`.`id_pais` AS `id_pais`, `PG`.`id_productos` AS `id_productos`, `PG`.`nombre` AS `nombre`, `PG`.`tamanio` AS `tamanio`, `PG`.`descripcion` AS `descripcion`, `PG`.`descripcion_ingles` AS `descripcion_ingles`, `PG`.`foto` AS `foto`, `PG`.`cantidad_ventas` AS `cantidad_ventas`, `PG`.`CostoPromedioGeneral_Pais` AS `CostoPromedioGeneral_Pais`, `PG`.`CostoMinimoGeneral_Pais` AS `CostoMinimoGeneral_Pais`, `PG`.`CostoMaximoGeneral_Pais` AS `CostoMaximoGeneral_Pais`, `PG`.`CantidadComprasGeneral_Pais` AS `CantidadComprasGeneral_Pais`, avg(`PC`.`Costo`) AS `CostoPromedioConDrop_Pais`, min(`PC`.`Costo`) AS `CostoMinimoConDrop_Pais`, max(`PC`.`Costo`) AS `CostoMaximoConDrop_Pais`, count(0) AS `CantidadComprasConDrop_Pais` FROM (((select `PC`.`id_pais` AS `id_pais`,`Pr`.`id_productos` AS `id_productos`,`Pr`.`nombre` AS `nombre`,`Pr`.`tamanio` AS `tamanio`,`Pr`.`descripcion` AS `descripcion`,`Pr`.`descripcion_ingles` AS `descripcion_ingles`,`Pr`.`foto` AS `foto`,`Pr`.`cantidad_ventas` AS `cantidad_ventas`,`Pr`.`porcentaje_drop_inferior` AS `porcentaje_drop_inferior`,`Pr`.`porcentaje_drop_superior` AS `porcentaje_drop_superior`,avg(`PC`.`Costo`) AS `CostoPromedioGeneral_Pais`,min(`PC`.`Costo`) AS `CostoMinimoGeneral_Pais`,max(`PC`.`Costo`) AS `CostoMaximoGeneral_Pais`,count(0) AS `CantidadComprasGeneral_Pais` from (`t_pedidos_costos` `PC` join `productos_tamanios` `Pr` on(`Pr`.`id_productos` = `PC`.`id_productos` and `PC`.`descripcionTamanio` in (`Pr`.`descripcion`,`Pr`.`descripcion_ingles`))) group by `PC`.`id_pais`,`Pr`.`id_productos`,`Pr`.`nombre`,`Pr`.`tamanio`,`Pr`.`descripcion`,`Pr`.`descripcion_ingles`,`Pr`.`foto`,`Pr`.`cantidad_ventas`,`Pr`.`porcentaje_drop_inferior`,`Pr`.`porcentaje_drop_superior` having count(0) > 20)) `PG` left join `t_pedidos_costos` `PC` on(`PC`.`id_pais` = `PG`.`id_pais` and `PC`.`id_productos` = `PG`.`id_productos` and `PC`.`descripcionTamanio` in (`PG`.`descripcion`,`PG`.`descripcion_ingles`) and (`PG`.`CantidadComprasGeneral_Pais` < 10 or `PC`.`Costo` between `PG`.`CostoPromedioGeneral_Pais` * if(ifnull(`PG`.`porcentaje_drop_inferior`,0) = 0,30,`PG`.`porcentaje_drop_inferior`) / 100 and `PG`.`CostoPromedioGeneral_Pais` * (1 + if(ifnull(`PG`.`porcentaje_drop_superior`,0) = 0,50,`PG`.`porcentaje_drop_superior`) / 100)))) GROUP BY `PG`.`id_pais`, `PG`.`id_productos`, `PG`.`nombre`, `PG`.`tamanio`, `PG`.`descripcion`, `PG`.`descripcion_ingles`, `PG`.`foto`, `PG`.`cantidad_ventas`, `PG`.`CostoPromedioGeneral_Pais`, `PG`.`CostoMinimoGeneral_Pais`, `PG`.`CostoMaximoGeneral_Pais`, `PG`.`CantidadComprasGeneral_Pais` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `costos_promedios_zona`
--
DROP TABLE IF EXISTS `costos_promedios_zona`;

CREATE ALGORITHM=UNDEFINED DEFINER=`premiumf`@`localhost` SQL SECURITY DEFINER VIEW `costos_promedios_zona`  AS SELECT `PG`.`id_pais` AS `id_pais`, `PG`.`id_zona_padre` AS `id_zona_padre`, `PG`.`id_zonas` AS `id_zonas`, `PG`.`id_productos` AS `id_productos`, `PG`.`nombre` AS `nombre`, `PG`.`tamanio` AS `tamanio`, `PG`.`descripcion` AS `descripcion`, `PG`.`descripcion_ingles` AS `descripcion_ingles`, `PG`.`foto` AS `foto`, `PG`.`cantidad_ventas` AS `cantidad_ventas`, `PG`.`CostoPromedioGeneral_Zona` AS `CostoPromedioGeneral_Zona`, `PG`.`CostoMinimoGeneral_Zona` AS `CostoMinimoGeneral_Zona`, `PG`.`CostoMaximoGeneral_Zona` AS `CostoMaximoGeneral_Zona`, `PG`.`CantidadComprasGeneral_Zona` AS `CantidadComprasGeneral_Zona`, avg(`PC`.`Costo`) AS `CostoPromedioConDrop_Zona`, min(`PC`.`Costo`) AS `CostoMinimoConDrop_Zona`, max(`PC`.`Costo`) AS `CostoMaximoConDrop_Zona`, count(0) AS `CantidadComprasConDrop_Zona` FROM (((select `PC`.`id_pais` AS `id_pais`,`PC`.`id_zona_padre` AS `id_zona_padre`,`PC`.`id_zonas` AS `id_zonas`,`Pr`.`id_productos` AS `id_productos`,`Pr`.`nombre` AS `nombre`,`Pr`.`tamanio` AS `tamanio`,`Pr`.`descripcion` AS `descripcion`,`Pr`.`descripcion_ingles` AS `descripcion_ingles`,`Pr`.`foto` AS `foto`,`Pr`.`cantidad_ventas` AS `cantidad_ventas`,`Pr`.`porcentaje_drop_inferior` AS `porcentaje_drop_inferior`,`Pr`.`porcentaje_drop_superior` AS `porcentaje_drop_superior`,avg(`PC`.`Costo`) AS `CostoPromedioGeneral_Zona`,min(`PC`.`Costo`) AS `CostoMinimoGeneral_Zona`,max(`PC`.`Costo`) AS `CostoMaximoGeneral_Zona`,count(0) AS `CantidadComprasGeneral_Zona` from (`t_pedidos_costos` `PC` join `productos_tamanios` `Pr` on(`Pr`.`id_productos` = `PC`.`id_productos` and `PC`.`descripcionTamanio` in (`Pr`.`descripcion`,`Pr`.`descripcion_ingles`))) group by `PC`.`id_pais`,`PC`.`id_zona_padre`,`PC`.`id_zonas`,`Pr`.`id_productos`,`Pr`.`nombre`,`Pr`.`tamanio`,`Pr`.`descripcion`,`Pr`.`descripcion_ingles`,`Pr`.`foto`,`Pr`.`cantidad_ventas`,`Pr`.`porcentaje_drop_inferior`,`Pr`.`porcentaje_drop_superior` having count(0) > 20)) `PG` left join `t_pedidos_costos` `PC` on(`PC`.`id_pais` = `PG`.`id_pais` and `PC`.`id_zonas` = `PG`.`id_zonas` and `PC`.`id_productos` = `PG`.`id_productos` and `PC`.`descripcionTamanio` in (`PG`.`descripcion`,`PG`.`descripcion_ingles`) and (`PG`.`CantidadComprasGeneral_Zona` < 10 or `PC`.`Costo` between `PG`.`CostoPromedioGeneral_Zona` * if(ifnull(`PG`.`porcentaje_drop_inferior`,0) = 0,30,`PG`.`porcentaje_drop_inferior`) / 100 and `PG`.`CostoPromedioGeneral_Zona` * (1 + if(ifnull(`PG`.`porcentaje_drop_superior`,0) = 0,50,`PG`.`porcentaje_drop_superior`) / 100)))) GROUP BY `PG`.`id_pais`, `PG`.`id_zona_padre`, `PG`.`id_zonas`, `PG`.`id_productos`, `PG`.`nombre`, `PG`.`tamanio`, `PG`.`descripcion`, `PG`.`descripcion_ingles`, `PG`.`foto`, `PG`.`cantidad_ventas`, `PG`.`CostoPromedioGeneral_Zona`, `PG`.`CostoMinimoGeneral_Zona`, `PG`.`CostoMaximoGeneral_Zona`, `PG`.`CantidadComprasGeneral_Zona` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `costos_promedios_zonaPadre`
--
DROP TABLE IF EXISTS `costos_promedios_zonaPadre`;

CREATE ALGORITHM=UNDEFINED DEFINER=`premiumf`@`localhost` SQL SECURITY DEFINER VIEW `costos_promedios_zonaPadre`  AS SELECT `PG`.`id_pais` AS `id_pais`, `PG`.`id_zona_padre` AS `id_zona_padre`, `PG`.`id_productos` AS `id_productos`, `PG`.`nombre` AS `nombre`, `PG`.`tamanio` AS `tamanio`, `PG`.`descripcion` AS `descripcion`, `PG`.`descripcion_ingles` AS `descripcion_ingles`, `PG`.`foto` AS `foto`, `PG`.`cantidad_ventas` AS `cantidad_ventas`, `PG`.`CostoPromedioGeneral_ZonaPadre` AS `CostoPromedioGeneral_ZonaPadre`, `PG`.`CostoMinimoGeneral_ZonaPadre` AS `CostoMinimoGeneral_ZonaPadre`, `PG`.`CostoMaximoGeneral_ZonaPadre` AS `CostoMaximoGeneral_ZonaPadre`, `PG`.`CantidadComprasGeneral_ZonaPadre` AS `CantidadComprasGeneral_ZonaPadre`, avg(`PC`.`Costo`) AS `CostoPromedioConDrop_ZonaPadre`, min(`PC`.`Costo`) AS `CostoMinimoConDrop_ZonaPadre`, max(`PC`.`Costo`) AS `CostoMaximoConDrop_ZonaPadre`, count(0) AS `CantidadComprasConDrop_ZonaPadre` FROM (((select `PC`.`id_pais` AS `id_pais`,`PC`.`id_zona_padre` AS `id_zona_padre`,`Pr`.`id_productos` AS `id_productos`,`Pr`.`nombre` AS `nombre`,`Pr`.`tamanio` AS `tamanio`,`Pr`.`descripcion` AS `descripcion`,`Pr`.`descripcion_ingles` AS `descripcion_ingles`,`Pr`.`foto` AS `foto`,`Pr`.`cantidad_ventas` AS `cantidad_ventas`,`Pr`.`porcentaje_drop_inferior` AS `porcentaje_drop_inferior`,`Pr`.`porcentaje_drop_superior` AS `porcentaje_drop_superior`,avg(`PC`.`Costo`) AS `CostoPromedioGeneral_ZonaPadre`,min(`PC`.`Costo`) AS `CostoMinimoGeneral_ZonaPadre`,max(`PC`.`Costo`) AS `CostoMaximoGeneral_ZonaPadre`,count(0) AS `CantidadComprasGeneral_ZonaPadre` from (`t_pedidos_costos` `PC` join `productos_tamanios` `Pr` on(`Pr`.`id_productos` = `PC`.`id_productos` and `PC`.`descripcionTamanio` in (`Pr`.`descripcion`,`Pr`.`descripcion_ingles`))) where `PC`.`id_zona_padre` is not null and `PC`.`id_zona_padre` <> 0 group by `PC`.`id_pais`,`PC`.`id_zona_padre`,`Pr`.`id_productos`,`Pr`.`nombre`,`Pr`.`tamanio`,`Pr`.`descripcion`,`Pr`.`descripcion_ingles`,`Pr`.`foto`,`Pr`.`cantidad_ventas`,`Pr`.`porcentaje_drop_inferior`,`Pr`.`porcentaje_drop_superior` having count(0) > 20)) `PG` left join `t_pedidos_costos` `PC` on(`PC`.`id_pais` = `PG`.`id_pais` and `PC`.`id_zona_padre` = `PG`.`id_zona_padre` and `PC`.`id_productos` = `PG`.`id_productos` and `PC`.`descripcionTamanio` in (`PG`.`descripcion`,`PG`.`descripcion_ingles`) and (`PG`.`CantidadComprasGeneral_ZonaPadre` < 10 or `PC`.`Costo` between `PG`.`CostoPromedioGeneral_ZonaPadre` * if(ifnull(`PG`.`porcentaje_drop_inferior`,0) = 0,30,`PG`.`porcentaje_drop_inferior`) / 100 and `PG`.`CostoPromedioGeneral_ZonaPadre` * (1 + if(ifnull(`PG`.`porcentaje_drop_superior`,0) = 0,50,`PG`.`porcentaje_drop_superior`) / 100)))) GROUP BY `PG`.`id_pais`, `PG`.`id_zona_padre`, `PG`.`id_productos`, `PG`.`nombre`, `PG`.`tamanio`, `PG`.`descripcion`, `PG`.`descripcion_ingles`, `PG`.`foto`, `PG`.`cantidad_ventas`, `PG`.`CostoPromedioGeneral_ZonaPadre`, `PG`.`CostoMinimoGeneral_ZonaPadre`, `PG`.`CostoMaximoGeneral_ZonaPadre`, `PG`.`CantidadComprasGeneral_ZonaPadre` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `emails_templates`
--
DROP TABLE IF EXISTS `emails_templates`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `emails_templates`  AS SELECT `tm`.`id` AS `et_id`, `tm`.`name` AS `et_nombre`, `tm`.`spanish_content` AS `et_content`, `tm`.`observation` AS `et_observaciones`, `tm`.`matter_in_spanish` AS `et_asunto`, `tm`.`matter_in_english` AS `et_asunto_e`, `tm`.`english_content` AS `et_content_e`, `tm`.`mail_from` AS `et_mail_from`, `tm`.`from` AS `et_from`, `tm`.`active` AS `et_activo` FROM `templates_mails` AS `tm` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `emails_whitelist`
--
DROP TABLE IF EXISTS `emails_whitelist`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `emails_whitelist`  AS SELECT `operadores`.`email` AS `email` FROM `operadores`union select `users`.`email` AS `email` from `users` union select `proveedores`.`proveedorEmail` AS `email` from `proveedores` where `proveedores`.`proveedorEmail`  not like '%notiene%' and `proveedores`.`proveedorID` in (select `precio_maximo_por_pedido`.`proveedor` from `precio_maximo_por_pedido` where `precio_maximo_por_pedido`.`fecha` > curdate() - interval 6 month) union select `emails_enviados`.`fromemail` AS `email` from `emails_enviados` where `emails_enviados`.`pedido` in (select `pedidos`.`id` from `pedidos` where `pedidos`.`fhm_creacion` > curdate() - interval 2 month) union select '%@newadmin.info' AS `email` union select concat('%@',`produ_cuentas`.`de_cuenta`) AS `email` from `produ_cuentas`  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `GetResponseData`
--
DROP TABLE IF EXISTS `GetResponseData`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `GetResponseData`  AS SELECT `c`.`mail` AS `mail`, `c`.`idioma` AS `idioma`, `c`.`pais` AS `PaisCliente`, `p`.`fhm_creacion` AS `fhm_creacion`, `cu`.`de_cuenta` AS `de_cuenta`, `d`.`nombre` AS `NombreDestinatario`, `d`.`apellido` AS `ApellidoDestinatario`, `d`.`ciudad` AS `CiudadDestinatario`, `d`.`estado` AS `EstadoDestinatario`, `d`.`pais` AS `PaisDestinatario` FROM ((((`clientes` `c` join (select `pedidos`.`cliente` AS `cliente`,max(`pedidos`.`id`) AS `ultimo` from `pedidos` group by `pedidos`.`cliente`) `u` on(`u`.`cliente` = `c`.`id`)) join `pedidos` `p` on(`p`.`id` = `u`.`ultimo`)) join `produ_cuentas` `cu` on(`cu`.`id` = `p`.`id_cuenta`)) join `destinatarios` `d` on(`d`.`id` = `p`.`destinatario`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `motivos_anulacion`
--
DROP TABLE IF EXISTS `motivos_anulacion`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `motivos_anulacion`  AS SELECT `cr`.`id` AS `motivoID`, `cr`.`name` AS `motivoNombre`, `cr`.`responsible_cancellation` AS `responsible_cancellation` FROM `cancellation_reasons` AS `cr` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `motivos_devolucion`
--
DROP TABLE IF EXISTS `motivos_devolucion`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `motivos_devolucion`  AS SELECT `cr`.`id` AS `ID`, `cr`.`name` AS `Name`, `cr`.`responsible_return` AS `responsible_return`, `cr`.`template_mail_id` AS `email_template_id` FROM `return_reasons` AS `cr` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `ofertas_proveedor`
--
DROP TABLE IF EXISTS `ofertas_proveedor`;

CREATE ALGORITHM=UNDEFINED DEFINER=`premiumf_honda24`@`localhost` SQL SECURITY DEFINER VIEW `ofertas_proveedor`  AS SELECT `p_main`.`proveedorID` AS `florist_id`, `p_main`.`proveedorNombre` AS `username`, `a`.`price` AS `price`, substr(`a`.`product`,1,2) AS `type_product`, right(`a`.`size`,1) AS `size`, replace(replace(`a`.`size`,substr(`a`.`product`,1,3),''),right(`a`.`size`,2),'') AS `product`, `z`.`id_zonas` AS `id_zonas`, `z`.`nombre` AS `zona_nombre` FROM ((((`t_acuerdos_proveedor2` `a` join `proveedores` `flista` on(`a`.`florist_id` = `flista`.`proveedorID`)) join `proveedores` `p_rel` on(`p_rel`.`proveedorSansonListaID` = `flista`.`proveedorID` and `p_rel`.`proveedorAcuerdoActivo` = 1)) join `proveedores` `p_main` on(`p_rel`.`proveedorSansonID` = `p_main`.`proveedorID`)) join `zonas` `z` on(`z`.`id_zonas` = `p_rel`.`proveedorZona` or json_search(`p_rel`.`proveedorOtrasZonas`,'one',cast(`z`.`id_zonas` as unsigned)) is not null)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `paises`
--
DROP TABLE IF EXISTS `paises`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `paises`  AS SELECT `c`.`id` AS `id_pais`, `c`.`alias_en` AS `alias_en`, `c`.`alias_es` AS `alias_es`, `c`.`alias` AS `alias`, `c`.`name` AS `nombre`, `c`.`mail` AS `correo`, CASE WHEN `c`.`active` > 0 THEN 'si' ELSE 'no' END FROM `countries` AS `c` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `paises_new`
--
DROP TABLE IF EXISTS `paises_new`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `paises_new`  AS SELECT `c`.`id` AS `id_pais`, `c`.`alias_en` AS `alias_en`, `c`.`alias_es` AS `alias_es`, `c`.`alias` AS `alias`, `c`.`name` AS `nombre`, `c`.`mail` AS `correo`, CASE WHEN `c`.`active` > 0 THEN 'si' ELSE 'no' END FROM `countries` AS `c` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `pedidos_costos`
--
DROP TABLE IF EXISTS `pedidos_costos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `pedidos_costos`  AS SELECT DISTINCT `p`.`id` AS `id_pedido`, `p`.`date_entrega` AS `date_entrega`, `d`.`id_pais` AS `id_pais`, `z`.`id_zona_padre` AS `id_zona_padre`, `z`.`id_zonas` AS `id_zonas`, `p`.`r01` AS `id_productos`, `t`.`descripcion` AS `descripcionTamanio`, `pre2`.`precio_dls` AS `Costo`, `pre2`.`precio_local` AS `CostoLocal`, `pre2`.`proveedor` AS `proveedor` FROM (((((((((`pedidos` `p` join `t_productos_tamanios` `t` on(`t`.`id_productos` = `p`.`r01` and `p`.`r01t` in (`t`.`descripcion`,`t`.`descripcion_ingles`))) join `destinatarios` `d` on(`d`.`id` = `p`.`destinatario`)) join `countries` `c` on(`d`.`id_pais` = `c`.`id`)) join `zonas` `z` on(`z`.`id_zonas` = `d`.`zona_id`)) left join `estados_por_pedido` `epp` on(`epp`.`epp_pedido` = `p`.`id` and `epp`.`final` = 1)) left join `estados_backend` `eb` on(`eb`.`eb_id` = `epp`.`epp_estado_backend` and `eb`.`eb_nombre` = 'pedido_enviado')) left join (select `precio_maximo_por_pedido`.`pedido` AS `pedido`,max(`precio_maximo_por_pedido`.`id`) AS `id` from `precio_maximo_por_pedido` group by `precio_maximo_por_pedido`.`pedido`) `pre` on(`pre`.`pedido` = `p`.`id`)) left join `precio_maximo_por_pedido` `pre2` on(`pre`.`id` = `pre2`.`id`)) left join `precios_por_pedido` `PPP` on(`PPP`.`pedido` = `p`.`id`)) WHERE `p`.`r02` = 0 AND `p`.`r03` = 0 AND `p`.`r04` = 0 AND `p`.`r05` = 0 AND `p`.`adicional01` = 0 AND `p`.`adicional02` = 0 AND `p`.`adicional03` = 0 AND `p`.`adicional04` = 0 AND `p`.`adicional05` = 0 AND ifnull(`pre2`.`precio_dls`,0) > 0 AND year(`p`.`date_entrega`) >= if(ifnull(`c`.`average_start_year`,0) = 0,2010,`c`.`average_start_year`) AND (month(`p`.`date_entrega`) <> 2 OR dayofmonth(`p`.`date_entrega`) not between 10 and 16) AND (month(`p`.`date_entrega`) <> 5 OR dayofmonth(`p`.`date_entrega`) not between 8 and 14) AND `PPP`.`id` is null ;

-- --------------------------------------------------------

--
-- Estructura para la vista `pedidos_costos_paso_1`
--
DROP TABLE IF EXISTS `pedidos_costos_paso_1`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `pedidos_costos_paso_1`  AS SELECT DISTINCT `p`.`id` AS `id_pedido`, `p`.`date_entrega` AS `date_entrega`, `d`.`id_pais` AS `id_pais`, `z`.`id_zona_padre` AS `id_zona_padre`, `z`.`id_zonas` AS `id_zonas`, `p`.`r01` AS `id_productos`, `t`.`descripcion` AS `descripcionTamanio`, `pre2`.`precio_dls` AS `Costo`, `pre2`.`precio_local` AS `CostoLocal`, `pre2`.`proveedor` AS `proveedor` FROM (((((((((`pedidos` `p` join `t_productos_tamanios` `t` on(`t`.`id_productos` = `p`.`r01` and `p`.`r01t` in (`t`.`descripcion`,`t`.`descripcion_ingles`))) join `destinatarios` `d` on(`d`.`id` = `p`.`destinatario`)) join `countries` `c` on(`d`.`id_pais` = `c`.`id`)) join `zonas` `z` on(`z`.`id_zonas` = `d`.`zona_id`)) left join `estados_por_pedido` `epp` on(`epp`.`epp_pedido` = `p`.`id` and `epp`.`final` = 1)) left join `estados_backend` `eb` on(`eb`.`eb_id` = `epp`.`epp_estado_backend` and `eb`.`eb_nombre` = 'pedido_enviado')) left join (select `precio_maximo_por_pedido`.`pedido` AS `pedido`,max(`precio_maximo_por_pedido`.`id`) AS `id` from `precio_maximo_por_pedido` group by `precio_maximo_por_pedido`.`pedido`) `pre` on(`pre`.`pedido` = `p`.`id`)) left join `precio_maximo_por_pedido` `pre2` on(`pre`.`id` = `pre2`.`id`)) left join `precios_por_pedido` `PPP` on(`PPP`.`pedido` = `p`.`id`)) WHERE `p`.`r02` = 0 AND `p`.`r03` = 0 AND `p`.`r04` = 0 AND `p`.`r05` = 0 AND `p`.`adicional01` = 0 AND `p`.`adicional02` = 0 AND `p`.`adicional03` = 0 AND `p`.`adicional04` = 0 AND `p`.`adicional05` = 0 AND ifnull(`pre2`.`precio_dls`,0) > 0 AND year(`p`.`date_entrega`) >= if(ifnull(`c`.`average_start_year`,0) = 0,2010,`c`.`average_start_year`) AND (month(`p`.`date_entrega`) <> 2 OR dayofmonth(`p`.`date_entrega`) not between 10 and 16) AND (month(`p`.`date_entrega`) <> 5 OR dayofmonth(`p`.`date_entrega`) not between 8 and 14) AND `PPP`.`id` is null ;

-- --------------------------------------------------------

--
-- Estructura para la vista `productos_ingles_vst`
--
DROP TABLE IF EXISTS `productos_ingles_vst`;

CREATE ALGORITHM=UNDEFINED DEFINER=`premiumf`@`localhost` SQL SECURITY DEFINER VIEW `productos_ingles_vst`  AS SELECT `p`.`id_productos` AS `id_productos`, `p`.`nombre` AS `nombre`, `p`.`id_producto_principal` AS `id_producto_principal`, `p`.`precio_ch` AS `precio_ch`, `p`.`precio_m` AS `precio_m`, `p`.`precio_g` AS `precio_g`, `p`.`zonas` AS `zonas`, `p`.`ocasion` AS `ocasion`, `p`.`rubro` AS `rubro`, `p`.`foto` AS `foto`, `p`.`destacado` AS `destacado`, `p`.`pais` AS `pais`, `p`.`condolencias` AS `condolencias`, `p`.`nacimiento` AS `nacimiento`, `p`.`aniversario` AS `aniversario`, `p`.`bodas` AS `bodas`, `p`.`cumpleannos` AS `cumpleannos`, `p`.`romance` AS `romance`, `p`.`agradecimiento` AS `agradecimiento`, `p`.`diamadre` AS `diamadre`, `p`.`rosas` AS `rosas`, `p`.`girasoles` AS `girasoles`, `p`.`surtidas` AS `surtidas`, `p`.`desayunos` AS `desayunos`, `p`.`margaritas` AS `margaritas`, `p`.`frutas` AS `frutas`, `p`.`asucenas` AS `asucenas`, `p`.`lirios` AS `lirios`, `p`.`arreglos_f` AS `arreglos_f`, `p`.`descripcion` AS `descripcion`, `p`.`a_color` AS `a_color`, `p`.`foto_grande` AS `foto_grande`, `p`.`foto_grande_w` AS `foto_grande_w`, `p`.`foto_grande_h` AS `foto_grande_h`, `p`.`foto_media` AS `foto_media`, `p`.`foto_chica` AS `foto_chica`, `p`.`foto_chica_2` AS `foto_chica_2`, `p`.`foto_media_listado` AS `foto_media_listado`, `p`.`foto_media_listado2` AS `foto_media_listado2`, `p`.`foto_media_listado_floresa` AS `foto_media_listado_floresa`, `p`.`foto_media_listado_floresa2` AS `foto_media_listado_floresa2`, `p`.`foto_extra_chica` AS `foto_extra_chica`, `p`.`descri_ch` AS `descri_ch`, `p`.`descri_m` AS `descri_m`, `p`.`descri_g` AS `descri_g`, `p`.`codigo_int` AS `codigo_int`, `p`.`costo_g` AS `costo_g`, `p`.`costo_m` AS `costo_m`, `p`.`costo_ch` AS `costo_ch`, `p`.`pie` AS `pie`, `p`.`orquideas` AS `orquideas`, `p`.`canastas` AS `canastas`, `p`.`annonuevo` AS `annonuevo`, `p`.`navidad` AS `navidad`, `p`.`sincolor` AS `sincolor`, `p`.`categorias` AS `categorias`, `p`.`ocasiones` AS `ocasiones`, `p`.`nota_interna` AS `nota_interna`, `p`.`nota_florista` AS `nota_florista`, `p`.`nota_florista_2` AS `nota_florista_2`, `p`.`nota_florista_3` AS `nota_florista_3`, `p`.`muestro_foto_al_florista` AS `muestro_foto_al_florista`, `p`.`envio_automatico_al_florista` AS `envio_automatico_al_florista`, `p`.`correo_florista` AS `correo_florista`, `p`.`id_horario_entrega` AS `id_horario_entrega`, `p`.`omite_imagen_horario` AS `omite_imagen_horario`, `p`.`corregidoingles` AS `corregidoingles`, `p`.`corregido_fecha` AS `corregido_fecha`, `p`.`diferenciaprd` AS `diferenciaprd`, `p`.`fecha_creacion` AS `fecha_creacion`, `p`.`corregir_portugues` AS `corregir_portugues`, `p`.`tipo_pie` AS `tipo_pie`, `p`.`ftd` AS `ftd`, `p`.`jacquelines` AS `jacquelines`, `p`.`teleflora` AS `teleflora`, `p`.`traducido_lfdm` AS `traducido_lfdm`, `p`.`nodisponible` AS `nodisponible`, `p`.`tags` AS `tags`, `p`.`tags_e` AS `tags_e`, `p`.`tags_ant` AS `tags_ant`, `p`.`tags_e_ant` AS `tags_e_ant`, `p`.`producto_oculto` AS `producto_oculto`, `p`.`personalizar_letras` AS `personalizar_letras`, `p`.`personalizar_letras_cantidad` AS `personalizar_letras_cantidad`, `p`.`personalizar_numeros` AS `personalizar_numeros`, `p`.`personalizar_numeros_cantidad` AS `personalizar_numeros_cantidad`, `p`.`personalizar_mixto` AS `personalizar_mixto`, `p`.`personalizar_mixto_cantidad` AS `personalizar_mixto_cantidad`, `p`.`no_personalizar` AS `no_personalizar`, `p`.`no_personalizar_centro` AS `no_personalizar_centro`, `p`.`A/B` AS `A/B`, `p`.`fecha_alta` AS `fecha_alta`, `p`.`cantidad_ventas` AS `cantidad_ventas`, `p`.`porcentaje_drop_inferior` AS `porcentaje_drop_inferior`, `p`.`porcentaje_drop_superior` AS `porcentaje_drop_superior`, `p`.`foto_mejorada_con_ai` AS `foto_mejorada_con_ai`, `p`.`b_newsletter` AS `b_newsletter`, `p`.`id_tipo_mensaje_producto` AS `id_tipo_mensaje_producto`, `p`.`sales_of_last_thirty_days` AS `sales_of_last_thirty_days`, `p`.`id_linea_producto` AS `id_linea_producto`, `p`.`orden_producto` AS `orden_producto`, `p`.`orden_producto2` AS `orden_producto2`, `p`.`deleted_at` AS `deleted_at`, `p`.`updated_at` AS `updated_at`, `p`.`no_permite_cupon` AS `no_permite_cupon`, `pe`.`nombre` AS `nombre_eng`, `pe`.`descripcion` AS `descripcion_eng`, `pe`.`descri_ch` AS `descri_ch_eng`, `pe`.`descri_m` AS `descri_m_eng`, `pe`.`descri_g` AS `descri_g_eng`, `pe`.`codigo_int` AS `codigo_int_eng`, `pe`.`nota_florista` AS `nota_florista_eng`, `p`.`foto_grande` AS `foto_grande_eng`, `p`.`foto_media` AS `foto_media_eng`, `p`.`foto_chica` AS `foto_chica_eng`, `epp`.`epp_especial` AS `especial_id`, `et`.`especial_img` AS `especial_img`, concat(`et`.`especial_img`,'_en') AS `especial_img_eng`, `et`.`especial_img_ficha` AS `especial_img_ficha`, CASE WHEN ifnull(`et`.`especial_img_ficha`,'') <> '' THEN concat(`et`.`especial_img_ficha`,'_en') ELSE '' END AS `especial_img_ficha_eng`, `pf_ch`.`foto` AS `foto_tamanio_ch`, `pf_m`.`foto` AS `foto_tamanio_m`, `pf_g`.`foto` AS `foto_tamanio_g`, `p`.`descuento_ch` AS `descuento_ch`, `p`.`descuento_m` AS `descuento_m`, `p`.`descuento_g` AS `descuento_g`, `p`.`reviews_avg_value` AS `reviews_avg_value`, `p`.`reviews_count` AS `reviews_count`, `p`.`configuracion_personalizacion` AS `configuracion_personalizacion` FROM ((((((`productos` `p` left join `productos_e` `pe` on(`pe`.`id_productos` = `p`.`id_productos`)) left join `especiales_por_producto` `epp` on(`epp`.`epp_producto` = `p`.`id_productos`)) left join `especiales_tipos` `et` on(`epp`.`epp_especial` = `et`.`especial_id` and `et`.`especial_activo` = 1)) left join `productos_fotos` `pf_ch` on(`pf_ch`.`producto` = `p`.`id_productos` and `pf_ch`.`tamano` = 1 and `pf_ch`.`tipo_imagen` = 'PRINCIPAL')) left join `productos_fotos` `pf_m` on(`pf_m`.`producto` = `p`.`id_productos` and `pf_m`.`tamano` = 2 and `pf_m`.`tipo_imagen` = 'PRINCIPAL')) left join `productos_fotos` `pf_g` on(`pf_g`.`producto` = `p`.`id_productos` and `pf_g`.`tamano` = 3 and `pf_g`.`tipo_imagen` = 'PRINCIPAL')) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `productos_tamanios`
--
DROP TABLE IF EXISTS `productos_tamanios`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `productos_tamanios`  AS SELECT `P`.`pais` AS `pais`, `P`.`id_productos` AS `id_productos`, `P`.`nombre` AS `nombre`, `T`.`t` AS `tamanio`, CASE `T`.`t` WHEN 1 THEN `P`.`descri_ch` WHEN 2 THEN `P`.`descri_m` WHEN 3 THEN `P`.`descri_g` END AS `descripcion`, CASE `T`.`t` WHEN 1 THEN if(`PE`.`descri_ch` = '',`P`.`descri_ch`,`PE`.`descri_ch`) WHEN 2 THEN if(`PE`.`descri_m` = '',`P`.`descri_m`,`PE`.`descri_m`) WHEN 3 THEN if(`PE`.`descri_g` = '',`P`.`descri_g`,`PE`.`descri_g`) END AS `descripcion_ingles`, CASE WHEN ifnull(`PF`.`foto`,'') <> '' THEN `PF`.`foto` WHEN ifnull(`P`.`foto_chica`,'') <> '' THEN `P`.`foto_chica` ELSE `P`.`foto_media` END AS `foto`, CASE `T`.`t` WHEN 1 THEN `P`.`precio_ch` WHEN 2 THEN `P`.`precio_m` WHEN 3 THEN `P`.`precio_g` END AS `precio`, `P`.`cantidad_ventas` AS `cantidad_ventas`, `P`.`porcentaje_drop_inferior` AS `porcentaje_drop_inferior`, `P`.`porcentaje_drop_superior` AS `porcentaje_drop_superior` FROM (((`productos` `P` join `productos_e` `PE` on(`PE`.`id_productos` = `P`.`id_productos`)) join (select 1 AS `t`,'ch' AS `tam`,'chico' AS `tamanio` union all select 2 AS `t`,'m' AS `tam`,'mediano' AS `tamanio` union all select 3 AS `t`,'g' AS `tam`,'grande' AS `tamanio`) `T` on(`T`.`t` = 1 and `P`.`descri_ch` <> '' or `T`.`t` = 2 and `P`.`descri_m` <> '' and `P`.`descri_m` <> `P`.`descri_ch` or `T`.`t` = 3 and `P`.`descri_g` <> '' and `P`.`descri_g` <> `P`.`descri_ch` and `P`.`descri_g` <> `P`.`descri_m`)) left join (select `productos_fotos`.`producto` AS `producto`,`productos_fotos`.`tamano` AS `tamano`,min(`productos_fotos`.`foto`) AS `foto` from `productos_fotos` group by `productos_fotos`.`producto`,`productos_fotos`.`tamano`) `PF` on(`PF`.`producto` = `P`.`id_productos` and `PF`.`tamano` = `T`.`t`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `productos_vendidos`
--
DROP TABLE IF EXISTS `productos_vendidos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `productos_vendidos`  AS SELECT DISTINCT `p`.`id` AS `id_pedido`, `p`.`fhm_creacion` AS `fhm_creacion`, `p`.`date_entrega` AS `date_entrega`, `t`.`id_productos` AS `id_productos`, `t`.`tamanio` AS `tamanio` FROM ((`pedidos` `p` join (select 1 AS `r` union all select 2 AS `r` union all select 3 AS `r` union all select 4 AS `r` union all select 5 AS `r`) `r`) join `t_productos_tamanios` `t` on(`t`.`id_productos` = case when `r`.`r` = 1 then `p`.`r01` when `r`.`r` = 2 then `p`.`r02` when `r`.`r` = 3 then `p`.`r03` when `r`.`r` = 4 then `p`.`r04` when `r`.`r` = 5 then `p`.`r05` end and `p`.`r01t` in (`t`.`descripcion`,`t`.`descripcion_ingles`))) WHERE `p`.`estadoBackendID` in (17,19,21,22,28,29,32,34,38,6) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `reclamos_motivos`
--
DROP TABLE IF EXISTS `reclamos_motivos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `reclamos_motivos`  AS SELECT `cr`.`id` AS `id`, `cr`.`name` AS `nombre`, `cr`.`responsible_claim` AS `responsible_claim` FROM `claim_reasons` AS `cr` ;

-- --------------------------------------------------------

--
-- Estructura para la vista `t_lista_productos`
--
DROP TABLE IF EXISTS `t_lista_productos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `t_lista_productos`  AS SELECT `p`.`id_cuenta` AS `id_cuenta`, `p`.`b_destacado` AS `b_destacado`, `z`.`pais` AS `pais`, `z`.`id_zonas` AS `zppZona`, `p`.`cppCategoria` AS `cppCategoria`, `p`.`c_activo` AS `activo`, `p`.`id_productos` AS `id_productos`, `p`.`condolencias` AS `condolencias` FROM ((`t_producto_categorias` `p` join `zonas` `z` on(`z`.`pais` = `p`.`pais`)) join `t_zonas_por_producto_catalogs` `gpz` on(`gpz`.`product_id` = `p`.`id_productos` and `gpz`.`zone_id` = `z`.`id_zonas`))union all select `p`.`id_cuenta` AS `id_cuenta`,`p`.`b_destacado` AS `b_destacado`,`z`.`pais` AS `pais`,`z`.`id_zonas` AS `zppZona`,`p`.`cppCategoria` AS `cppCategoria`,`p`.`c_activo` AS `activo`,`p`.`id_productos` AS `id_productos`,`p`.`condolencias` AS `condolencias` from (((`t_producto_categorias` `p` join `paises` `pa` on(`p`.`pais` = `pa`.`toma_productos_pais`)) join `zonas` `z` on(`z`.`pais` = `pa`.`id_pais`)) join `t_zonas_por_producto_catalogs` `gpz` on(`gpz`.`product_id` = `p`.`id_productos` and `gpz`.`zone_id` = `pa`.`toma_productos_zona`))  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `t_lista_productos_anterior`
--
DROP TABLE IF EXISTS `t_lista_productos_anterior`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `t_lista_productos_anterior`  AS SELECT `p`.`id_cuenta` AS `id_cuenta`, `p`.`b_destacado` AS `b_destacado`, `z`.`pais` AS `pais`, `z`.`id_zonas` AS `zppZona`, `p`.`cppCategoria` AS `cppCategoria`, `p`.`c_activo` AS `activo`, `p`.`id_productos` AS `id_productos`, `p`.`condolencias` AS `condolencias` FROM ((`t_producto_categorias` `p` join `zonas` `z` on(`z`.`pais` = `p`.`pais`)) left join `t_zonas_por_producto_no_entrega` `zn` on(`z`.`id_zonas` = `zn`.`id_zonas` and `zn`.`id_productos` = `p`.`id_productos`)) WHERE `zn`.`id_zonas` is nullunion allselect `p`.`id_cuenta` AS `id_cuenta`,`p`.`b_destacado` AS `b_destacado`,`z`.`pais` AS `pais`,`z`.`id_zonas` AS `zppZona`,`p`.`cppCategoria` AS `cppCategoria`,`p`.`c_activo` AS `activo`,`p`.`id_productos` AS `id_productos`,`p`.`condolencias` AS `condolencias` from (((`t_producto_categorias` `p` join `paises` `pa` on(`pa`.`toma_productos_pais` = `p`.`pais`)) join `zonas` `z` on(`z`.`pais` = `pa`.`id_pais`)) left join `t_zonas_por_producto_no_entrega` `zn` on(`z`.`id_zonas` = `zn`.`id_zonas` and `zn`.`id_productos` = `p`.`id_productos`)) where `zn`.`id_zonas` is null  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `t_lista_productos_v2`
--
DROP TABLE IF EXISTS `t_lista_productos_v2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`premiumf`@`localhost` SQL SECURITY DEFINER VIEW `t_lista_productos_v2`  AS SELECT `p`.`id_cuenta` AS `id_cuenta`, `p`.`b_destacado` AS `b_destacado`, `z`.`pais` AS `pais`, `z`.`id_zonas` AS `zppZona`, `p`.`cppCategoria` AS `cppCategoria`, `p`.`c_activo` AS `activo`, `p`.`id_productos` AS `id_productos`, `p`.`condolencias` AS `condolencias` FROM ((`zonas` `z` join `t_zonas_por_producto_catalogs` `gpz` on(`gpz`.`zone_id` = `z`.`zona_catalogo`)) join `t_producto_categorias` `p` on(`p`.`id_productos` = `gpz`.`product_id` and `p`.`pais` = `z`.`pais_catalogo`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_acuerdos_proveedor2`
--
DROP TABLE IF EXISTS `v_acuerdos_proveedor2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_acuerdos_proveedor2`  AS SELECT `p`.`proveedorID` AS `florist_id`, CASE WHEN `p`.`proveedorSansonListaID` = 38 THEN `a`.`price_df` WHEN `p`.`proveedorSansonListaID` = 30 THEN `a`.`price_centro` WHEN `p`.`proveedorSansonListaID` = 29 THEN `a`.`price_norte` WHEN `p`.`proveedorSansonListaID` = 28 THEN `a`.`price_sur` ELSE 0 END AS `price`, `a`.`type_product` AS `type_product`, `a`.`size` AS `size`, `a`.`product_id` AS `product`, `z`.`id_zonas` AS `id_zonas`, `z`.`nombre` AS `zona_nombre` FROM ((`acuerdos_floristas` `a` join `proveedores` `p`) left join `zonas` `z` on(`z`.`id_zonas` = `p`.`proveedorZona` or json_search(`p`.`proveedorOtrasZonas`,'one',cast(`z`.`id_zonas` as unsigned)) is not null)) WHERE `p`.`proveedorSansonListaID` in (38,28,29,30) AND `p`.`proveedorAcuerdoActivo` = 1 AND `p`.`proveedorEstado` = 1 ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_herencia_zonas`
--
DROP TABLE IF EXISTS `v_herencia_zonas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_herencia_zonas`  AS SELECT DISTINCT `z`.`id_zonas` AS `id_zonas`, `z`.`id_zonas` AS `is_zona_h`, '0' AS `tipo` FROM `zonas` AS `z`union select distinct `z`.`id_zonas` AS `id_zonas`,`z`.`id_zona_padre` AS `is_zona_h`,'1' AS `tipo` from `zonas` `z` where `z`.`b_hereda_padre` = 'S' union select distinct `z`.`id_zonas` AS `id_zonas`,`z1`.`id_zona_padre` AS `is_zona_h`,'2' AS `tipo` from (`zonas` `z` join `zonas` `z1` on(`z1`.`id_zonas` = `z`.`id_zona_padre`)) where `z`.`b_hereda_padre` = 'S' and `z1`.`b_hereda_padre` = 'S' union select distinct `z`.`id_zonas` AS `id_zonas`,`z2`.`id_zona_padre` AS `is_zona_h`,'3' AS `tipo` from ((`zonas` `z` join `zonas` `z1` on(`z1`.`id_zonas` = `z`.`id_zona_padre`)) join `zonas` `z2` on(`z2`.`id_zonas` = `z1`.`id_zona_padre`)) where `z`.`b_hereda_padre` = 'S' and `z1`.`b_hereda_padre` = 'S' and `z2`.`b_hereda_padre` = 'S' union select distinct `z`.`id_zonas` AS `id_zonas`,`z3`.`id_zona_padre` AS `is_zona_h`,'4' AS `tipo` from (((`zonas` `z` join `zonas` `z1` on(`z1`.`id_zonas` = `z`.`id_zona_padre`)) join `zonas` `z2` on(`z2`.`id_zonas` = `z1`.`id_zona_padre`)) join `zonas` `z3` on(`z3`.`id_zonas` = `z2`.`id_zona_padre`)) where `z`.`b_hereda_padre` = 'S' and `z1`.`b_hereda_padre` = 'S' and `z2`.`b_hereda_padre` = 'S' and `z3`.`b_hereda_padre` = 'S' union select distinct `z`.`id_zonas` AS `id_zonas`,`p`.`toma_productos_zona` AS `is_zona_h`,'C' AS `tipo` from (`zonas` `z` join `paises` `p` on(`p`.`id_pais` = `z`.`pais`)) where `p`.`toma_productos_zona` > 0  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_kpi_proveeedores`
--
DROP TABLE IF EXISTS `v_kpi_proveeedores`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_kpi_proveeedores`  AS SELECT `r`.`proveedor_id` AS `proveedor_id`, count(0) AS `q`, avg(if(`r`.`q1` + `r`.`q2` + `r`.`q3` + `r`.`q4` + `r`.`q5` > 0,(`r`.`q1` + `r`.`q2` + `r`.`q3` + `r`.`q4` + `r`.`q5`) / 5,NULL)) AS `qa`, `r`.`date_entrega_teorica_desde` AS `date_entrega_teorica_desde`, `r`.`r01` AS `r01`, `r`.`r01t` AS `r01t` FROM `premiumf_dataengineer`.`pedidos_datos_redundantes` AS `r` WHERE `r`.`date_entrega_teorica_desde` > current_timestamp() - interval 1 year AND `r`.`r01` > 0 GROUP BY `r`.`proveedor_id`, `r`.`r01`, `r`.`r01t` HAVING count(0) > 10 ORDER BY 3 DESC, 2 DESC ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_lista_blanca_emails`
--
DROP TABLE IF EXISTS `v_lista_blanca_emails`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_lista_blanca_emails`  AS SELECT `operadores`.`email` AS `email` FROM `operadores`union select `users`.`email` AS `email` from `users` where `users`.`active` = 1 and `users`.`external` = 0 union select concat('info@',`produ_cuentas`.`de_cuenta`) AS `concat('info@',de_cuenta)` from `produ_cuentas` union select concat('cs@',`produ_cuentas`.`de_cuenta`) AS `concat('cs@',de_cuenta)` from `produ_cuentas` union select 'info@flowersholding.com' AS `info@flowersholding.com` union select 'pedidosdefloreria26@newadmin.info' AS `pedidosdefloreria26@newadmin.info` union select 'pedidosdefloreria27@newadmin.info' AS `pedidosdefloreria27@newadmin.info` union select 'pedidosdefloreria28@newadmin.info' AS `pedidosdefloreria28@newadmin.info` union select 'pedidosdefloreria29@newadmin.info' AS `pedidosdefloreria29@newadmin.info`  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_lista_productos`
--
DROP TABLE IF EXISTS `v_lista_productos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`premiumf`@`localhost` SQL SECURITY DEFINER VIEW `v_lista_productos`  AS SELECT DISTINCT `pc`.`id_cuenta` AS `id_cuenta`, `pc`.`b_destacado` AS `b_destacado`, `pa`.`id_pais` AS `pais`, `z`.`id_zonas` AS `zppZona`, `cp`.`cppCategoria` AS `cppCategoria`, `c`.`activo` AS `c_activo`, `p`.`id_productos` AS `id_productos`, if(`p`.`ocasiones` like '%000022%',1,0) AS `condolencias` FROM (((((((`produ_productos_cuentas` `pc` join `productos` `p` on(`p`.`id_productos` = `pc`.`id_producto`)) join `paises` `pa` on(`pa`.`id_pais` = `p`.`pais`)) join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z` on(`z`.`id_zonas` = `zp`.`zppZona`)) join `categorias_por_producto` `cp` on(`cp`.`cppProducto` = `p`.`id_productos`)) join `categorias` `c` on(`c`.`id` = `cp`.`cppCategoria`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) WHERE `gpz`.`grupo` is nullunionselect distinct `pc`.`id_cuenta` AS `id_cuenta`,`pc`.`b_destacado` AS `b_destacado`,`pa`.`id_pais` AS `pais`,`z`.`id_zonas` AS `zppZona`,`cp`.`cppCategoria` AS `cppCategoria`,`c`.`activo` AS `c_activo`,`p`.`id_productos` AS `id_productos`,if(`p`.`ocasiones` like '%000022%',1,0) AS `condolencias` from (((((((`produ_productos_cuentas` `pc` join `productos` `p` on(`p`.`id_productos` = `pc`.`id_producto`)) join `paises` `pa` on(`pa`.`id_pais` = `p`.`pais`)) join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `zp`.`zppZona`)) join `categorias_por_producto` `cp` on(`cp`.`cppProducto` = `p`.`id_productos`)) join `categorias` `c` on(`c`.`id` = `cp`.`cppCategoria`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `pc`.`id_cuenta` AS `id_cuenta`,`pc`.`b_destacado` AS `b_destacado`,`pa`.`id_pais` AS `pais`,`z`.`id_zonas` AS `zppZona`,`cp`.`cppCategoria` AS `cppCategoria`,`c`.`activo` AS `c_activo`,`p`.`id_productos` AS `id_productos`,if(`p`.`ocasiones` like '%000022%',1,0) AS `condolencias` from ((((((((`produ_productos_cuentas` `pc` join `productos` `p` on(`p`.`id_productos` = `pc`.`id_producto`)) join `paises` `pa` on(`pa`.`id_pais` = `p`.`pais`)) join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z1` on(`z1`.`b_hereda_padre` = 'S' and `z1`.`id_zona_padre` = `zp`.`zppZona`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `z1`.`id_zonas`)) join `categorias_por_producto` `cp` on(`cp`.`cppProducto` = `p`.`id_productos`)) join `categorias` `c` on(`c`.`id` = `cp`.`cppCategoria`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `pc`.`id_cuenta` AS `id_cuenta`,`pc`.`b_destacado` AS `b_destacado`,`pa`.`id_pais` AS `pais`,`z`.`id_zonas` AS `zppZona`,`cp`.`cppCategoria` AS `cppCategoria`,`c`.`activo` AS `c_activo`,`p`.`id_productos` AS `id_productos`,if(`p`.`ocasiones` like '%000022%',1,0) AS `condolencias` from (((((((((`produ_productos_cuentas` `pc` join `productos` `p` on(`p`.`id_productos` = `pc`.`id_producto`)) join `paises` `pa` on(`pa`.`id_pais` = `p`.`pais`)) join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z1` on(`z1`.`b_hereda_padre` = 'S' and `z1`.`id_zona_padre` = `zp`.`zppZona`)) join `zonas` `z2` on(`z2`.`b_hereda_padre` = 'S' and `z2`.`id_zona_padre` = `z1`.`id_zonas`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `z2`.`id_zonas`)) join `categorias_por_producto` `cp` on(`cp`.`cppProducto` = `p`.`id_productos`)) join `categorias` `c` on(`c`.`id` = `cp`.`cppCategoria`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `pc`.`id_cuenta` AS `id_cuenta`,`pc`.`b_destacado` AS `b_destacado`,`pa`.`id_pais` AS `pais`,`z`.`id_zonas` AS `zppZona`,`cp`.`cppCategoria` AS `cppCategoria`,`c`.`activo` AS `c_activo`,`p`.`id_productos` AS `id_productos`,if(`p`.`ocasiones` like '%000022%',1,0) AS `condolencias` from ((((((((((`produ_productos_cuentas` `pc` join `productos` `p` on(`p`.`id_productos` = `pc`.`id_producto`)) join `paises` `pa` on(`pa`.`id_pais` = `p`.`pais`)) join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z1` on(`z1`.`b_hereda_padre` = 'S' and `z1`.`id_zona_padre` = `zp`.`zppZona`)) join `zonas` `z2` on(`z2`.`b_hereda_padre` = 'S' and `z2`.`id_zona_padre` = `z1`.`id_zonas`)) join `zonas` `z3` on(`z3`.`b_hereda_padre` = 'S' and `z3`.`id_zona_padre` = `z2`.`id_zonas`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `z3`.`id_zonas`)) join `categorias_por_producto` `cp` on(`cp`.`cppProducto` = `p`.`id_productos`)) join `categorias` `c` on(`c`.`id` = `cp`.`cppCategoria`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `pc`.`id_cuenta` AS `id_cuenta`,`pc`.`b_destacado` AS `b_destacado`,`pa`.`id_pais` AS `pais`,`z`.`id_zonas` AS `zppZona`,`cp`.`cppCategoria` AS `cppCategoria`,`c`.`activo` AS `c_activo`,`p`.`id_productos` AS `id_productos`,if(`p`.`ocasiones` like '%000022%',1,0) AS `condolencias` from (((((((`produ_productos_cuentas` `pc` join `productos` `p` on(`p`.`id_productos` = `pc`.`id_producto`)) join `paises` `pa` on(`pa`.`toma_productos_pais` = `p`.`pais`)) join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos` and `zp`.`zppZona` = `pa`.`toma_productos_zona`)) join `zonas` `z` on(`z`.`pais` = `pa`.`id_pais`)) join `categorias_por_producto` `cp` on(`cp`.`cppProducto` = `p`.`id_productos`)) join `categorias` `c` on(`c`.`id` = `cp`.`cppCategoria`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_notificaciones_proveedores_deshabilitadas`
--
DROP TABLE IF EXISTS `v_notificaciones_proveedores_deshabilitadas`;

CREATE ALGORITHM=UNDEFINED DEFINER=`premiumf_honda24`@`localhost` SQL SECURITY DEFINER VIEW `v_notificaciones_proveedores_deshabilitadas`  AS SELECT `p`.`proveedorID` AS `proveedorID`, `p`.`proveedorNombre` AS `proveedorNombre`, 'whatsapp' AS `whatsapp`, 'remainder_delivery' AS `remainder_delivery` FROM `proveedores` AS `p` WHERE !(`p`.`proveedorID` in (select `c`.`person_id` from (((`contacts` `c` join `type_contact` `t` on(`t`.`id` = `c`.`type_contact_id`)) join `contact_notifications` `n` on(`n`.`contact_id` = `c`.`id`)) join `notification_types` `nt` on(`nt`.`id` = `n`.`notification_type_id`)) where `t`.`name` = 'whatsapp' AND `c`.`active` = 1 AND `nt`.`name` = 'remainder_delivery')) AND `p`.`proveedorEstado` = 1 AND `p`.`proveedorID` > 0union allselect `p`.`proveedorID` AS `proveedorID`,`p`.`proveedorNombre` AS `proveedorNombre`,'whatsapp' AS `whatsapp`,'reminder_late_delivery' AS `reminder_late_delivery` from `proveedores` `p` where !(`p`.`proveedorID` in (select `c`.`person_id` from (((`contacts` `c` join `type_contact` `t` on(`t`.`id` = `c`.`type_contact_id`)) join `contact_notifications` `n` on(`n`.`contact_id` = `c`.`id`)) join `notification_types` `nt` on(`nt`.`id` = `n`.`notification_type_id`)) where `t`.`name` = 'whatsapp' and `c`.`active` = 1 and `nt`.`name` = 'reminder_late_delivery')) and `p`.`proveedorEstado` = 1 and `p`.`proveedorID` > 0 union all select `p`.`proveedorID` AS `proveedorID`,`p`.`proveedorNombre` AS `proveedorNombre`,'whatsapp' AS `whatsapp`,'order_status' AS `order_status` from `proveedores` `p` where !(`p`.`proveedorID` in (select `c`.`person_id` from (((`contacts` `c` join `type_contact` `t` on(`t`.`id` = `c`.`type_contact_id`)) join `contact_notifications` `n` on(`n`.`contact_id` = `c`.`id`)) join `notification_types` `nt` on(`nt`.`id` = `n`.`notification_type_id`)) where `t`.`name` = 'whatsapp' and `c`.`active` = 1 and `nt`.`name` = 'order_status')) and `p`.`proveedorEstado` = 1 and `p`.`proveedorID` > 0 union all select `p`.`proveedorID` AS `proveedorID`,`p`.`proveedorNombre` AS `proveedorNombre`,'whatsapp' AS `whatsapp`,'delivery_summary' AS `delivery_summary` from `proveedores` `p` where !(`p`.`proveedorID` in (select `c`.`person_id` from (((`contacts` `c` join `type_contact` `t` on(`t`.`id` = `c`.`type_contact_id`)) join `contact_notifications` `n` on(`n`.`contact_id` = `c`.`id`)) join `notification_types` `nt` on(`nt`.`id` = `n`.`notification_type_id`)) where `t`.`name` = 'whatsapp' and `c`.`active` = 1 and `nt`.`name` = 'delivery_summary')) and `p`.`proveedorEstado` = 1 and `p`.`proveedorID` > 0 union all select `p`.`proveedorID` AS `proveedorID`,`p`.`proveedorNombre` AS `proveedorNombre`,'email' AS `email`,'remainder_delivery' AS `remainder_delivery` from `proveedores` `p` where !(`p`.`proveedorID` in (select `c`.`person_id` from (((`contacts` `c` join `type_contact` `t` on(`t`.`id` = `c`.`type_contact_id`)) join `contact_notifications` `n` on(`n`.`contact_id` = `c`.`id`)) join `notification_types` `nt` on(`nt`.`id` = `n`.`notification_type_id`)) where `t`.`name` = 'email' and `c`.`active` = 1 and `nt`.`name` = 'remainder_delivery')) and `p`.`proveedorEstado` = 1 and `p`.`proveedorID` > 0 union all select `p`.`proveedorID` AS `proveedorID`,`p`.`proveedorNombre` AS `proveedorNombre`,'email' AS `email`,'reminder_late_delivery' AS `reminder_late_delivery` from `proveedores` `p` where !(`p`.`proveedorID` in (select `c`.`person_id` from (((`contacts` `c` join `type_contact` `t` on(`t`.`id` = `c`.`type_contact_id`)) join `contact_notifications` `n` on(`n`.`contact_id` = `c`.`id`)) join `notification_types` `nt` on(`nt`.`id` = `n`.`notification_type_id`)) where `t`.`name` = 'email' and `c`.`active` = 1 and `nt`.`name` = 'reminder_late_delivery')) and `p`.`proveedorEstado` = 1 and `p`.`proveedorID` > 0 union all select `p`.`proveedorID` AS `proveedorID`,`p`.`proveedorNombre` AS `proveedorNombre`,'email' AS `email`,'order_status' AS `order_status` from `proveedores` `p` where !(`p`.`proveedorID` in (select `c`.`person_id` from (((`contacts` `c` join `type_contact` `t` on(`t`.`id` = `c`.`type_contact_id`)) join `contact_notifications` `n` on(`n`.`contact_id` = `c`.`id`)) join `notification_types` `nt` on(`nt`.`id` = `n`.`notification_type_id`)) where `t`.`name` = 'email' and `c`.`active` = 1 and `nt`.`name` = 'order_status')) and `p`.`proveedorEstado` = 1 and `p`.`proveedorID` > 0 union all select `p`.`proveedorID` AS `proveedorID`,`p`.`proveedorNombre` AS `proveedorNombre`,'email' AS `email`,'delivery_summary' AS `delivery_summary` from `proveedores` `p` where !(`p`.`proveedorID` in (select `c`.`person_id` from (((`contacts` `c` join `type_contact` `t` on(`t`.`id` = `c`.`type_contact_id`)) join `contact_notifications` `n` on(`n`.`contact_id` = `c`.`id`)) join `notification_types` `nt` on(`nt`.`id` = `n`.`notification_type_id`)) where `t`.`name` = 'email' and `c`.`active` = 1 and `nt`.`name` = 'delivery_summary')) and `p`.`proveedorEstado` = 1 and `p`.`proveedorID` > 0 order by 1,2,4  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_producto_categorias`
--
DROP TABLE IF EXISTS `v_producto_categorias`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_producto_categorias`  AS SELECT DISTINCT `pc`.`id_cuenta` AS `id_cuenta`, `pc`.`b_destacado` AS `b_destacado`, `p`.`pais` AS `pais`, `cp`.`cppCategoria` AS `cppCategoria`, `c`.`activo` AS `c_activo`, `p`.`id_productos` AS `id_productos`, if(`p`.`ocasiones` like '%000022%',1,0) AS `condolencias` FROM ((((`produ_productos_cuentas` `pc` join `productos` `p` on(`p`.`id_productos` = `pc`.`id_producto` and `p`.`pais` > 0)) join `categorias_por_producto` `cp` on(`cp`.`cppProducto` = `p`.`id_productos`)) join `produ_categorias_cuentas` `cc` on(`cc`.`id_cuenta` = `pc`.`id_cuenta` and `cc`.`id_categoria` = `cp`.`cppCategoria`)) join `categorias` `c` on(`c`.`id` = `cp`.`cppCategoria`)) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_proveedores_productos`
--
DROP TABLE IF EXISTS `v_proveedores_productos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`premiumf_honda24`@`localhost` SQL SECURITY DEFINER VIEW `v_proveedores_productos`  AS SELECT `r`.`proveedor_id` AS `proveedor_id`, `r`.`date_entrega_realizada` AS `date_entrega_realizada`, `r`.`date_entrega_teorica_hasta` AS `date_entrega_teorica_hasta`, `ma`.`motivoNombre` AS `anulacion`, `mr`.`motivoNombre` AS `reprogramacion`, `rm`.`nombre` AS `reclamo`, `r`.`r01` AS `r01`, `r`.`r01t` AS `r01t` FROM (((`premiumf_dataengineer`.`pedidos_datos_redundantes` `r` left join `motivos_anulacion` `ma` on(`ma`.`motivoID` = `r`.`motivos_anulacion_id` and `ma`.`responsible_cancellation` = 'proveedor')) left join `motivos_reprogramacion` `mr` on(`mr`.`motivoID` = `r`.`motivo_reprogramacion_id` and `mr`.`responsible_return` = 'proveedor')) left join `reclamos_motivos` `rm` on(`rm`.`id` = `r`.`reclamos_motivo1_id` and `rm`.`responsible_claim` = 'proveedor')) ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_zonas_x_productos`
--
DROP TABLE IF EXISTS `v_zonas_x_productos`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_zonas_x_productos`  AS SELECT DISTINCT `z`.`id_zonas` AS `zppZona`, `p`.`id_productos` AS `id_productos` FROM (((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z` on(`z`.`id_zonas` = `zp`.`zppZona`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) WHERE `gpz`.`grupo` is nullunionselect distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos` from (((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `zp`.`zppZona`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos` from ((((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z1` on(`z1`.`b_hereda_padre` = 'S' and `z1`.`id_zona_padre` = `zp`.`zppZona`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `z1`.`id_zonas`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos` from (((((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z1` on(`z1`.`b_hereda_padre` = 'S' and `z1`.`id_zona_padre` = `zp`.`zppZona`)) join `zonas` `z2` on(`z2`.`b_hereda_padre` = 'S' and `z2`.`id_zona_padre` = `z1`.`id_zonas`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `z2`.`id_zonas`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos` from ((((((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z1` on(`z1`.`b_hereda_padre` = 'S' and `z1`.`id_zona_padre` = `zp`.`zppZona`)) join `zonas` `z2` on(`z2`.`b_hereda_padre` = 'S' and `z2`.`id_zona_padre` = `z1`.`id_zonas`)) join `zonas` `z3` on(`z3`.`b_hereda_padre` = 'S' and `z3`.`id_zona_padre` = `z2`.`id_zonas`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `z3`.`id_zonas`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos` from ((((`productos` `p` join `paises` `pa` on(`pa`.`toma_productos_pais` = `p`.`pais`)) join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos` and `zp`.`zppZona` = `pa`.`toma_productos_zona`)) join `zonas` `z` on(`z`.`pais` = `pa`.`id_pais`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_zonas_x_productos2`
--
DROP TABLE IF EXISTS `v_zonas_x_productos2`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_zonas_x_productos2`  AS SELECT DISTINCT `z`.`id_zonas` AS `zppZona`, `p`.`id_productos` AS `id_productos`, `z`.`pais` AS `pais` FROM (((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z` on(`z`.`id_zonas` = `zp`.`zppZona`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) WHERE `gpz`.`grupo` is nullunionselect distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos`,`z`.`pais` AS `pais` from (((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `zp`.`zppZona`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos`,`z`.`pais` AS `pais` from ((((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z1` on(`z1`.`b_hereda_padre` = 'S' and `z1`.`id_zona_padre` = `zp`.`zppZona`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `z1`.`id_zonas`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos`,`z`.`pais` AS `pais` from (((((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z1` on(`z1`.`b_hereda_padre` = 'S' and `z1`.`id_zona_padre` = `zp`.`zppZona`)) join `zonas` `z2` on(`z2`.`b_hereda_padre` = 'S' and `z2`.`id_zona_padre` = `z1`.`id_zonas`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `z2`.`id_zonas`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos`,`z`.`pais` AS `pais` from ((((((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z1` on(`z1`.`b_hereda_padre` = 'S' and `z1`.`id_zona_padre` = `zp`.`zppZona`)) join `zonas` `z2` on(`z2`.`b_hereda_padre` = 'S' and `z2`.`id_zona_padre` = `z1`.`id_zonas`)) join `zonas` `z3` on(`z3`.`b_hereda_padre` = 'S' and `z3`.`id_zona_padre` = `z2`.`id_zonas`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `z3`.`id_zonas`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos`,`z`.`pais` AS `pais` from ((((`productos` `p` join `paises` `pa` on(`pa`.`toma_productos_pais` = `p`.`pais`)) join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos` and `zp`.`zppZona` = `pa`.`toma_productos_zona`)) join `zonas` `z` on(`z`.`pais` = `pa`.`id_pais`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `v_zonas_x_productos_new`
--
DROP TABLE IF EXISTS `v_zonas_x_productos_new`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_zonas_x_productos_new`  AS SELECT DISTINCT `z`.`id_zonas` AS `zppZona`, `p`.`id_productos` AS `id_productos` FROM (((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z` on(`z`.`id_zonas` = `zp`.`zppZona`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) WHERE `gpz`.`grupo` is nullunionselect distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos` from (((`productos` `p` join `zonas_por_producto` `zp` on(`zp`.`zppProducto` = `p`.`id_productos`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `zp`.`zppZona`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos` from ((((`productos` `p` join `product_catalog` `pc` on(`pc`.`product_id` = `p`.`id_productos`)) join `catalog_by_zone` `cz` on(`cz`.`catalog_id` = `pc`.`catalog_id`)) join `zonas` `z` on(`z`.`id_zonas` = `cz`.`zone_id`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null union select distinct `z`.`id_zonas` AS `zppZona`,`p`.`id_productos` AS `id_productos` from ((((`productos` `p` join `product_catalog` `pc` on(`pc`.`product_id` = `p`.`id_productos`)) join `catalog_by_zone` `cz` on(`cz`.`catalog_id` = `pc`.`catalog_id`)) join `zonas` `z` on(`z`.`b_hereda_padre` = 'S' and `z`.`id_zona_padre` = `cz`.`zone_id`)) left join `grupos_productos_zonas` `gpz` on(`gpz`.`producto` = `p`.`id_productos` and `gpz`.`zona` = `z`.`id_zonas`)) where `gpz`.`grupo` is null  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `zonasParaAnalytics`
--
DROP TABLE IF EXISTS `zonasParaAnalytics`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `zonasParaAnalytics`  AS SELECT concat('WHEN (',group_concat(concat(if(`a`.`pos` MOD 50 = 0,') OR (',''),'CONTAINS_TEXT(UrlLandingPage, "',`a`.`alias`,'")',if(`a`.`alias_es` is not null and `a`.`alias_es` not in ('',`a`.`alias`),concat(' OR CONTAINS_TEXT(UrlLandingPage, "',`a`.`alias_es`,'")'),''),if(`a`.`alias_en` is not null and `a`.`alias_en` not in ('',`a`.`alias`,`a`.`alias_es`),concat(' OR CONTAINS_TEXT(UrlLandingPage, "',`a`.`alias_en`,'")'),'')) separator ' OR '),') THEN "',`a`.`nombrePais`,'"') AS `condicion` FROM (select `a`.`alias` AS `alias`,`a`.`alias_es` AS `alias_es`,`a`.`alias_en` AS `alias_en`,`a`.`nombrePais` AS `nombrePais`,row_number() over ( partition by `a`.`nombrePais` order by `a`.`alias`) AS `pos` from (select `paises`.`alias` AS `alias`,`paises`.`alias_es` AS `alias_es`,`paises`.`alias_en` AS `alias_en`,`paises`.`nombre` AS `nombrePais` from `paises` union all select `z`.`alias` AS `alias`,`z`.`alias_es` AS `alias_es`,`z`.`alias_en` AS `alias_en`,`p`.`nombre` AS `nombrePais` from (`zonas` `z` join `paises` `p` on(`p`.`id_pais` = `z`.`pais`)) where left(`p`.`nombre`,1) <> '-') `a`) AS `a` GROUP BY `a`.`nombrePais` ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `AB`
--
ALTER TABLE `AB`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fecha, cuenta` (`Fecha`,`id_cuenta`,`id`),
  ADD UNIQUE KEY `id_cuenta` (`id_cuenta`,`Fecha`,`id`),
  ADD KEY `userAgent` (`UserAgent`(3072));

--
-- Indices de la tabla `acciones_por_pedido`
--
ALTER TABLE `acciones_por_pedido`
  ADD PRIMARY KEY (`app_id`),
  ADD KEY `app_pedido` (`app_pedido`),
  ADD KEY `app_tipo_accion` (`app_tipo_accion`),
  ADD KEY `app_operador` (`app_operador`);

--
-- Indices de la tabla `acuerdos_floristas`
--
ALTER TABLE `acuerdos_floristas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `acuerdos_tipo_prod_size_unique` (`type_product`,`product_id`,`size`) USING BTREE;

--
-- Indices de la tabla `adicionales`
--
ALTER TABLE `adicionales`
  ADD PRIMARY KEY (`id_adicionales`),
  ADD KEY `nombre` (`nombre`),
  ADD KEY `pais` (`pais`);

--
-- Indices de la tabla `adicionales_cuentas`
--
ALTER TABLE `adicionales_cuentas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuenta` (`cuenta`,`adicional`) USING BTREE;

--
-- Indices de la tabla `adicionales_e`
--
ALTER TABLE `adicionales_e`
  ADD PRIMARY KEY (`id_adicionales`),
  ADD KEY `nombre` (`nombre`);

--
-- Indices de la tabla `adicionales_por_producto`
--
ALTER TABLE `adicionales_por_producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adicional` (`adicional`),
  ADD KEY `producto` (`producto`,`adicional`) USING BTREE;

--
-- Indices de la tabla `adjuntos_pedido`
--
ALTER TABLE `adjuntos_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_pedido` (`pedido`),
  ADD KEY `idx_fecha` (`fecha`);

--
-- Indices de la tabla `afiliados`
--
ALTER TABLE `afiliados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `alerts`
--
ALTER TABLE `alerts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `alerts_records`
--
ALTER TABLE `alerts_records`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_at` (`created_at`,`alert_id`,`interval`) USING BTREE;

--
-- Indices de la tabla `aliases_zonas`
--
ALTER TABLE `aliases_zonas`
  ADD PRIMARY KEY (`alias`);

--
-- Indices de la tabla `app_geoip`
--
ALTER TABLE `app_geoip`
  ADD PRIMARY KEY (`ip`);

--
-- Indices de la tabla `automatic_assign_operator`
--
ALTER TABLE `automatic_assign_operator`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `backup_precios_sv`
--
ALTER TABLE `backup_precios_sv`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `banners_fam`
--
ALTER TABLE `banners_fam`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `banners_fecha_especial`
--
ALTER TABLE `banners_fecha_especial`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estado` (`estado`),
  ADD KEY `posicion` (`posicion`),
  ADD KEY `tipo` (`tipo`);

--
-- Indices de la tabla `banners_html5`
--
ALTER TABLE `banners_html5`
  ADD PRIMARY KEY (`bannerID`),
  ADD KEY `bannerEstado` (`bannerEstado`);

--
-- Indices de la tabla `banners_html5_positions`
--
ALTER TABLE `banners_html5_positions`
  ADD PRIMARY KEY (`posID`);

--
-- Indices de la tabla `banners_pf`
--
ALTER TABLE `banners_pf`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `banners_por_cuenta`
--
ALTER TABLE `banners_por_cuenta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuenta` (`cuenta`);

--
-- Indices de la tabla `banners_por_pais`
--
ALTER TABLE `banners_por_pais`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bin_cards`
--
ALTER TABLE `bin_cards`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pkbin` (`bin`);

--
-- Indices de la tabla `bloqueos_stock_florista`
--
ALTER TABLE `bloqueos_stock_florista`
  ADD PRIMARY KEY (`id`),
  ADD KEY `florista_id` (`florista_id`),
  ADD KEY `tipo_bloqueo` (`tipo_bloqueo`),
  ADD KEY `expira_en` (`expira_en`);

--
-- Indices de la tabla `bonificaciones`
--
ALTER TABLE `bonificaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bonificaciones_historicos`
--
ALTER TABLE `bonificaciones_historicos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `bonuses`
--
ALTER TABLE `bonuses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bonuses_bonus_code_unique` (`bonus_code`) USING BTREE;

--
-- Indices de la tabla `bonu_country`
--
ALTER TABLE `bonu_country`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bonu_country_bonus_id_foreign` (`bonus_id`),
  ADD KEY `bonu_country_country_id_foreign` (`country_id`);

--
-- Indices de la tabla `bonu_site`
--
ALTER TABLE `bonu_site`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bonu_site_bonus_id_foreign` (`bonus_id`);

--
-- Indices de la tabla `cache_menu`
--
ALTER TABLE `cache_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cache_menu_fam`
--
ALTER TABLE `cache_menu_fam`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuenta` (`cuenta`),
  ADD KEY `zona` (`zona`),
  ADD KEY `cuenta_2` (`cuenta`,`zona`);

--
-- Indices de la tabla `cancellation_reasons`
--
ALTER TABLE `cancellation_reasons`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cantidad_chequeos_ip`
--
ALTER TABLE `cantidad_chequeos_ip`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `catalogs`
--
ALTER TABLE `catalogs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `catalog_by_zone`
--
ALTER TABLE `catalog_by_zone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `zone_id` (`zone_id`) USING BTREE;

--
-- Indices de la tabla `catalog_exclusion_exceptions`
--
ALTER TABLE `catalog_exclusion_exceptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `zone_id` (`zone_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `catalog_inclusion_exceptions`
--
ALTER TABLE `catalog_inclusion_exceptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `zone_id` (`zone_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `activo` (`activo`,`id`) USING BTREE,
  ADD KEY `ocaocate` (`ocaocate`);

--
-- Indices de la tabla `categorias_df`
--
ALTER TABLE `categorias_df`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorias_especiales`
--
ALTER TABLE `categorias_especiales`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `activo_id` (`activo`,`id`),
  ADD KEY `activo` (`activo`);

--
-- Indices de la tabla `categorias_por_producto`
--
ALTER TABLE `categorias_por_producto`
  ADD PRIMARY KEY (`cppID`),
  ADD KEY `cppProducto` (`cppProducto`,`cppCategoria`) USING BTREE,
  ADD KEY `cppCategoria` (`cppCategoria`,`cppProducto`) USING BTREE;

--
-- Indices de la tabla `chat2desk_countries`
--
ALTER TABLE `chat2desk_countries`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `chat2desk_messages`
--
ALTER TABLE `chat2desk_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`,`event_time`) USING BTREE,
  ADD KEY `idx_c2d_messages_message_id` (`message_id`,`client_id`);

--
-- Indices de la tabla `chat2desk_pending_messages`
--
ALTER TABLE `chat2desk_pending_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_c2d_pending_client_sent` (`chat2desk_id`,`sent`);

--
-- Indices de la tabla `checkinj`
--
ALTER TABLE `checkinj`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `date` (`date`,`id`);

--
-- Indices de la tabla `claim_reasons`
--
ALTER TABLE `claim_reasons`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `click_productos`
--
ALTER TABLE `click_productos`
  ADD PRIMARY KEY (`id_pais`,`pais`,`id_cuenta`,`fecha`,`id_producto`),
  ADD KEY `fecha` (`fecha`,`id_cuenta`,`id_pais`,`id_producto`),
  ADD KEY `userAgent` (`userAgent`,`session`(1024));

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail_unique` (`mail`),
  ADD KEY `apellido` (`apellido`),
  ADD KEY `mail` (`mail`),
  ADD KEY `password01` (`password01`),
  ADD KEY `idx_tel01_digitos` (`telefono01_digitos`);

--
-- Indices de la tabla `clientes_bags`
--
ALTER TABLE `clientes_bags`
  ADD PRIMARY KEY (`bagID`),
  ADD KEY `bagCode` (`bagCode`),
  ADD KEY `bagCliente` (`bagCliente`),
  ADD KEY `bagToken` (`bagToken`(250));

--
-- Indices de la tabla `clients_chat2desk`
--
ALTER TABLE `clients_chat2desk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chat2desk_id` (`chat2desk_id`);

--
-- Indices de la tabla `clients_chat2desk_event_notification`
--
ALTER TABLE `clients_chat2desk_event_notification`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `club`
--
ALTER TABLE `club`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`,`id`);

--
-- Indices de la tabla `cobranzas_online`
--
ALTER TABLE `cobranzas_online`
  ADD PRIMARY KEY (`tipo_cobranza`,`id_cobranza`),
  ADD UNIQUE KEY `pedido_id_fecha_cobranza` (`pedido_id`,`fecha_cobranza`,`tipo_cobranza`,`id_cobranza`);

--
-- Indices de la tabla `cobranzas_online_devoluciones`
--
ALTER TABLE `cobranzas_online_devoluciones`
  ADD PRIMARY KEY (`tipo_cobranza`,`id_cobranza`,`fecha_devolucion`);

--
-- Indices de la tabla `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `color_availability_exceptions`
--
ALTER TABLE `color_availability_exceptions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `zone_id` (`zone_id`,`country_id`,`color_id`);

--
-- Indices de la tabla `comprobantes`
--
ALTER TABLE `comprobantes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `type_contact_id` (`type_contact_id`);

--
-- Indices de la tabla `contacts_log`
--
ALTER TABLE `contacts_log`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `contact_notifications`
--
ALTER TABLE `contact_notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notification_type_id` (`notification_type_id`),
  ADD KEY `contact_id` (`contact_id`);

--
-- Indices de la tabla `corregidos_ingles`
--
ALTER TABLE `corregidos_ingles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `correos_excluidos_para_campanias`
--
ALTER TABLE `correos_excluidos_para_campanias`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `costos_fecha`
--
ALTER TABLE `costos_fecha`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fecha` (`fecha`),
  ADD KEY `estado` (`estado`);

--
-- Indices de la tabla `costos_fecha_cuentas`
--
ALTER TABLE `costos_fecha_cuentas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuenta` (`cuenta`);

--
-- Indices de la tabla `costos_por_pedido`
--
ALTER TABLE `costos_por_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido` (`pedido`),
  ADD KEY `operador` (`operador`);

--
-- Indices de la tabla `cotizacionporfecha`
--
ALTER TABLE `cotizacionporfecha`
  ADD PRIMARY KEY (`id`),
  ADD KEY `desde` (`desde`),
  ADD KEY `hasta` (`hasta`);

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cuentas_facebook`
--
ALTER TABLE `cuentas_facebook`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuenta` (`cuenta`);

--
-- Indices de la tabla `cuentas_twitter`
--
ALTER TABLE `cuentas_twitter`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuenta` (`cuenta`);

--
-- Indices de la tabla `datos_pedido`
--
ALTER TABLE `datos_pedido`
  ADD PRIMARY KEY (`id_pedido`,`nombre`,`fecha_actualizacion`,`habilitado`),
  ADD KEY `datos_pedidos_id_usuario` (`id_usuario`);

--
-- Indices de la tabla `datos_proveedor_por_pedido`
--
ALTER TABLE `datos_proveedor_por_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido` (`pedido`),
  ADD KEY `operador` (`operador`);

--
-- Indices de la tabla `densest_areas`
--
ALTER TABLE `densest_areas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `destacados_pais`
--
ALTER TABLE `destacados_pais`
  ADD PRIMARY KEY (`destacadoID`),
  ADD KEY `destacadoPais` (`destacadoPais`),
  ADD KEY `destacadoCuenta` (`destacadoCuenta`);

--
-- Indices de la tabla `destinatarios`
--
ALTER TABLE `destinatarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pais_id` (`id_pais`,`id`),
  ADD UNIQUE KEY `zona_id` (`zona_id`,`id`) USING BTREE,
  ADD KEY `id_pais` (`id_pais`),
  ADD KEY `eliminado` (`eliminado`),
  ADD KEY `ciudad` (`ciudad`),
  ADD KEY `estado` (`estado`),
  ADD KEY `remitente` (`remitente`,`eliminado`,`ultima_compra`,`id`) USING BTREE,
  ADD KEY `pais` (`pais`,`lat`,`lng`) USING BTREE,
  ADD KEY `idx_destinatarios_lat_lng_zona_distancia` (`distancia_punto_de_referencia`,`zona_id`) USING BTREE;

--
-- Indices de la tabla `details_order_delivered`
--
ALTER TABLE `details_order_delivered`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indices de la tabla `detalle_ordenes_aprobadas`
--
ALTER TABLE `detalle_ordenes_aprobadas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orden` (`orden`),
  ADD KEY `operador` (`operador`);

--
-- Indices de la tabla `emails_adjuntos`
--
ALTER TABLE `emails_adjuntos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_email_id` (`email_id`),
  ADD KEY `idx_pedido` (`pedido`);

--
-- Indices de la tabla `emails_enviados`
--
ALTER TABLE `emails_enviados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `operador` (`operador`),
  ADD KEY `pedido` (`pedido`),
  ADD KEY `groupID` (`groupID`);

--
-- Indices de la tabla `emails_rechazados`
--
ALTER TABLE `emails_rechazados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fecha` (`error_message`(10),`fecha`) USING BTREE,
  ADD KEY `groupID` (`estado`,`to_email`(15)) USING BTREE;

--
-- Indices de la tabla `especiales_por_producto`
--
ALTER TABLE `especiales_por_producto`
  ADD PRIMARY KEY (`epp_id`),
  ADD KEY `epp_producto` (`epp_producto`),
  ADD KEY `epp_especial` (`epp_especial`);

--
-- Indices de la tabla `especiales_tipos`
--
ALTER TABLE `especiales_tipos`
  ADD PRIMARY KEY (`especial_id`),
  ADD KEY `especial_activo` (`especial_activo`);

--
-- Indices de la tabla `estados_auto`
--
ALTER TABLE `estados_auto`
  ADD PRIMARY KEY (`estadoID`);

--
-- Indices de la tabla `estados_backend`
--
ALTER TABLE `estados_backend`
  ADD PRIMARY KEY (`eb_id`);

--
-- Indices de la tabla `estados_por_pedido`
--
ALTER TABLE `estados_por_pedido`
  ADD PRIMARY KEY (`epp_id`),
  ADD UNIQUE KEY `final_pedido` (`final`,`epp_pedido`,`epp_id`),
  ADD KEY `epp_estado_backend` (`epp_estado_backend`),
  ADD KEY `epp_operador` (`epp_operador`),
  ADD KEY `final` (`final`),
  ADD KEY `epp_fecha` (`epp_fecha`),
  ADD KEY `pedidos_por_estado` (`final`,`epp_estado_backend`,`epp_pedido`),
  ADD KEY `epp_pedido` (`epp_pedido`,`final`,`epp_id`) USING BTREE;

--
-- Indices de la tabla `etiquetas_descripcion`
--
ALTER TABLE `etiquetas_descripcion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codigo` (`codigo`),
  ADD KEY `id_cuenta` (`id_cuenta`);

--
-- Indices de la tabla `etiquetas_descripcion_bu`
--
ALTER TABLE `etiquetas_descripcion_bu`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id_evento`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `f_evento` (`f_evento`),
  ADD KEY `id_tipo` (`id_tipo`),
  ADD KEY `id_relacion` (`id_relacion`);

--
-- Indices de la tabla `extractor_url`
--
ALTER TABLE `extractor_url`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ExtraData`
--
ALTER TABLE `ExtraData`
  ADD PRIMARY KEY (`TableName`,`AccountId`,`RecordId`);

--
-- Indices de la tabla `facebook_apis`
--
ALTER TABLE `facebook_apis`
  ADD PRIMARY KEY (`cuenta`);

--
-- Indices de la tabla `facturacion_por_medio_cuenta`
--
ALTER TABLE `facturacion_por_medio_cuenta`
  ADD KEY `cuenta` (`cuenta`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `faq_cuentas`
--
ALTER TABLE `faq_cuentas`
  ADD PRIMARY KEY (`faqID`);

--
-- Indices de la tabla `fechas_entrega_por_pedido`
--
ALTER TABLE `fechas_entrega_por_pedido`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fecha_alta` (`fecha_alta`,`pedido`,`id`),
  ADD KEY `pedido` (`pedido`),
  ADD KEY `operador` (`operador`);

--
-- Indices de la tabla `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`),
  ADD KEY `q1` (`q1`,`q2`,`q3`,`q4`,`q5`),
  ADD KEY `pedido` (`pedido`),
  ADD KEY `fecha` (`fecha`),
  ADD KEY `hash` (`hash`),
  ADD KEY `id_cuenta` (`id_cuenta`),
  ADD KEY `tipo` (`tipo`),
  ADD KEY `idx_pedido_respuesta` (`pedido`,`fecha_respuesta`);

--
-- Indices de la tabla `feriados`
--
ALTER TABLE `feriados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pais` (`id_pais`),
  ADD KEY `fh_feriado` (`fh_feriado`);

--
-- Indices de la tabla `floristas`
--
ALTER TABLE `floristas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pais` (`pais`),
  ADD KEY `usuario` (`usuario`(250)),
  ADD KEY `password` (`password`(250));

--
-- Indices de la tabla `floristas_acciones`
--
ALTER TABLE `floristas_acciones`
  ADD PRIMARY KEY (`accionID`);

--
-- Indices de la tabla `floristas_hash`
--
ALTER TABLE `floristas_hash`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hash` (`hash`(250)),
  ADD KEY `email` (`email`(250));

--
-- Indices de la tabla `floristas_nueva_db`
--
ALTER TABLE `floristas_nueva_db`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `floristas_por_pedido`
--
ALTER TABLE `floristas_por_pedido`
  ADD PRIMARY KEY (`fppID`);

--
-- Indices de la tabla `floristas_usuarios`
--
ALTER TABLE `floristas_usuarios`
  ADD PRIMARY KEY (`userID`);

--
-- Indices de la tabla `florista_productos`
--
ALTER TABLE `florista_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `florista_productos_producto_id_index` (`producto_id`),
  ADD KEY `florista_productos_florista_id_index` (`florista_id`);

--
-- Indices de la tabla `florista_productos_acuerdos`
--
ALTER TABLE `florista_productos_acuerdos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `florista_productos_producto_id_index` (`producto_id`),
  ADD KEY `florista_productos_florista_id_index` (`florista_id`);

--
-- Indices de la tabla `florist_actions`
--
ALTER TABLE `florist_actions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_current_type` (`id_order`,`current`,`id_type_florist_action`,`id`),
  ADD KEY `id_action` (`id_action`);

--
-- Indices de la tabla `florist_errors`
--
ALTER TABLE `florist_errors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `follow_up_comments`
--
ALTER TABLE `follow_up_comments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `frases_sugeridas`
--
ALTER TABLE `frases_sugeridas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ocasion` (`ocasion`),
  ADD KEY `estado` (`estado`);

--
-- Indices de la tabla `frases_sugeridas_refund`
--
ALTER TABLE `frases_sugeridas_refund`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ocasion` (`tipo`),
  ADD KEY `estado` (`estado`);

--
-- Indices de la tabla `generar_imagenes`
--
ALTER TABLE `generar_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `generar_imagenes_id_producto_estado_index` (`id_producto`,`estado`),
  ADD KEY `generar_imagenes_estado_created_at_index` (`estado`,`created_at`);

--
-- Indices de la tabla `gifts`
--
ALTER TABLE `gifts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `gifts_for_products`
--
ALTER TABLE `gifts_for_products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `gift_for_sales_order`
--
ALTER TABLE `gift_for_sales_order`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `glocalgo_checkout`
--
ALTER TABLE `glocalgo_checkout`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_dlocalgo_id` (`order_dlocalgo_id`(20));

--
-- Indices de la tabla `grupos`
--
ALTER TABLE `grupos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alerta_encender` (`alerta_encender`(191)),
  ADD KEY `alerta_apagar` (`alerta_apagar`(191)),
  ADD KEY `pais` (`pais`),
  ADD KEY `estado` (`estado`);

--
-- Indices de la tabla `grupos_productos`
--
ALTER TABLE `grupos_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `grupo` (`grupo`),
  ADD KEY `producto` (`producto`);

--
-- Indices de la tabla `grupos_productos_cuentas`
--
ALTER TABLE `grupos_productos_cuentas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto` (`producto`),
  ADD KEY `cuenta` (`cuenta`);

--
-- Indices de la tabla `grupos_productos_zonas`
--
ALTER TABLE `grupos_productos_zonas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto` (`producto`),
  ADD KEY `cuenta` (`zona`),
  ADD KEY `grupos_productos_z_idx_grupo_producto` (`grupo`,`producto`,`zona`),
  ADD KEY `grupos_productos_z_idx_grupo_zona` (`grupo`,`zona`,`producto`);

--
-- Indices de la tabla `hash_por_pedido`
--
ALTER TABLE `hash_por_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido` (`pedido`),
  ADD KEY `hash` (`hash`(250));

--
-- Indices de la tabla `horarios_de_entrega`
--
ALTER TABLE `horarios_de_entrega`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `hora_entrega`
--
ALTER TABLE `hora_entrega`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activo` (`activo`),
  ADD KEY `soloMX` (`soloMX`);

--
-- Indices de la tabla `hora_entrega_especial`
--
ALTER TABLE `hora_entrega_especial`
  ADD PRIMARY KEY (`hID`),
  ADD KEY `hActivo` (`hActivo`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `intentos_pago`
--
ALTER TABLE `intentos_pago`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ip` (`ip`(250)),
  ADD KEY `orden` (`orden`,`fecha`) USING BTREE;

--
-- Indices de la tabla `ip_info`
--
ALTER TABLE `ip_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido` (`pedido`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `landing_images`
--
ALTER TABLE `landing_images`
  ADD PRIMARY KEY (`landingID`);

--
-- Indices de la tabla `lista_mensajes_productos`
--
ALTER TABLE `lista_mensajes_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `llamados_florista`
--
ALTER TABLE `llamados_florista`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `location_types`
--
ALTER TABLE `location_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lock_pedido`
--
ALTER TABLE `lock_pedido`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `log2co`
--
ALTER TABLE `log2co`
  ADD PRIMARY KEY (`pedido`);

--
-- Indices de la tabla `logpagos`
--
ALTER TABLE `logpagos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `logRemito`
--
ALTER TABLE `logRemito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido` (`pedido`);

--
-- Indices de la tabla `log_ipn`
--
ALTER TABLE `log_ipn`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `log_modificacion_productos`
--
ALTER TABLE `log_modificacion_productos`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `mailtesteo`
--
ALTER TABLE `mailtesteo`
  ADD KEY `parametro` (`parametro`(250));

--
-- Indices de la tabla `medios_por_cuenta`
--
ALTER TABLE `medios_por_cuenta`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `mensajes_fechas_especiales`
--
ALTER TABLE `mensajes_fechas_especiales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mensajes_fechas_especiales_paises`
--
ALTER TABLE `mensajes_fechas_especiales_paises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pais` (`pais`);

--
-- Indices de la tabla `mensajes_operador`
--
ALTER TABLE `mensajes_operador`
  ADD PRIMARY KEY (`mensajeID`);

--
-- Indices de la tabla `mensajes_operador_relacion`
--
ALTER TABLE `mensajes_operador_relacion`
  ADD PRIMARY KEY (`rID`);

--
-- Indices de la tabla `mensajes_paises`
--
ALTER TABLE `mensajes_paises`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pais_seccion` (`pais`,`seccion`,`id`);

--
-- Indices de la tabla `mensajes_paises_i`
--
ALTER TABLE `mensajes_paises_i`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pais_seccion` (`pais`,`seccion`,`id`);

--
-- Indices de la tabla `mensajes_por_horario`
--
ALTER TABLE `mensajes_por_horario`
  ADD PRIMARY KEY (`mens_id`);

--
-- Indices de la tabla `mensajes_por_horario_imagenes`
--
ALTER TABLE `mensajes_por_horario_imagenes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indices de la tabla `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indices de la tabla `motivos_cambio_producto`
--
ALTER TABLE `motivos_cambio_producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `motivos_reprogramacion`
--
ALTER TABLE `motivos_reprogramacion`
  ADD PRIMARY KEY (`motivoID`);

--
-- Indices de la tabla `motivo_cambio_producto_x_pedido`
--
ALTER TABLE `motivo_cambio_producto_x_pedido`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `multas_catalogo`
--
ALTER TABLE `multas_catalogo`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `multas_floristas`
--
ALTER TABLE `multas_floristas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_pedido` (`pedido_id`),
  ADD KEY `idx_codigo` (`codigo`,`fecha_aplicacion`,`pedido_id`),
  ADD KEY `idx_fecha_apl` (`fecha_aplicacion`,`pedido_id`),
  ADD KEY `idx_proveedor_estado_fecha` (`proveedor_id`,`estado`,`fecha_aplicacion`),
  ADD KEY `idx_estado_revisada` (`estado`,`revisada_micaela`,`fecha_revision`,`pedido_id`);

--
-- Indices de la tabla `multas_templates`
--
ALTER TABLE `multas_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uk_codigo_tipo` (`codigo`,`tipo`,`activo`);

--
-- Indices de la tabla `negotiations`
--
ALTER TABLE `negotiations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uid` (`uid`,`folder`),
  ADD KEY `idx_orderid_createdat` (`order_id`,`created_at`),
  ADD KEY `idx_order_emaildate` (`order_id`,`email_date`),
  ADD KEY `idx_orderid_status` (`order_id`,`status`),
  ADD KEY `idx_proveedor_id` (`proveedor_id`),
  ADD KEY `idx_tipo_negociacion` (`tipo_negociacion`);

--
-- Indices de la tabla `negotiations_anterior`
--
ALTER TABLE `negotiations_anterior`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uid` (`uid`,`folder`),
  ADD KEY `idx_orderid_createdat` (`order_id`,`created_at`),
  ADD KEY `idx_order_emaildate` (`order_id`,`email_date`),
  ADD KEY `idx_orderid_status` (`order_id`,`status`),
  ADD KEY `idx_proveedor_id` (`proveedor_id`),
  ADD KEY `idx_tipo_negociacion` (`tipo_negociacion`);

--
-- Indices de la tabla `notas_florista_manuales`
--
ALTER TABLE `notas_florista_manuales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido` (`pedido`);

--
-- Indices de la tabla `notas_florista_patrones_automaticos`
--
ALTER TABLE `notas_florista_patrones_automaticos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `notas_internas_pedidos`
--
ALTER TABLE `notas_internas_pedidos`
  ADD PRIMARY KEY (`nota_id`),
  ADD UNIQUE KEY `leido_operador_fhrecordatorio` (`b_recordatorio_leido`,`id_operador_a_recordar`,`fhm_recordatorio`,`nota_id`),
  ADD KEY `nota_operador` (`nota_operador`),
  ADD KEY `nota_pedido` (`nota_pedido`),
  ADD KEY `nota_fecha` (`nota_fecha`);

--
-- Indices de la tabla `notification_types`
--
ALTER TABLE `notification_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Ocacion_en`
--
ALTER TABLE `Ocacion_en`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `ocacion_sp`
--
ALTER TABLE `ocacion_sp`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `etiqueta` (`etiqueta`);

--
-- Indices de la tabla `ocasiones`
--
ALTER TABLE `ocasiones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `date_begin` (`date_begin`),
  ADD KEY `date_end` (`date_end`),
  ADD KEY `is_available` (`is_available`);

--
-- Indices de la tabla `openai_logs`
--
ALTER TABLE `openai_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `operadores`
--
ALTER TABLE `operadores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `operador` (`operador`(250)),
  ADD KEY `password` (`password`(250));

--
-- Indices de la tabla `operadores_log`
--
ALTER TABLE `operadores_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `operador` (`operador`),
  ADD KEY `idx_date` (`date`);

--
-- Indices de la tabla `operatividad`
--
ALTER TABLE `operatividad`
  ADD PRIMARY KEY (`operatividadID`);

--
-- Indices de la tabla `ordenes_pagadas_proveedor`
--
ALTER TABLE `ordenes_pagadas_proveedor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido` (`pedido`);

--
-- Indices de la tabla `order_notes`
--
ALTER TABLE `order_notes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `page_translate`
--
ALTER TABLE `page_translate`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cast_page_name_2` (`cast_page_name`),
  ADD UNIQUE KEY `eng_page_name_2` (`eng_page_name`),
  ADD KEY `cast_page_name` (`cast_page_name`),
  ADD KEY `eng_page_name` (`eng_page_name`);

--
-- Indices de la tabla `pagos_accounts`
--
ALTER TABLE `pagos_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pagos_intentos`
--
ALTER TABLE `pagos_intentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_pedido_id` (`pedido_id`),
  ADD KEY `idx_cliente_id` (`cliente_id`),
  ADD KEY `idx_proveedor_pago` (`proveedor_pago`),
  ADD KEY `idx_estado` (`estado`),
  ADD KEY `idx_error_code` (`error_code`),
  ADD KEY `idx_fecha_intento` (`fecha_intento`),
  ADD KEY `idx_etiqueta_codigo` (`etiqueta_codigo`),
  ADD KEY `idx_requiere_3ds` (`requiere_3ds`);

--
-- Indices de la tabla `PaisesNombres`
--
ALTER TABLE `PaisesNombres`
  ADD PRIMARY KEY (`clave`);

--
-- Indices de la tabla `paisesporcostofecha`
--
ALTER TABLE `paisesporcostofecha`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pais` (`pais`);

--
-- Indices de la tabla `paises_cliente`
--
ALTER TABLE `paises_cliente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `code` (`code`);

--
-- Indices de la tabla `paises_por_cuenta`
--
ALTER TABLE `paises_por_cuenta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cuenta` (`cuenta`),
  ADD KEY `pais` (`pais`);

--
-- Indices de la tabla `paises_por_operador`
--
ALTER TABLE `paises_por_operador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `operador` (`operador`),
  ADD KEY `pais` (`pais`),
  ADD KEY `sitio` (`sitio`);

--
-- Indices de la tabla `paises_top`
--
ALTER TABLE `paises_top`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pais` (`pais`),
  ADD KEY `cuenta` (`cuenta`);

--
-- Indices de la tabla `parametros`
--
ALTER TABLE `parametros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indices de la tabla `paused_orders`
--
ALTER TABLE `paused_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indices de la tabla `paypal_accounts`
--
ALTER TABLE `paypal_accounts`
  ADD PRIMARY KEY (`accID`);

--
-- Indices de la tabla `paypal_accounts_cuentas`
--
ALTER TABLE `paypal_accounts_cuentas`
  ADD PRIMARY KEY (`ppID`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `estado_2` (`estado`,`id`),
  ADD UNIQUE KEY `creacion_cliente_id` (`fhm_creacion`,`cliente`,`id`),
  ADD UNIQUE KEY `creacion_recuperacion` (`fhm_creacion`,`email_recuperacion_perdido`,`email_recuperacion_perdido_times`,`cliente`,`id`),
  ADD UNIQUE KEY `r02` (`r02`,`adicional01`,`r01`,`id`),
  ADD UNIQUE KEY `creacion_destinatario` (`fhm_creacion`,`destinatario`,`id`),
  ADD UNIQUE KEY `destinatario_creacion` (`destinatario`,`fhm_creacion`,`id`) USING BTREE,
  ADD UNIQUE KEY `r01` (`r01`,`fhm_creacion`,`id`),
  ADD UNIQUE KEY `cliente_id` (`cliente`,`fhm_creacion`,`id`) USING BTREE,
  ADD UNIQUE KEY `creacion_cuenta_id` (`fhm_creacion`,`id_cuenta`,`id`),
  ADD UNIQUE KEY `cuenta_cliente_id` (`id_cuenta`,`cliente`,`id`),
  ADD UNIQUE KEY `id_cuenta` (`id_cuenta`,`cliente`,`id`) USING BTREE,
  ADD UNIQUE KEY `estadoBackend` (`estadoBackendID`,`date_entrega`,`id`) USING BTREE,
  ADD UNIQUE KEY `estadoBackend2` (`estadoBackendID`,`fhm_creacion`,`id`),
  ADD UNIQUE KEY `usuario_fecha_cuenta_estado` (`user_id`,`date_entrega`,`id_cuenta`,`estadoBackendID`,`id`),
  ADD KEY `idx_cliente` (`cliente`),
  ADD KEY `estado` (`estado`),
  ADD KEY `fhm_creacion` (`fhm_creacion`),
  ADD KEY `pptoken` (`pptoken`(250)),
  ADD KEY `enviado_felicitacion` (`enviado_felicitacion`),
  ADD KEY `date_entrega` (`date_entrega`),
  ADD KEY `hash` (`hash`(250)),
  ADD KEY `hash_2` (`hash`(250)),
  ADD KEY `email_recuperacion_perdido` (`email_recuperacion_perdido`,`email_recuperacion_perdido_times`),
  ADD KEY `email_recuperacion_perdido_2` (`email_recuperacion_perdido`,`email_recuperacion_perdido_times`),
  ADD KEY `idx_estado_cuenta_fecha` (`estadoBackendID`,`id_cuenta`,`date_entrega`);

--
-- Indices de la tabla `pedidos_comentarios`
--
ALTER TABLE `pedidos_comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos_folmx`
--
ALTER TABLE `pedidos_folmx`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos_trx`
--
ALTER TABLE `pedidos_trx`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedido_items`
--
ALTER TABLE `pedido_items`
  ADD PRIMARY KEY (`id_pedido`,`item`);

--
-- Indices de la tabla `permisos_items`
--
ALTER TABLE `permisos_items`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permisos_por_operador`
--
ALTER TABLE `permisos_por_operador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `operador` (`operador`);

--
-- Indices de la tabla `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`) USING BTREE;

--
-- Indices de la tabla `pie_textos`
--
ALTER TABLE `pie_textos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `possible_attackers`
--
ALTER TABLE `possible_attackers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `precios`
--
ALTER TABLE `precios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codigo` (`codigo`),
  ADD KEY `producto_idx` (`id_producto`),
  ADD KEY `id_cuenta` (`id_cuenta`),
  ADD KEY `id_pais` (`id_pais`),
  ADD KEY `id_zona` (`id_zona`),
  ADD KEY `producto_zona_cuenta` (`id_producto`,`id_zona`,`id_cuenta`);

--
-- Indices de la tabla `precios_por_pedido`
--
ALTER TABLE `precios_por_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido` (`pedido`);

--
-- Indices de la tabla `precio_maximo_por_pedido`
--
ALTER TABLE `precio_maximo_por_pedido`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pedido_id` (`pedido`,`id`),
  ADD KEY `pedido` (`pedido`),
  ADD KEY `operador` (`operador`),
  ADD KEY `fecha` (`fecha`);

--
-- Indices de la tabla `price_lists`
--
ALTER TABLE `price_lists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_regions_country` (`country_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_productos`),
  ADD KEY `producto_oculto` (`producto_oculto`),
  ADD KEY `pais` (`pais`),
  ADD KEY `productos_id_nombre_idx` (`id_productos`,`nombre`(240)) USING BTREE;
ALTER TABLE `productos` ADD FULLTEXT KEY `descripcion` (`descripcion`);
ALTER TABLE `productos` ADD FULLTEXT KEY `nombre` (`nombre`);
ALTER TABLE `productos` ADD FULLTEXT KEY `codigo_int` (`codigo_int`);
ALTER TABLE `productos` ADD FULLTEXT KEY `tags` (`tags`);
ALTER TABLE `productos` ADD FULLTEXT KEY `descri_ch` (`descri_ch`);
ALTER TABLE `productos` ADD FULLTEXT KEY `descri_m` (`descri_m`);
ALTER TABLE `productos` ADD FULLTEXT KEY `descri_g` (`descri_g`);
ALTER TABLE `productos` ADD FULLTEXT KEY `busqueda` (`busqueda`);
ALTER TABLE `productos` ADD FULLTEXT KEY `busqueda_e` (`busqueda_e`);

--
-- Indices de la tabla `productos_comprados`
--
ALTER TABLE `productos_comprados`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `productos_df`
--
ALTER TABLE `productos_df`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos_e`
--
ALTER TABLE `productos_e`
  ADD PRIMARY KEY (`id_productos`),
  ADD KEY `pais` (`pais`),
  ADD KEY `productos_e_idx_id_productos` (`id_productos`);
ALTER TABLE `productos_e` ADD FULLTEXT KEY `descri_g` (`descri_g`);
ALTER TABLE `productos_e` ADD FULLTEXT KEY `descri_m` (`descri_m`);
ALTER TABLE `productos_e` ADD FULLTEXT KEY `descri_ch` (`descri_ch`);
ALTER TABLE `productos_e` ADD FULLTEXT KEY `nombre` (`nombre`);
ALTER TABLE `productos_e` ADD FULLTEXT KEY `descripcion` (`descripcion`);
ALTER TABLE `productos_e` ADD FULLTEXT KEY `codigo_int` (`codigo_int`);
ALTER TABLE `productos_e` ADD FULLTEXT KEY `tags` (`tags`);

--
-- Indices de la tabla `productos_fotos`
--
ALTER TABLE `productos_fotos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `producto` (`producto`,`tamano`,`id`) USING BTREE,
  ADD UNIQUE KEY `producto_orden` (`producto`,`orden`,`tamano`,`id`) USING BTREE;

--
-- Indices de la tabla `productos_ftous_desactivados`
--
ALTER TABLE `productos_ftous_desactivados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos_p`
--
ALTER TABLE `productos_p`
  ADD PRIMARY KEY (`id_productos`);

--
-- Indices de la tabla `producto_habilitados`
--
ALTER TABLE `producto_habilitados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_habilitados_producto_id_index` (`producto_id`);

--
-- Indices de la tabla `product_catalog`
--
ALTER TABLE `product_catalog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `product_codes`
--
ALTER TABLE `product_codes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cuenta_pais_zona_producto` (`cuenta`,`pais`,`zona`,`producto`,`idioma`(20),`id`),
  ADD KEY `code` (`code`(250));

--
-- Indices de la tabla `product_openai`
--
ALTER TABLE `product_openai`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `produ_categorias_cuentas`
--
ALTER TABLE `produ_categorias_cuentas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IK_CUENTA1` (`id_cuenta`,`orden`,`tipo`,`id_categoria`),
  ADD UNIQUE KEY `IK_CUENTA2` (`id_cuenta`,`tipo`,`orden`,`id_categoria`),
  ADD KEY `id_cuenta` (`id_cuenta`),
  ADD KEY `activo` (`activo`),
  ADD KEY `id_categoria` (`id_categoria`,`id_cuenta`) USING BTREE;

--
-- Indices de la tabla `produ_cuentas`
--
ALTER TABLE `produ_cuentas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cod_cuenta` (`cod_cuenta`);

--
-- Indices de la tabla `produ_etiquetas`
--
ALTER TABLE `produ_etiquetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sistema` (`id_sistema`),
  ADD KEY `de_nativo` (`de_nativo`(240)) USING BTREE,
  ADD KEY `etiquetas1` (`de_nativo`(240),`id_cuenta`,`id_sistema`) USING BTREE,
  ADD KEY `id_cuenta` (`id_cuenta`,`de_nativo`(240)) USING BTREE;

--
-- Indices de la tabla `produ_monedas`
--
ALTER TABLE `produ_monedas`
  ADD PRIMARY KEY (`id_moneda`),
  ADD KEY `cod_moneda` (`cod_moneda`),
  ADD KEY `de_moneda` (`de_moneda`),
  ADD KEY `cod_xurrency` (`cod_xurrency`),
  ADD KEY `cod_yahoo` (`cod_yahoo`);

--
-- Indices de la tabla `produ_paises_cuentas`
--
ALTER TABLE `produ_paises_cuentas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pais` (`id_pais`),
  ADD KEY `id_cuenta` (`id_cuenta`);

--
-- Indices de la tabla `produ_paises_monedas`
--
ALTER TABLE `produ_paises_monedas`
  ADD PRIMARY KEY (`id_pais_moneda`),
  ADD KEY `id_pais` (`id_pais`),
  ADD KEY `id_moneda` (`id_moneda`);

--
-- Indices de la tabla `produ_productos_cuentas`
--
ALTER TABLE `produ_productos_cuentas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_producto_cuenta_idx` (`id_producto`,`id_cuenta`) USING BTREE,
  ADD UNIQUE KEY `id_cuenta` (`id_cuenta`,`id_producto`) USING BTREE,
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `b_destacado` (`b_destacado`);

--
-- Indices de la tabla `produ_productos_cuentasrot`
--
ALTER TABLE `produ_productos_cuentasrot`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto_cuenta_idx` (`id_producto`,`id_cuenta`);

--
-- Indices de la tabla `produ_secuencias`
--
ALTER TABLE `produ_secuencias`
  ADD PRIMARY KEY (`de_tabla`);

--
-- Indices de la tabla `produ_tipos_forma_de_pago`
--
ALTER TABLE `produ_tipos_forma_de_pago`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cuenta` (`id_cuenta`),
  ADD KEY `id_moneda` (`id_moneda`),
  ADD KEY `id_pais_cliente` (`id_pais_cliente`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`proveedorID`);
ALTER TABLE `proveedores` ADD FULLTEXT KEY `proveedorOtrasZonas` (`proveedorOtrasZonas`);

--
-- Indices de la tabla `proveedores_directos`
--
ALTER TABLE `proveedores_directos`
  ADD PRIMARY KEY (`proveedorID`);

--
-- Indices de la tabla `proveedores_zonas`
--
ALTER TABLE `proveedores_zonas`
  ADD PRIMARY KEY (`pzID`);

--
-- Indices de la tabla `prueba_whatsapp`
--
ALTER TABLE `prueba_whatsapp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `phone` (`phone`,`channelId`);

--
-- Indices de la tabla `ps_cache`
--
ALTER TABLE `ps_cache`
  ADD PRIMARY KEY (`ckey`);

--
-- Indices de la tabla `reclamos`
--
ALTER TABLE `reclamos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `estado_padre_privado` (`estado`,`padre`,`privado`,`id`),
  ADD KEY `pedido` (`pedido`),
  ADD KEY `recordar` (`recordar`),
  ADD KEY `operador` (`operador`),
  ADD KEY `estado` (`estado`),
  ADD KEY `motivo` (`motivo`),
  ADD KEY `pedido_2` (`pedido`,`estado`),
  ADD KEY `fecha` (`fecha`);

--
-- Indices de la tabla `reclamos_motivos_old`
--
ALTER TABLE `reclamos_motivos_old`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reclamos_soluciones`
--
ALTER TABLE `reclamos_soluciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Records`
--
ALTER TABLE `Records`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `relaciones`
--
ALTER TABLE `relaciones`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `etiqueta` (`etiqueta`);

--
-- Indices de la tabla `reminder_log`
--
ALTER TABLE `reminder_log`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `return_reasons`
--
ALTER TABLE `return_reasons`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indices de la tabla `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indices de la tabla `searches`
--
ALTER TABLE `searches`
  ADD PRIMARY KEY (`searchID`),
  ADD KEY `searchSite` (`searchSite`),
  ADD KEY `searchCountry` (`searchCountry`),
  ADD KEY `searchZone` (`searchZone`),
  ADD KEY `searchSeo` (`searchSeo`),
  ADD KEY `searchStatus` (`searchStatus`);
ALTER TABLE `searches` ADD FULLTEXT KEY `searches_fulltext` (`searchWords`);

--
-- Indices de la tabla `searchLog`
--
ALTER TABLE `searchLog`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `session_events`
--
ALTER TABLE `session_events`
  ADD PRIMARY KEY (`session_id`,`dt`),
  ADD KEY `idx_session_events_pedido_dt` (`id_pedido`,`dt`),
  ADD KEY `idx_session_events_session_pedido` (`session_id`,`id_pedido`),
  ADD KEY `idx_session_events_cuenta_subject_dt` (`id_cuenta`,`subject`,`dt`),
  ADD KEY `idx_session_events_subject_dt` (`subject`,`dt`);

--
-- Indices de la tabla `short_urls`
--
ALTER TABLE `short_urls`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expired_code` (`expired`,`code`);

--
-- Indices de la tabla `short_urls_expired`
--
ALTER TABLE `short_urls_expired`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `short_url` (`short_url`);

--
-- Indices de la tabla `sitemaps`
--
ALTER TABLE `sitemaps`
  ADD PRIMARY KEY (`sitemapCuenta`,`sitemapID`),
  ADD UNIQUE KEY `sitemapPais` (`sitemapCuenta`,`sitemapPais`,`sitemapURL`,`sitemapID`) USING BTREE,
  ADD KEY `idx_id` (`sitemapID`);

--
-- Indices de la tabla `sitemaps_request_start`
--
ALTER TABLE `sitemaps_request_start`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sitemap_requests`
--
ALTER TABLE `sitemap_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `smtp_sent`
--
ALTER TABLE `smtp_sent`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `smtp_sent_count`
--
ALTER TABLE `smtp_sent_count`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `supplier_notes`
--
ALTER TABLE `supplier_notes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tags_mickey`
--
ALTER TABLE `tags_mickey`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tarjetas_fraude`
--
ALTER TABLE `tarjetas_fraude`
  ADD PRIMARY KEY (`tarjetaID`),
  ADD KEY `tarjetaBIN` (`tarjetaBIN`(191)),
  ADD KEY `tarjetaFrena` (`tarjetaFrena`);

--
-- Indices de la tabla `templates_mails`
--
ALTER TABLE `templates_mails`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `terminos_busqueda`
--
ALTER TABLE `terminos_busqueda`
  ADD PRIMARY KEY (`id_idioma`,`termino`);

--
-- Indices de la tabla `tipos_acciones_pedidos`
--
ALTER TABLE `tipos_acciones_pedidos`
  ADD PRIMARY KEY (`acc_id`);

--
-- Indices de la tabla `tipo_mensajes_productos`
--
ALTER TABLE `tipo_mensajes_productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `trace_orders`
--
ALTER TABLE `trace_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dt` (`dt`),
  ADD KEY `order_id` (`order_id`);

--
-- Indices de la tabla `tracking_por_pedido`
--
ALTER TABLE `tracking_por_pedido`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `types_florist_actions`
--
ALTER TABLE `types_florist_actions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `type_contact`
--
ALTER TABLE `type_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `type_reminder`
--
ALTER TABLE `type_reminder`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `t_acuerdos_proveedor2`
--
ALTER TABLE `t_acuerdos_proveedor2`
  ADD KEY `florist_id` (`florist_id`),
  ADD KEY `product` (`product`,`type_product`);

--
-- Indices de la tabla `t_costos_promedios_pais`
--
ALTER TABLE `t_costos_promedios_pais`
  ADD PRIMARY KEY (`id_pais`,`id_productos`,`tamanio`) USING BTREE;

--
-- Indices de la tabla `t_costos_promedios_zona`
--
ALTER TABLE `t_costos_promedios_zona`
  ADD PRIMARY KEY (`id_pais`,`id_zonas`,`id_productos`,`tamanio`);

--
-- Indices de la tabla `t_costos_promedios_zonaPadre`
--
ALTER TABLE `t_costos_promedios_zonaPadre`
  ADD PRIMARY KEY (`id_pais`,`id_zona_padre`,`id_productos`,`tamanio`) USING BTREE;

--
-- Indices de la tabla `t_pedidos_costos`
--
ALTER TABLE `t_pedidos_costos`
  ADD PRIMARY KEY (`id_pedido`),
  ADD UNIQUE KEY `pais` (`id_pais`,`id_productos`,`descripcionTamanio`(200),`id_pedido`) USING BTREE,
  ADD UNIQUE KEY `id_pais` (`id_pais`,`id_zonas`,`id_productos`,`descripcionTamanio`(200),`id_pedido`),
  ADD UNIQUE KEY `zona_padre` (`id_pais`,`id_zona_padre`,`id_productos`,`id_pedido`),
  ADD KEY `proveedor_date_entrega` (`proveedor`,`date_entrega`);

--
-- Indices de la tabla `t_pedidos_costos_paso_1`
--
ALTER TABLE `t_pedidos_costos_paso_1`
  ADD UNIQUE KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_pais_2` (`id_pais`,`id_zona_padre`,`id_productos`,`id_pedido`),
  ADD KEY `id_pais` (`id_pais`,`id_productos`,`descripcionTamanio`(200),`id_pedido`) USING BTREE;

--
-- Indices de la tabla `t_productos_tamanios`
--
ALTER TABLE `t_productos_tamanios`
  ADD PRIMARY KEY (`id_productos`,`tamanio`),
  ADD UNIQUE KEY `DESCRIPTION` (`id_productos`,`descripcion_ingles`),
  ADD UNIQUE KEY `DESCRIPCION` (`id_productos`,`descripcion`(50));

--
-- Indices de la tabla `t_producto_categorias`
--
ALTER TABLE `t_producto_categorias`
  ADD PRIMARY KEY (`id_cuenta`,`pais`,`cppCategoria`,`id_productos`),
  ADD UNIQUE KEY `producto_categoria` (`id_productos`,`cppCategoria`,`id_cuenta`),
  ADD KEY `id_productos` (`id_productos`,`id_cuenta`),
  ADD KEY `pais` (`pais`,`cppCategoria`);

--
-- Indices de la tabla `t_zonas_por_producto_catalogs`
--
ALTER TABLE `t_zonas_por_producto_catalogs`
  ADD UNIQUE KEY `zone` (`zone_id`,`product_id`),
  ADD UNIQUE KEY `product` (`product_id`,`zone_id`);

--
-- Indices de la tabla `t_zonas_por_producto_no_entrega`
--
ALTER TABLE `t_zonas_por_producto_no_entrega`
  ADD UNIQUE KEY `id_zonas` (`id_zonas`,`id_productos`),
  ADD UNIQUE KEY `id_productos` (`id_productos`,`id_zonas`);

--
-- Indices de la tabla `t_zonas_x_productos`
--
ALTER TABLE `t_zonas_x_productos`
  ADD UNIQUE KEY `zppZona` (`zppZona`,`id_productos`),
  ADD KEY `id_productos` (`id_productos`,`zppZona`);

--
-- Indices de la tabla `ultimo_minuto`
--
ALTER TABLE `ultimo_minuto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pantalla` (`pantalla`),
  ADD KEY `estado` (`estado`),
  ADD KEY `fecha` (`fecha`);

--
-- Indices de la tabla `ultimo_minuto_etiquetas`
--
ALTER TABLE `ultimo_minuto_etiquetas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `padre` (`padre`),
  ADD KEY `estado` (`estado`);

--
-- Indices de la tabla `ultimo_minuto_relaciones`
--
ALTER TABLE `ultimo_minuto_relaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `padre` (`padre`),
  ADD KEY `pais` (`pais`),
  ADD KEY `cuenta` (`cuenta`);

--
-- Indices de la tabla `uploaded_s3_files`
--
ALTER TABLE `uploaded_s3_files`
  ADD PRIMARY KEY (`fileType`,`path`),
  ADD UNIQUE KEY `path_fileType` (`path`,`fileType`),
  ADD KEY `uploaded_s3_files_fileType_orderId_index` (`fileType`,`orderId`,`internalId`),
  ADD KEY `uploaded_s3_files_fileType_lastDate_index` (`dueDate`);

--
-- Indices de la tabla `url_thanks`
--
ALTER TABLE `url_thanks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `user_actions`
--
ALTER TABLE `user_actions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_actions_user_id_unique` (`user_id`);

--
-- Indices de la tabla `user_country`
--
ALTER TABLE `user_country`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_country_user_action_id_foreign` (`user_action_id`),
  ADD KEY `user_country_country_id_foreign` (`country_id`);

--
-- Indices de la tabla `user_fingerprint`
--
ALTER TABLE `user_fingerprint`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_site`
--
ALTER TABLE `user_site`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_site_user_action_id_foreign` (`user_action_id`),
  ADD KEY `user_site_site_id_foreign` (`site_id`);

--
-- Indices de la tabla `uso_bonificaciones`
--
ALTER TABLE `uso_bonificaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `visitas_afiliados`
--
ALTER TABLE `visitas_afiliados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sesion` (`sesion`);

--
-- Indices de la tabla `whatsapp_batches_messages`
--
ALTER TABLE `whatsapp_batches_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `whatsapp_campaigns`
--
ALTER TABLE `whatsapp_campaigns`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_send` (`client_id`,`phone_id`,`campaign_name`) USING BTREE,
  ADD KEY `idx_campaign_client` (`campaign_name`,`client_id`);

--
-- Indices de la tabla `whatsapp_channels`
--
ALTER TABLE `whatsapp_channels`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `whatsapp_contacts`
--
ALTER TABLE `whatsapp_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `whatsapp_messages`
--
ALTER TABLE `whatsapp_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `whatsapp_predefined`
--
ALTER TABLE `whatsapp_predefined`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `whatsapp_refreshs`
--
ALTER TABLE `whatsapp_refreshs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `xx_reporte_a_borrar_no_mexico`
--
ALTER TABLE `xx_reporte_a_borrar_no_mexico`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD UNIQUE KEY `did` (`did`);

--
-- Indices de la tabla `xx_zona_productos_tabla_nueva`
--
ALTER TABLE `xx_zona_productos_tabla_nueva`
  ADD UNIQUE KEY `zppZona` (`zppZona`,`id_productos`);

--
-- Indices de la tabla `xx_zona_productos_tabla_vieja`
--
ALTER TABLE `xx_zona_productos_tabla_vieja`
  ADD UNIQUE KEY `zppZona` (`zppZona`,`id_productos`);

--
-- Indices de la tabla `zipcodes`
--
ALTER TABLE `zipcodes`
  ADD PRIMARY KEY (`zipID`),
  ADD UNIQUE KEY `zipCode` (`id_pais`,`zipCode`) USING BTREE,
  ADD UNIQUE KEY `zipCity` (`id_pais`,`zipCity`,`zipCode`) USING BTREE;

--
-- Indices de la tabla `zipcodes_aborrar`
--
ALTER TABLE `zipcodes_aborrar`
  ADD PRIMARY KEY (`zipID`);

--
-- Indices de la tabla `zipcode_cerrados`
--
ALTER TABLE `zipcode_cerrados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `zipcode` (`zipcode`(250)),
  ADD KEY `fecha` (`fecha`);

--
-- Indices de la tabla `zonas`
--
ALTER TABLE `zonas`
  ADD PRIMARY KEY (`id_zonas`),
  ADD UNIQUE KEY `paisnombre` (`pais`,`nombre`),
  ADD UNIQUE KEY `alias_fam` (`alias_fam`(240),`id_zonas`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`(240)) USING BTREE,
  ADD KEY `pais` (`pais`),
  ADD KEY `id_zona_padre` (`id_zona_padre`),
  ADD KEY `alias` (`alias`),
  ADD KEY `destacada` (`destacada`),
  ADD KEY `etiqueta_destacado_bottom2` (`etiqueta_destacado_bottom2`(240)) USING BTREE,
  ADD KEY `zonas_idx_b_padre_id_padre` (`b_hereda_padre`,`id_zona_padre`,`id_zonas`),
  ADD KEY `zonas_idx_id_zonas_b_padre_id_padre` (`id_zonas`,`b_hereda_padre`,`id_zona_padre`),
  ADD KEY `path_google_map` (`path_google_map`(30),`pais`),
  ADD KEY `distancia` (`pais`,`distancia_punto_de_referencia`),
  ADD KEY `path` (`pais`,`path_google_map`),
  ADD KEY `idx_zona_catalogo` (`zona_catalogo`),
  ADD KEY `idx_alias_es` (`alias_es`),
  ADD KEY `idx_alias_en` (`alias_en`),
  ADD KEY `idx_alias_fam` (`alias_fam`(240));

--
-- Indices de la tabla `zonas1`
--
ALTER TABLE `zonas1`
  ADD PRIMARY KEY (`id_zonas`),
  ADD UNIQUE KEY `paisnombre` (`pais`,`nombre`),
  ADD UNIQUE KEY `alias_fam` (`alias_fam`(240),`id_zonas`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`(240)) USING BTREE,
  ADD KEY `pais` (`pais`),
  ADD KEY `id_zona_padre` (`id_zona_padre`),
  ADD KEY `alias` (`alias`),
  ADD KEY `destacada` (`destacada`),
  ADD KEY `etiqueta_destacado_bottom2` (`etiqueta_destacado_bottom2`(240)) USING BTREE,
  ADD KEY `zonas_idx_b_padre_id_padre` (`b_hereda_padre`,`id_zona_padre`,`id_zonas`),
  ADD KEY `zonas_idx_id_zonas_b_padre_id_padre` (`id_zonas`,`b_hereda_padre`,`id_zona_padre`);

--
-- Indices de la tabla `zonas_202502`
--
ALTER TABLE `zonas_202502`
  ADD PRIMARY KEY (`id_zonas`),
  ADD UNIQUE KEY `paisnombre` (`pais`,`nombre`),
  ADD UNIQUE KEY `alias_fam` (`alias_fam`(240),`id_zonas`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`(240)) USING BTREE,
  ADD KEY `pais` (`pais`),
  ADD KEY `id_zona_padre` (`id_zona_padre`),
  ADD KEY `alias` (`alias`),
  ADD KEY `destacada` (`destacada`),
  ADD KEY `etiqueta_destacado_bottom2` (`etiqueta_destacado_bottom2`(240)) USING BTREE,
  ADD KEY `zonas_idx_b_padre_id_padre` (`b_hereda_padre`,`id_zona_padre`,`id_zonas`),
  ADD KEY `zonas_idx_id_zonas_b_padre_id_padre` (`id_zonas`,`b_hereda_padre`,`id_zona_padre`),
  ADD KEY `path_google_map` (`path_google_map`(30),`pais`),
  ADD KEY `distancia` (`pais`,`distancia_punto_de_referencia`),
  ADD KEY `path` (`pais`,`path_google_map`);

--
-- Indices de la tabla `zonas_20250217`
--
ALTER TABLE `zonas_20250217`
  ADD PRIMARY KEY (`id_zonas`),
  ADD UNIQUE KEY `paisnombre` (`pais`,`nombre`),
  ADD UNIQUE KEY `alias_fam` (`alias_fam`(240),`id_zonas`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`(240)) USING BTREE,
  ADD KEY `pais` (`pais`),
  ADD KEY `id_zona_padre` (`id_zona_padre`),
  ADD KEY `alias` (`alias`),
  ADD KEY `destacada` (`destacada`),
  ADD KEY `etiqueta_destacado_bottom2` (`etiqueta_destacado_bottom2`(240)) USING BTREE,
  ADD KEY `zonas_idx_b_padre_id_padre` (`b_hereda_padre`,`id_zona_padre`,`id_zonas`),
  ADD KEY `zonas_idx_id_zonas_b_padre_id_padre` (`id_zonas`,`b_hereda_padre`,`id_zona_padre`),
  ADD KEY `path_google_map` (`path_google_map`(30),`pais`),
  ADD KEY `distancia` (`pais`,`distancia_punto_de_referencia`),
  ADD KEY `path` (`pais`,`path_google_map`);

--
-- Indices de la tabla `zonas_backup20250210`
--
ALTER TABLE `zonas_backup20250210`
  ADD PRIMARY KEY (`id_zonas`),
  ADD UNIQUE KEY `paisnombre` (`pais`,`nombre`),
  ADD UNIQUE KEY `alias_fam` (`alias_fam`(240),`id_zonas`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`(240)) USING BTREE,
  ADD KEY `pais` (`pais`),
  ADD KEY `id_zona_padre` (`id_zona_padre`),
  ADD KEY `alias` (`alias`),
  ADD KEY `destacada` (`destacada`),
  ADD KEY `etiqueta_destacado_bottom2` (`etiqueta_destacado_bottom2`(240)) USING BTREE,
  ADD KEY `zonas_idx_b_padre_id_padre` (`b_hereda_padre`,`id_zona_padre`,`id_zonas`),
  ADD KEY `zonas_idx_id_zonas_b_padre_id_padre` (`id_zonas`,`b_hereda_padre`,`id_zona_padre`),
  ADD KEY `path_google_map` (`path_google_map`(30),`pais`),
  ADD KEY `distancia` (`pais`,`distancia_punto_de_referencia`),
  ADD KEY `path` (`pais`,`path_google_map`);

--
-- Indices de la tabla `zonas_bu`
--
ALTER TABLE `zonas_bu`
  ADD PRIMARY KEY (`id_zonas`),
  ADD UNIQUE KEY `alias_fam` (`alias_fam`(240),`id_zonas`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`(240)) USING BTREE,
  ADD KEY `pais` (`pais`),
  ADD KEY `id_zona_padre` (`id_zona_padre`),
  ADD KEY `alias` (`alias`),
  ADD KEY `destacada` (`destacada`),
  ADD KEY `etiqueta_destacado_bottom2` (`etiqueta_destacado_bottom2`(240)) USING BTREE;

--
-- Indices de la tabla `zonas_fecha_especial`
--
ALTER TABLE `zonas_fecha_especial`
  ADD PRIMARY KEY (`id_zonas`),
  ADD UNIQUE KEY `paisnombre` (`pais`,`nombre`),
  ADD UNIQUE KEY `alias_fam` (`alias_fam`(240),`id_zonas`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`(240)) USING BTREE,
  ADD KEY `pais` (`pais`),
  ADD KEY `id_zona_padre` (`id_zona_padre`),
  ADD KEY `alias` (`alias`),
  ADD KEY `destacada` (`destacada`),
  ADD KEY `etiqueta_destacado_bottom2` (`etiqueta_destacado_bottom2`(240)) USING BTREE,
  ADD KEY `zonas_idx_b_padre_id_padre` (`b_hereda_padre`,`id_zona_padre`,`id_zonas`),
  ADD KEY `zonas_idx_id_zonas_b_padre_id_padre` (`id_zonas`,`b_hereda_padre`,`id_zona_padre`);

--
-- Indices de la tabla `zonas_fecha_normal`
--
ALTER TABLE `zonas_fecha_normal`
  ADD PRIMARY KEY (`id_zonas`),
  ADD UNIQUE KEY `paisnombre` (`pais`,`nombre`),
  ADD UNIQUE KEY `alias_fam` (`alias_fam`(240),`id_zonas`) USING BTREE,
  ADD UNIQUE KEY `nombre` (`nombre`(240)) USING BTREE,
  ADD KEY `pais` (`pais`),
  ADD KEY `id_zona_padre` (`id_zona_padre`),
  ADD KEY `alias` (`alias`),
  ADD KEY `destacada` (`destacada`),
  ADD KEY `etiqueta_destacado_bottom2` (`etiqueta_destacado_bottom2`(240)) USING BTREE,
  ADD KEY `zonas_idx_b_padre_id_padre` (`b_hereda_padre`,`id_zona_padre`,`id_zonas`),
  ADD KEY `zonas_idx_id_zonas_b_padre_id_padre` (`id_zonas`,`b_hereda_padre`,`id_zona_padre`);

--
-- Indices de la tabla `zonas_nodisponibles`
--
ALTER TABLE `zonas_nodisponibles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `zonas_por_producto`
--
ALTER TABLE `zonas_por_producto`
  ADD PRIMARY KEY (`zppID`),
  ADD KEY `zppZona` (`zppZona`,`zppProducto`) USING BTREE,
  ADD KEY `zppProducto` (`zppProducto`,`zppZona`) USING BTREE;

--
-- Indices de la tabla `zooz_apis`
--
ALTER TABLE `zooz_apis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `appid` (`appid`(250)),
  ADD KEY `id_cuenta` (`id_cuenta`);

--
-- Indices de la tabla `zooz_trx`
--
ALTER TABLE `zooz_trx`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `AB`
--
ALTER TABLE `AB`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `acciones_por_pedido`
--
ALTER TABLE `acciones_por_pedido`
  MODIFY `app_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `acuerdos_floristas`
--
ALTER TABLE `acuerdos_floristas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `adicionales`
--
ALTER TABLE `adicionales`
  MODIFY `id_adicionales` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `adicionales_cuentas`
--
ALTER TABLE `adicionales_cuentas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `adicionales_e`
--
ALTER TABLE `adicionales_e`
  MODIFY `id_adicionales` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `adicionales_por_producto`
--
ALTER TABLE `adicionales_por_producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `adjuntos_pedido`
--
ALTER TABLE `adjuntos_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `afiliados`
--
ALTER TABLE `afiliados`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `alerts`
--
ALTER TABLE `alerts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `alerts_records`
--
ALTER TABLE `alerts_records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `automatic_assign_operator`
--
ALTER TABLE `automatic_assign_operator`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `backup_precios_sv`
--
ALTER TABLE `backup_precios_sv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `banners_fam`
--
ALTER TABLE `banners_fam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `banners_fecha_especial`
--
ALTER TABLE `banners_fecha_especial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `banners_html5`
--
ALTER TABLE `banners_html5`
  MODIFY `bannerID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `banners_html5_positions`
--
ALTER TABLE `banners_html5_positions`
  MODIFY `posID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `banners_pf`
--
ALTER TABLE `banners_pf`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `banners_por_cuenta`
--
ALTER TABLE `banners_por_cuenta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `banners_por_pais`
--
ALTER TABLE `banners_por_pais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bin_cards`
--
ALTER TABLE `bin_cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bloqueos_stock_florista`
--
ALTER TABLE `bloqueos_stock_florista`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bonificaciones`
--
ALTER TABLE `bonificaciones`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bonificaciones_historicos`
--
ALTER TABLE `bonificaciones_historicos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bonuses`
--
ALTER TABLE `bonuses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bonu_country`
--
ALTER TABLE `bonu_country`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bonu_site`
--
ALTER TABLE `bonu_site`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cache_menu`
--
ALTER TABLE `cache_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cache_menu_fam`
--
ALTER TABLE `cache_menu_fam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cancellation_reasons`
--
ALTER TABLE `cancellation_reasons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cantidad_chequeos_ip`
--
ALTER TABLE `cantidad_chequeos_ip`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `catalogs`
--
ALTER TABLE `catalogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `catalog_by_zone`
--
ALTER TABLE `catalog_by_zone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `catalog_exclusion_exceptions`
--
ALTER TABLE `catalog_exclusion_exceptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `catalog_inclusion_exceptions`
--
ALTER TABLE `catalog_inclusion_exceptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias_df`
--
ALTER TABLE `categorias_df`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias_especiales`
--
ALTER TABLE `categorias_especiales`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias_por_producto`
--
ALTER TABLE `categorias_por_producto`
  MODIFY `cppID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chat2desk_countries`
--
ALTER TABLE `chat2desk_countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chat2desk_messages`
--
ALTER TABLE `chat2desk_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `chat2desk_pending_messages`
--
ALTER TABLE `chat2desk_pending_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `checkinj`
--
ALTER TABLE `checkinj`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `claim_reasons`
--
ALTER TABLE `claim_reasons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes_bags`
--
ALTER TABLE `clientes_bags`
  MODIFY `bagID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clients_chat2desk`
--
ALTER TABLE `clients_chat2desk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clients_chat2desk_event_notification`
--
ALTER TABLE `clients_chat2desk_event_notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `club`
--
ALTER TABLE `club`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `colores`
--
ALTER TABLE `colores`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `color_availability_exceptions`
--
ALTER TABLE `color_availability_exceptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comprobantes`
--
ALTER TABLE `comprobantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contacts_log`
--
ALTER TABLE `contacts_log`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contact_notifications`
--
ALTER TABLE `contact_notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `corregidos_ingles`
--
ALTER TABLE `corregidos_ingles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `costos_fecha`
--
ALTER TABLE `costos_fecha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `costos_fecha_cuentas`
--
ALTER TABLE `costos_fecha_cuentas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `costos_por_pedido`
--
ALTER TABLE `costos_por_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cotizacionporfecha`
--
ALTER TABLE `cotizacionporfecha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuentas_facebook`
--
ALTER TABLE `cuentas_facebook`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cuentas_twitter`
--
ALTER TABLE `cuentas_twitter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `datos_proveedor_por_pedido`
--
ALTER TABLE `datos_proveedor_por_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `destacados_pais`
--
ALTER TABLE `destacados_pais`
  MODIFY `destacadoID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `destinatarios`
--
ALTER TABLE `destinatarios`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `details_order_delivered`
--
ALTER TABLE `details_order_delivered`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_ordenes_aprobadas`
--
ALTER TABLE `detalle_ordenes_aprobadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `emails_adjuntos`
--
ALTER TABLE `emails_adjuntos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `emails_enviados`
--
ALTER TABLE `emails_enviados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `emails_rechazados`
--
ALTER TABLE `emails_rechazados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `especiales_por_producto`
--
ALTER TABLE `especiales_por_producto`
  MODIFY `epp_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `especiales_tipos`
--
ALTER TABLE `especiales_tipos`
  MODIFY `especial_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estados_auto`
--
ALTER TABLE `estados_auto`
  MODIFY `estadoID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estados_backend`
--
ALTER TABLE `estados_backend`
  MODIFY `eb_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estados_por_pedido`
--
ALTER TABLE `estados_por_pedido`
  MODIFY `epp_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `etiquetas_descripcion`
--
ALTER TABLE `etiquetas_descripcion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `etiquetas_descripcion_bu`
--
ALTER TABLE `etiquetas_descripcion_bu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id_evento` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `extractor_url`
--
ALTER TABLE `extractor_url`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `faq_cuentas`
--
ALTER TABLE `faq_cuentas`
  MODIFY `faqID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fechas_entrega_por_pedido`
--
ALTER TABLE `fechas_entrega_por_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `feriados`
--
ALTER TABLE `feriados`
  MODIFY `id` int(11) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `floristas`
--
ALTER TABLE `floristas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `floristas_acciones`
--
ALTER TABLE `floristas_acciones`
  MODIFY `accionID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `floristas_hash`
--
ALTER TABLE `floristas_hash`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `floristas_nueva_db`
--
ALTER TABLE `floristas_nueva_db`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `floristas_por_pedido`
--
ALTER TABLE `floristas_por_pedido`
  MODIFY `fppID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `floristas_usuarios`
--
ALTER TABLE `floristas_usuarios`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `florista_productos`
--
ALTER TABLE `florista_productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `florista_productos_acuerdos`
--
ALTER TABLE `florista_productos_acuerdos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `florist_actions`
--
ALTER TABLE `florist_actions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `florist_errors`
--
ALTER TABLE `florist_errors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `follow_up_comments`
--
ALTER TABLE `follow_up_comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `frases_sugeridas`
--
ALTER TABLE `frases_sugeridas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `frases_sugeridas_refund`
--
ALTER TABLE `frases_sugeridas_refund`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `generar_imagenes`
--
ALTER TABLE `generar_imagenes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `gifts`
--
ALTER TABLE `gifts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `gifts_for_products`
--
ALTER TABLE `gifts_for_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `gift_for_sales_order`
--
ALTER TABLE `gift_for_sales_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `glocalgo_checkout`
--
ALTER TABLE `glocalgo_checkout`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupos`
--
ALTER TABLE `grupos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupos_productos`
--
ALTER TABLE `grupos_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupos_productos_cuentas`
--
ALTER TABLE `grupos_productos_cuentas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `grupos_productos_zonas`
--
ALTER TABLE `grupos_productos_zonas`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `hash_por_pedido`
--
ALTER TABLE `hash_por_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `horarios_de_entrega`
--
ALTER TABLE `horarios_de_entrega`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `hora_entrega`
--
ALTER TABLE `hora_entrega`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `hora_entrega_especial`
--
ALTER TABLE `hora_entrega_especial`
  MODIFY `hID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `intentos_pago`
--
ALTER TABLE `intentos_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ip_info`
--
ALTER TABLE `ip_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `landing_images`
--
ALTER TABLE `landing_images`
  MODIFY `landingID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `lista_mensajes_productos`
--
ALTER TABLE `lista_mensajes_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `llamados_florista`
--
ALTER TABLE `llamados_florista`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `location_types`
--
ALTER TABLE `location_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `logpagos`
--
ALTER TABLE `logpagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `logRemito`
--
ALTER TABLE `logRemito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `log_ipn`
--
ALTER TABLE `log_ipn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `log_modificacion_productos`
--
ALTER TABLE `log_modificacion_productos`
  MODIFY `Id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medios_por_cuenta`
--
ALTER TABLE `medios_por_cuenta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_fechas_especiales`
--
ALTER TABLE `mensajes_fechas_especiales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_fechas_especiales_paises`
--
ALTER TABLE `mensajes_fechas_especiales_paises`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_operador`
--
ALTER TABLE `mensajes_operador`
  MODIFY `mensajeID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_operador_relacion`
--
ALTER TABLE `mensajes_operador_relacion`
  MODIFY `rID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_paises`
--
ALTER TABLE `mensajes_paises`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_paises_i`
--
ALTER TABLE `mensajes_paises_i`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_por_horario`
--
ALTER TABLE `mensajes_por_horario`
  MODIFY `mens_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajes_por_horario_imagenes`
--
ALTER TABLE `mensajes_por_horario_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `motivos_cambio_producto`
--
ALTER TABLE `motivos_cambio_producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `motivos_reprogramacion`
--
ALTER TABLE `motivos_reprogramacion`
  MODIFY `motivoID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `motivo_cambio_producto_x_pedido`
--
ALTER TABLE `motivo_cambio_producto_x_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `multas_floristas`
--
ALTER TABLE `multas_floristas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `multas_templates`
--
ALTER TABLE `multas_templates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `negotiations`
--
ALTER TABLE `negotiations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `negotiations_anterior`
--
ALTER TABLE `negotiations_anterior`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notas_florista_manuales`
--
ALTER TABLE `notas_florista_manuales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notas_florista_patrones_automaticos`
--
ALTER TABLE `notas_florista_patrones_automaticos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notas_internas_pedidos`
--
ALTER TABLE `notas_internas_pedidos`
  MODIFY `nota_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `notification_types`
--
ALTER TABLE `notification_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Ocacion_en`
--
ALTER TABLE `Ocacion_en`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ocacion_sp`
--
ALTER TABLE `ocacion_sp`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ocasiones`
--
ALTER TABLE `ocasiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `openai_logs`
--
ALTER TABLE `openai_logs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `operadores`
--
ALTER TABLE `operadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `operadores_log`
--
ALTER TABLE `operadores_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `operatividad`
--
ALTER TABLE `operatividad`
  MODIFY `operatividadID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ordenes_pagadas_proveedor`
--
ALTER TABLE `ordenes_pagadas_proveedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `order_notes`
--
ALTER TABLE `order_notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `page_translate`
--
ALTER TABLE `page_translate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos_accounts`
--
ALTER TABLE `pagos_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos_intentos`
--
ALTER TABLE `pagos_intentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paisesporcostofecha`
--
ALTER TABLE `paisesporcostofecha`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paises_cliente`
--
ALTER TABLE `paises_cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paises_por_cuenta`
--
ALTER TABLE `paises_por_cuenta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paises_por_operador`
--
ALTER TABLE `paises_por_operador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paises_top`
--
ALTER TABLE `paises_top`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `parametros`
--
ALTER TABLE `parametros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paused_orders`
--
ALTER TABLE `paused_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paypal_accounts`
--
ALTER TABLE `paypal_accounts`
  MODIFY `accID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paypal_accounts_cuentas`
--
ALTER TABLE `paypal_accounts_cuentas`
  MODIFY `ppID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(7) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos_comentarios`
--
ALTER TABLE `pedidos_comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos_folmx`
--
ALTER TABLE `pedidos_folmx`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos_trx`
--
ALTER TABLE `pedidos_trx`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permisos_items`
--
ALTER TABLE `permisos_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permisos_por_operador`
--
ALTER TABLE `permisos_por_operador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pie_textos`
--
ALTER TABLE `pie_textos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `possible_attackers`
--
ALTER TABLE `possible_attackers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `precios`
--
ALTER TABLE `precios`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `precios_por_pedido`
--
ALTER TABLE `precios_por_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `precio_maximo_por_pedido`
--
ALTER TABLE `precio_maximo_por_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `price_lists`
--
ALTER TABLE `price_lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos_df`
--
ALTER TABLE `productos_df`
  MODIFY `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos_e`
--
ALTER TABLE `productos_e`
  MODIFY `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos_fotos`
--
ALTER TABLE `productos_fotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos_ftous_desactivados`
--
ALTER TABLE `productos_ftous_desactivados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos_p`
--
ALTER TABLE `productos_p`
  MODIFY `id_productos` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto_habilitados`
--
ALTER TABLE `producto_habilitados`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_catalog`
--
ALTER TABLE `product_catalog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_codes`
--
ALTER TABLE `product_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `product_openai`
--
ALTER TABLE `product_openai`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `produ_categorias_cuentas`
--
ALTER TABLE `produ_categorias_cuentas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `produ_cuentas`
--
ALTER TABLE `produ_cuentas`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `produ_etiquetas`
--
ALTER TABLE `produ_etiquetas`
  MODIFY `id` bigint(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `produ_paises_cuentas`
--
ALTER TABLE `produ_paises_cuentas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `produ_paises_monedas`
--
ALTER TABLE `produ_paises_monedas`
  MODIFY `id_pais_moneda` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `produ_productos_cuentas`
--
ALTER TABLE `produ_productos_cuentas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `produ_productos_cuentasrot`
--
ALTER TABLE `produ_productos_cuentasrot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `produ_tipos_forma_de_pago`
--
ALTER TABLE `produ_tipos_forma_de_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `proveedorID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedores_directos`
--
ALTER TABLE `proveedores_directos`
  MODIFY `proveedorID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedores_zonas`
--
ALTER TABLE `proveedores_zonas`
  MODIFY `pzID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `prueba_whatsapp`
--
ALTER TABLE `prueba_whatsapp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reclamos`
--
ALTER TABLE `reclamos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reclamos_motivos_old`
--
ALTER TABLE `reclamos_motivos_old`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reclamos_soluciones`
--
ALTER TABLE `reclamos_soluciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Records`
--
ALTER TABLE `Records`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `relaciones`
--
ALTER TABLE `relaciones`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reminder_log`
--
ALTER TABLE `reminder_log`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `return_reasons`
--
ALTER TABLE `return_reasons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `searches`
--
ALTER TABLE `searches`
  MODIFY `searchID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `searchLog`
--
ALTER TABLE `searchLog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `short_urls`
--
ALTER TABLE `short_urls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `short_urls_expired`
--
ALTER TABLE `short_urls_expired`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sitemaps`
--
ALTER TABLE `sitemaps`
  MODIFY `sitemapID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sitemaps_request_start`
--
ALTER TABLE `sitemaps_request_start`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sitemap_requests`
--
ALTER TABLE `sitemap_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `smtp_sent`
--
ALTER TABLE `smtp_sent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `smtp_sent_count`
--
ALTER TABLE `smtp_sent_count`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `supplier_notes`
--
ALTER TABLE `supplier_notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tags_mickey`
--
ALTER TABLE `tags_mickey`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tarjetas_fraude`
--
ALTER TABLE `tarjetas_fraude`
  MODIFY `tarjetaID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `templates_mails`
--
ALTER TABLE `templates_mails`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipos_acciones_pedidos`
--
ALTER TABLE `tipos_acciones_pedidos`
  MODIFY `acc_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_mensajes_productos`
--
ALTER TABLE `tipo_mensajes_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `trace_orders`
--
ALTER TABLE `trace_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tracking_por_pedido`
--
ALTER TABLE `tracking_por_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `types_florist_actions`
--
ALTER TABLE `types_florist_actions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `type_contact`
--
ALTER TABLE `type_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `type_reminder`
--
ALTER TABLE `type_reminder`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ultimo_minuto`
--
ALTER TABLE `ultimo_minuto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ultimo_minuto_etiquetas`
--
ALTER TABLE `ultimo_minuto_etiquetas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ultimo_minuto_relaciones`
--
ALTER TABLE `ultimo_minuto_relaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `url_thanks`
--
ALTER TABLE `url_thanks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `User`
--
ALTER TABLE `User`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_actions`
--
ALTER TABLE `user_actions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_country`
--
ALTER TABLE `user_country`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_fingerprint`
--
ALTER TABLE `user_fingerprint`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_site`
--
ALTER TABLE `user_site`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `uso_bonificaciones`
--
ALTER TABLE `uso_bonificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `visitas_afiliados`
--
ALTER TABLE `visitas_afiliados`
  MODIFY `id` mediumint(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `whatsapp_batches_messages`
--
ALTER TABLE `whatsapp_batches_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `whatsapp_campaigns`
--
ALTER TABLE `whatsapp_campaigns`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `whatsapp_channels`
--
ALTER TABLE `whatsapp_channels`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `whatsapp_contacts`
--
ALTER TABLE `whatsapp_contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `whatsapp_messages`
--
ALTER TABLE `whatsapp_messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `whatsapp_predefined`
--
ALTER TABLE `whatsapp_predefined`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `whatsapp_refreshs`
--
ALTER TABLE `whatsapp_refreshs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zipcodes`
--
ALTER TABLE `zipcodes`
  MODIFY `zipID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zipcodes_aborrar`
--
ALTER TABLE `zipcodes_aborrar`
  MODIFY `zipID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zipcode_cerrados`
--
ALTER TABLE `zipcode_cerrados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas`
--
ALTER TABLE `zonas`
  MODIFY `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas1`
--
ALTER TABLE `zonas1`
  MODIFY `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas_202502`
--
ALTER TABLE `zonas_202502`
  MODIFY `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas_20250217`
--
ALTER TABLE `zonas_20250217`
  MODIFY `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas_backup20250210`
--
ALTER TABLE `zonas_backup20250210`
  MODIFY `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas_bu`
--
ALTER TABLE `zonas_bu`
  MODIFY `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas_fecha_especial`
--
ALTER TABLE `zonas_fecha_especial`
  MODIFY `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas_fecha_normal`
--
ALTER TABLE `zonas_fecha_normal`
  MODIFY `id_zonas` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas_nodisponibles`
--
ALTER TABLE `zonas_nodisponibles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zonas_por_producto`
--
ALTER TABLE `zonas_por_producto`
  MODIFY `zppID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zooz_apis`
--
ALTER TABLE `zooz_apis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `zooz_trx`
--
ALTER TABLE `zooz_trx`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bonu_country`
--
ALTER TABLE `bonu_country`
  ADD CONSTRAINT `bonu_country_bonus_id_foreign` FOREIGN KEY (`bonus_id`) REFERENCES `bonuses` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `bonu_country_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `bonu_site`
--
ALTER TABLE `bonu_site`
  ADD CONSTRAINT `bonu_site_bonus_id_foreign` FOREIGN KEY (`bonus_id`) REFERENCES `bonuses` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `datos_pedido`
--
ALTER TABLE `datos_pedido`
  ADD CONSTRAINT `datos_pedidos_id_pedido` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `datos_pedidos_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `operadores` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `negotiations`
--
ALTER TABLE `negotiations`
  ADD CONSTRAINT `negotiations_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `pedidos` (`id`);

--
-- Filtros para la tabla `price_lists`
--
ALTER TABLE `price_lists`
  ADD CONSTRAINT `fk_regions_country` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`);

--
-- Filtros para la tabla `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `user_country`
--
ALTER TABLE `user_country`
  ADD CONSTRAINT `user_country_country_id_foreign` FOREIGN KEY (`country_id`) REFERENCES `countries` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_country_user_action_id_foreign` FOREIGN KEY (`user_action_id`) REFERENCES `user_actions` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
