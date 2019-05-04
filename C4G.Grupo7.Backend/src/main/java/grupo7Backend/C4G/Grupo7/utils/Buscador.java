package grupo7Backend.C4G.Grupo7.utils;

public class Buscador {

    private int index;

    private int size;

    private Oficio oficio;

    private String provincia;

    public Buscador(int index, int size, Oficio oficio, String provincia) {
        this.index = index;
        this.size = size;
        this.oficio = oficio;
        this.provincia = provincia;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
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
