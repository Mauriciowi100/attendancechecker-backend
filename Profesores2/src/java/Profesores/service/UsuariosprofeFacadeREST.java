/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Profesores.service;

import Profesores.Usuariosprofe;
import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Mauriciowi100
 */
@Stateless
@Path("profesores")
public class UsuariosprofeFacadeREST extends AbstractFacade<Usuariosprofe> {

    @PersistenceContext(unitName = "Profesores2PU")
    private EntityManager em;

    public UsuariosprofeFacadeREST() {
        super(Usuariosprofe.class);
    }

    @POST
    @Path("{id}/{nombre}/{apellido}/{correo}/{contrasena}/{usuario}")
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public void create(@PathParam("id") Integer id, @PathParam("nombre") String nombre, @PathParam("apellido") String apellido, @PathParam("correo") String correo, @PathParam("contrasena") String contrasena, @PathParam("usuario") String usuario) {
        System.out.println(id+nombre+apellido+usuario+contrasena+correo);
        Usuariosprofe entity = new Usuariosprofe(id, correo, contrasena, usuario, nombre, apellido);
        super.create(entity);
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") Integer id, Usuariosprofe entity) {
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Usuariosprofe find(@PathParam("id") Integer id) {
        return super.find(id);
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Usuariosprofe> findAll() {
        System.out.println("hola");
        return super.findAll();
    }

    @GET
    @Path("{from}/{to}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Usuariosprofe> findRange(@PathParam("from") Integer from, @PathParam("to") Integer to) {
        return super.findRange(new int[]{from, to});
    }

    @GET
    @Path("count")
    @Produces(MediaType.TEXT_PLAIN)
    public String countREST() {
        return String.valueOf(super.count());
    }

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
    
}
