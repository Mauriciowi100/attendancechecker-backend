/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Profesores;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Mauriciowi100
 */
@Entity
@Table(name = "usuariosprofe")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Usuariosprofe.findAll", query = "SELECT u FROM Usuariosprofe u")
    , @NamedQuery(name = "Usuariosprofe.findById", query = "SELECT u FROM Usuariosprofe u WHERE u.id = :id")
    , @NamedQuery(name = "Usuariosprofe.findByCorreo", query = "SELECT u FROM Usuariosprofe u WHERE u.correo = :correo")
    , @NamedQuery(name = "Usuariosprofe.findByContrase\u00f1a", query = "SELECT u FROM Usuariosprofe u WHERE u.contrase\u00f1a = :contrase\u00f1a")
    , @NamedQuery(name = "Usuariosprofe.findByUsuario", query = "SELECT u FROM Usuariosprofe u WHERE u.usuario = :usuario")
    , @NamedQuery(name = "Usuariosprofe.findByNombre", query = "SELECT u FROM Usuariosprofe u WHERE u.nombre = :nombre")
    , @NamedQuery(name = "Usuariosprofe.findByApellido", query = "SELECT u FROM Usuariosprofe u WHERE u.apellido = :apellido")})
public class Usuariosprofe implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "correo")
    private String correo;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 25)
    @Column(name = "contrase\u00f1a")
    private String contraseña;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 25)
    @Column(name = "usuario")
    private String usuario;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 30)
    @Column(name = "nombre")
    private String nombre;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 30)
    @Column(name = "apellido")
    private String apellido;

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    public Usuariosprofe() {
    }

    public Usuariosprofe(Integer id) {
        this.id = id;
    }

    public Usuariosprofe(Integer id, String correo, String contraseña, String usuario, String nombre, String apellido) {
        this.id = id;
        this.correo = correo;
        this.contraseña = contraseña;
        this.usuario = usuario;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }
    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if ((this.correo.equalsIgnoreCase(((Usuariosprofe) object).getCorreo()) || this.usuario.equalsIgnoreCase(((Usuariosprofe) object).getUsuario())) && this.contraseña.equalsIgnoreCase(((Usuariosprofe) object).getContraseña())) {
            return true;
        }
        return false;
    }
    @Override
    public String toString() {
        return "Profesores.Usuariosprofe[ id=" + id + " ]";
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    
}
