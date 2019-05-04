package grupo7Backend.C4G.Grupo7.entities;

import javax.persistence.*;

@Entity
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String pais;
    private String provincia;
    private String localidad;

    @ManyToOne(cascade = CascadeType.ALL)
    private Postulante postulante;

    public Evento(){}

    public Evento(String unPais,String unaProvincia, String unaLocalidad){
        this.pais = unPais;
        this.provincia = unaProvincia;
        this.localidad = unaLocalidad;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }

    public Postulante getPostulante() {
        return postulante;
    }

    public void setPostulante(Postulante postulante) {
        this.postulante = postulante;
    }
}
