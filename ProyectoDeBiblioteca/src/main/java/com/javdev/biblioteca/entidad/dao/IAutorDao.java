/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javdev.biblioteca.entidad.dao;

import com.javdev.biblioteca.entidad.modelo.Autor;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author javi_
 */
public interface IAutorDao extends CrudRepository<Autor, Long>{
    
}
