/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Profesores.service.service.service.service;

import Profesores.NewClass;
import Profesores.Usuariosprofe;
import com.google.gson.Gson;
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
@Path("prof")
public class UsuariosprofeFacadeREST extends AbstractFacade<Usuariosprofe> {

    @PersistenceContext(unitName = "Profesores2PU")
    private EntityManager em;

    public UsuariosprofeFacadeREST() {
        super(Usuariosprofe.class);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void create(String json) {
        Gson gson = new Gson();
        System.out.println("ENTITY");
        System.out.println(json);
        super.create(gson.fromJson(json, Usuariosprofe.class));
    }

    @PUT
    @Path("{id}")
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public void edit(@PathParam("id") Integer id, Usuariosprofe entity) {
        System.out.println(entity);
        super.edit(entity);
    }

    @DELETE
    @Path("{id}")
    public void remove(@PathParam("id") Integer id) {
        super.remove(super.find(id));
    }

    @GET
    @Path("/{contra}/{usuario}/{email}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public NewClass find(@PathParam("contra") String contra,@PathParam("email") String email,@PathParam("user") String user) {
        Gson gson = new Gson();
                Usuariosprofe prof = new Usuariosprofe(0, email, contra, user, "","");
                List<Usuariosprofe> findAll = super.findAll();
                for (int i = 0; i < findAll.size(); i++) {
                    if(findAll().get(i).equals(prof))
                    {
                        NewClass b = new NewClass(true);
                        System.out.println("Sesion iniciada");
                        return b;
                    }
                
        }
                
        NewClass b = new NewClass(false);
                System.out.println("Pendejo");
        return b;
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Usuariosprofe find(@PathParam("id") Integer id) {
        System.out.println("AQUI");
        return super.find(id);
    }

    @GET
    @Override
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Usuariosprofe> findAll() {
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
