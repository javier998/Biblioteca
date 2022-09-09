/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javdev.biblioteca.entidad.servicio;

import com.javdev.biblioteca.entidad.dao.IAutorDao;
import com.javdev.biblioteca.entidad.modelo.Autor;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author javi_
 */

@Service
public class AutorServicioImp implements IAutorServicio{

    @Autowired
    private IAutorDao objetoIAutorDao;
    
    @Override
    public Autor get(long id) {
        return objetoIAutorDao.findById(id).get();
    }

    @Override
    public List<Autor> getAll() {
        return (List<Autor>) objetoIAutorDao.findAll();
    }

    @Override
    public void post(Autor autor) {
        objetoIAutorDao.save(autor);
    }

    @Override
    public void put(Autor autor, long id) {
        objetoIAutorDao.findById(id).ifPresent((x)->{
            autor.setId(id);
            objetoIAutorDao.save(autor);
            
        });
    }

    @Override
    public void delete(long id) {
        objetoIAutorDao.deleteById(id);
    }
    
}
