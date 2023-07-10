CREATE DATABASE mibodeguita;
USE mibodeguita;
CREATE TABLE users (
    id BIGINT(20)UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) ,
    email VARCHAR(255) ,
    email_verified_at TIMESTAMP ,
    id_responsable BIGINT(20)UNSIGNED  ,
    estado TINYINT(4) ,
    created_by BIGINT(20)UNSIGNED  ,
    update_by BIGINT(20)UNSIGNED  ,
    foto VARCHAR(255),
    password VARCHAR(255) ,
    created_at TIMESTAMP ,
    updated_at TIMESTAMP ,
    deleted_at TIMESTAMP 
);

CREATE TABLE bodegas (
    id BIGINT(20)UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) ,
    id_responsable BIGINT(20)UNSIGNED ,
    estado TINYINT(4) ,
    created_by BIGINT(20)UNSIGNED ,
    update_by BIGINT(20)UNSIGNED ,
    created_at TIMESTAMP ,
    updated_at TIMESTAMP ,
    deleted_at TIMESTAMP ,
    CONSTRAINT fk_responsable FOREIGN KEY(id_responsable) REFERENCES users(id),
    CONSTRAINT fk_createdby FOREIGN KEY(created_by) REFERENCES users(id),
    CONSTRAINT fk_updatedby FOREIGN KEY(update_by) REFERENCES users(id)
);

CREATE TABLE productos (
    id BIGINT(20)UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) ,
    descripcion VARCHAR(255) ,
    estado TINYINT(4) ,
    created_by BIGINT(20)UNSIGNED ,
    update_by BIGINT(20)UNSIGNED ,
    created_at TIMESTAMP ,
    updated_at TIMESTAMP ,
    deleted_at TIMESTAMP ,
    CONSTRAINT fk_createdbyprod FOREIGN KEY(created_by) REFERENCES users(id),
    CONSTRAINT fk_updatedbyprod FOREIGN KEY(update_by) REFERENCES users(id)
);
CREATE TABLE inventarios (
    id BIGINT(20)UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_bodega BIGINT(20)UNSIGNED ,
    id_producto BIGINT(20)UNSIGNED ,
    cantidad int(11) ,
    created_by BIGINT(20)UNSIGNED ,
    update_by BIGINT(20)UNSIGNED ,
    created_at TIMESTAMP ,
    updated_at TIMESTAMP ,
    deleted_at TIMESTAMP ,
    CONSTRAINT fk_idproducto FOREIGN KEY(id_producto) REFERENCES productos(id),
    CONSTRAINT fk_idbodega FOREIGN KEY(id_bodega) REFERENCES bodegas(id),
    CONSTRAINT fk_createdbyinv FOREIGN KEY(created_by) REFERENCES users(id),
    CONSTRAINT fk_updatebyinv FOREIGN KEY(update_by) REFERENCES users(id)
);

CREATE TABLE historiales (
    id BIGINT(20)UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cantidad INT(11) ,
    id_bodega_origen BIGINT(20)UNSIGNED ,
    id_bodega_destino BIGINT(20)UNSIGNED ,
    id_inventario BIGINT(20)UNSIGNED ,
    created_by BIGINT(20)UNSIGNED ,
    update_by BIGINT(20)UNSIGNED ,
    created_at TIMESTAMP ,
    updated_at TIMESTAMP ,
    deleted_at TIMESTAMP ,
    CONSTRAINT fk_idbodegaorigen FOREIGN KEY(id_bodega_origen) REFERENCES bodegas(id),
    CONSTRAINT fk_idbodegadestino FOREIGN KEY(id_bodega_destino) REFERENCES bodegas(id),
    CONSTRAINT fk_idinventario FOREIGN KEY(id_inventario) REFERENCES inventarios(id),
    CONSTRAINT fk_createdbyhist FOREIGN KEY(created_by) REFERENCES users(id),
    CONSTRAINT fk_updatebyhist FOREIGN KEY(update_by) REFERENCES users(id)
);