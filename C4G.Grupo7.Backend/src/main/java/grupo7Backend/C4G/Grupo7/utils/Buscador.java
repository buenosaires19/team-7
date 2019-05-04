package grupo7Backend.C4G.Grupo7.utils;

public class Buscador {


    private Oficio oficio;

    private String provincia;

    public Buscador( Oficio oficio, String provincia) {
        this.oficio = oficio;
        this.provincia = provincia;
    }

    public Oficio getOficio() {
        return oficio;
    }

    public void setOficio(Oficio oficio) {
        this.oficio = oficio;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }
}
