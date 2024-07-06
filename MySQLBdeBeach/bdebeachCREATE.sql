-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema beach
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema beach
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `beach` DEFAULT CHARACTER SET utf8 ;
USE `beach` ;

-- -----------------------------------------------------
-- Table `beach`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `beach`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(10) NOT NULL,
  `callenumero` VARCHAR(45) NOT NULL,
  `colonia` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `CP` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beach`.`Pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `beach`.`Pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` VARCHAR(45) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `total` DECIMAL(10,2) NULL DEFAULT NULL,
  `metodopago` VARCHAR(45) NOT NULL,
  `Usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Usuario_id`),
  INDEX `fk_Pedido_Usuario_idx` (`Usuario_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beach`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `beach`.`Productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(70) NOT NULL,
  `colores` VARCHAR(45) NOT NULL,
  `tallas` VARCHAR(45) NOT NULL,
  `img` VARCHAR(250) NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beach`.`DetallesPedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `beach`.`DetallesPedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `talla` VARCHAR(1) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `cantidad` VARCHAR(45) NOT NULL,
  `Pedido_id` INT NOT NULL,
  `Productos_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Pedido_id`, `Productos_id`),
  INDEX `fk_DetallesPedido_Productos1_idx` (`Productos_id` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
