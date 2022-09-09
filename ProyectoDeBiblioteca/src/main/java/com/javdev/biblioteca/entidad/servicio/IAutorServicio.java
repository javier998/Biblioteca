/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javdev.biblioteca.entidad.servicio;

import com.javdev.biblioteca.entidad.modelo.Autor;
import java.util.List;

/**
 *
 * @author javi_
 */
public interface IAutorServicio {
    
    public Autor get(long id);
    
    public List<Autor> getAll();
    
    public void post(Autor autor);
    
    public void put(Autor autor, long id);
    
    public void delete(long id);
}
