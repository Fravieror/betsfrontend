-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 11, 2019 at 03:48 AM
-- Server version: 5.6.34-log
-- PHP Version: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `basedt_als`
--

-- --------------------------------------------------------

--
-- Table structure for table `calificaciones`
--

CREATE TABLE `calificaciones` (
  `Id_calificacion` int(11) NOT NULL,
  `Id_usuario` int(4) DEFAULT NULL,
  `Id_curso` int(4) DEFAULT NULL,
  `Id_modulo` int(4) DEFAULT NULL,
  `Calificacion` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `curso`
--

CREATE TABLE `curso` (
  `Id_curso` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `discapacidad`
--

CREATE TABLE `discapacidad` (
  `Id_discapacidad` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `herramientas`
--

CREATE TABLE `herramientas` (
  `Id_herramienta` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(300) DEFAULT NULL,
  `Id_curso` int(4) DEFAULT NULL,
  `Id_modulo` int(4) DEFAULT NULL,
  `Id_discapacidad` int(4) DEFAULT NULL,
  `RutaPDF` varchar(100) DEFAULT NULL,
  `RutaVideo` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `modulo`
--

CREATE TABLE `modulo` (
  `Id_modulo` int(11) NOT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(300) DEFAULT NULL,
  `Id_curso` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `Id_usuario` int(11) NOT NULL,
  `T_Doc` varchar(50) DEFAULT NULL,
  `N_Doc` int(20) DEFAULT NULL,
  `Nombres` varchar(60) DEFAULT NULL,
  `Apellidos` varchar(60) DEFAULT NULL,
  `F_Nacimiento` date DEFAULT NULL,
  `Email` varchar(80) DEFAULT NULL,
  `Telefono` int(20) DEFAULT NULL,
  `Celular` int(15) DEFAULT NULL,
  `Genero` varchar(50) DEFAULT NULL,
  `Tipo_usuario` int(2) DEFAULT NULL,
  `Id_discapacidad` int(4) DEFAULT NULL,
  `contrasena` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`Id_calificacion`);

--
-- Indexes for table `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`Id_curso`);

--
-- Indexes for table `discapacidad`
--
ALTER TABLE `discapacidad`
  ADD PRIMARY KEY (`Id_discapacidad`);

--
-- Indexes for table `herramientas`
--
ALTER TABLE `herramientas`
  ADD PRIMARY KEY (`Id_herramienta`);

--
-- Indexes for table `modulo`
--
ALTER TABLE `modulo`
  ADD PRIMARY KEY (`Id_modulo`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `Id_calificacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `curso`
--
ALTER TABLE `curso`
  MODIFY `Id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `discapacidad`
--
ALTER TABLE `discapacidad`
  MODIFY `Id_discapacidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `herramientas`
--
ALTER TABLE `herramientas`
  MODIFY `Id_herramienta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `modulo`
--
ALTER TABLE `modulo`
  MODIFY `Id_modulo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
