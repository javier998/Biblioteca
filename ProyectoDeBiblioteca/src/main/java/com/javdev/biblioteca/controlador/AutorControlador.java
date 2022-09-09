/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javdev.biblioteca.controlador;

import com.javdev.biblioteca.entidad.modelo.Autor;
import com.javdev.biblioteca.entidad.servicio.IAutorServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author javi_
 */
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})

public class AutorControlador {
    
    @Autowired
    IAutorServicio objIAutorServicio;
    
    @GetMapping("/autores")
    public List<Autor> ObtenerAutores(){
        return objIAutorServicio.getAll();
    }
    
    @GetMapping("/autor/{id}")
    public Autor ObtenerAutor(@PathVariable(value = "id") long id){
        return objIAutorServicio.get(id);
    }
    
    @PostMapping("/autor")
    public void GuardarAutor(Autor autor){
        objIAutorServicio.post(autor);
    }
    
    @PutMapping("/autor/{id}")
    public void ActualizarAutor(@PathVariable(value = "id") long id, Autor autor){
        objIAutorServicio.put(autor, id);
    }
    
    @DeleteMapping("/autor/{id}")
    public void EliminarAutor(@PathVariable(value="id") long id){
        objIAutorServicio.delete(id);
    }
}
