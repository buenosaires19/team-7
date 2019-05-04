package grupo7Backend.C4G.Grupo7.entities;

import grupo7Backend.C4G.Grupo7.utils.Oficio;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Postulante {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;
    private LocalDate fechaNacimiento;
    private Oficio oficio;
    private String descripcion;
    @ManyToOne(cascade = CascadeType.ALL)
    private Localidad localidad;
    private String contenido;
    private String foto;
    private String areaEspecializacion;
    private int visitas;

    public Postulante(String nombre, String apellido, LocalDate fechaNaciemiento, Oficio oficio,
                      String descripcion, Localidad localidad, String contenido, String foto,
                      String areaEspecializacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNaciemiento;
        this.oficio = oficio;
        this.descripcion = descripcion;
        this.localidad = localidad;
        this.contenido = contenido;
        this.foto = foto;
        this.areaEspecializacion = areaEspecializacion;
        this.visitas = 0;
    }

    public Postulante() {
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

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public Oficio getOficio() {
        return oficio;
    }

    public void setOficio(Oficio oficio) {
        this.oficio = oficio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Localidad getLocalidad() {
        return localidad;
    }

    public void setLocalidad(Localidad localidad) {
        this.localidad = localidad;
    }

    public String getContenido() {
        return contenido;
    }

    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getAreaEspecializacion() {
        return areaEspecializacion;
    }

    public void setAreaEspecializacion(String areaEspecializacion) {
        this.areaEspecializacion = areaEspecializacion;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public int getVisitas() {
        return visitas;
    }

    public void setVisitas(int visitas) {
        this.visitas = visitas;
    }

    public void sumarVisita() {
        this.visitas += 1;
    }

}
