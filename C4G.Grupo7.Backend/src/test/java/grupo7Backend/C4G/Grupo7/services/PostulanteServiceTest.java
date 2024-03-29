package grupo7Backend.C4G.Grupo7.services;

import grupo7Backend.C4G.Grupo7.entities.Evento;
import grupo7Backend.C4G.Grupo7.entities.Localidad;
import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.repositories.PostulanteDAO;
import grupo7Backend.C4G.Grupo7.utils.Buscador;
import grupo7Backend.C4G.Grupo7.utils.Oficio;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PostulanteServiceTest {

    @Autowired
    private PostulanteService postulanteService;

    @Qualifier("postulanteDAO")
    @Autowired
    private  PostulanteDAO postulanteDAO;


    @Before
    public void start() {
        this.postulanteDAO.deleteAll();
    }

    @Test
    public void guardarUnPostulante() {

        Localidad localidad = new Localidad();
        Postulante postulante = new Postulante("Fernanda","Lopez", LocalDate.now(), Oficio.DOCTORA, "Hija de doctor house",
                                                localidad,"www.google.com","", "Ofmalmologa");
        this.postulanteService.crear(postulante);
        Postulante postulanteRecuperado = this.postulanteService.recuperar(postulante.getId());
        assertNotNull(postulanteRecuperado);
        assertEquals(postulante.getNombre(),postulanteRecuperado.getNombre());

    }

    @Test
    public void seRecuperanTodosLosPostulantesGuardados(){
        Localidad localidad = new Localidad();

        Postulante aPostulante = new Postulante("Manuela","Lopez", LocalDate.now(), Oficio.DOCTORA, "Hija de doctor house",
                localidad,"www.google.com","", "Ofmalmologa");

        Localidad otherLocalidad = new Localidad();
        Postulante otherPostulante = new Postulante("Juana","Juanez", LocalDate.now(), Oficio.PROGRAMADORA, "Hija de doctor house",
                otherLocalidad,"www.google.com","", "Ofmalmologa");
        this.postulanteService.crear(aPostulante);
        this.postulanteService.crear(otherPostulante);

        assertEquals(this.postulanteService.recuperarTodo().size(),2);

    }

    @Test
    public void seRecuperanTodosLosPostulantesDeBuenosAiresYOficioProgramadora(){
        Localidad localidad = new Localidad("Argentina","Buenos Aires", "Merlo");

        Postulante aPostulante = new Postulante("Florencia","Lopez", LocalDate.now(), Oficio.PROGRAMADORA, "Hija de doctor house",
                localidad,"www.google.com","", "Ofmalmologa");

        Localidad otherLocalidad = new Localidad();
        Postulante otherPostulante = new Postulante("Juana","Juanez", LocalDate.now(), Oficio.PROGRAMADORA, "Hija de doctor house",
                otherLocalidad,"www.google.com","", "Ofmalmologa");
        this.postulanteService.crear(aPostulante);
        this.postulanteService.crear(otherPostulante);
        List<Postulante> postulantesDeBuenosAiresProgramadores = this.postulanteService.recuperarSegunFiltro("Buenos Aires", Oficio.PROGRAMADORA);
        assertEquals(1, postulantesDeBuenosAiresProgramadores.size());
        assertEquals(aPostulante.getId(),postulantesDeBuenosAiresProgramadores.get(0).getId());
        assertEquals(aPostulante.getOficio(),postulantesDeBuenosAiresProgramadores.get(0).getOficio());

    }

    @Test
    public void seRecuperanTodosLosPostulantesEnBaseAUnBuscador(){
        String  provincia   = "Buenos Aires";

        Localidad localidad = new Localidad("Argentina",provincia, "Merlo");

        Postulante aPostulante = new Postulante("Florencia","Lopez", LocalDate.now(), Oficio.PROGRAMADORA, "Hija de doctor house",
                localidad,"www.google.com","", "Ofmalmologa");

        Localidad otherLocalidad = new Localidad("Argentina","Rosario", "Rosario");
        Postulante otherPostulante = new Postulante("Juana","Juanez", LocalDate.now(), Oficio.PROGRAMADORA, "Hija de doctor house",
                otherLocalidad,"www.google.com","", "Ofmalmologa");
        this.postulanteService.crear(aPostulante);
        this.postulanteService.crear(otherPostulante);

        Buscador unBuscador = new Buscador(Oficio.PROGRAMADORA,provincia);

        List<Postulante> postulantesDeBuenosAiresProgramadores = this.postulanteService.recuperarSegunFiltro(unBuscador);
        assertEquals(aPostulante.getId(),postulantesDeBuenosAiresProgramadores.get(0).getId());
        assertEquals(aPostulante.getOficio(),postulantesDeBuenosAiresProgramadores.get(0).getOficio());

    }
    public void seRecuperaAlPostulanteMasVisitado(){
        Localidad localidad = new Localidad("Argentina","Buenos Aires", "Merlo");

        Postulante aPostulante = new Postulante("Florencia","Lopez", LocalDate.now(), Oficio.PROGRAMADORA, "Hija de doctor house",
                localidad,"www.google.com","", "Ofmalmologa");
        aPostulante.setVisitas(10);

        Localidad otherLocalidad = new Localidad();
        Postulante otherPostulante = new Postulante("Juana","Juanez", LocalDate.now(), Oficio.PROGRAMADORA, "Hija de doctor house",
                otherLocalidad,"www.google.com","", "Ofmalmologa");
        otherPostulante.setVisitas(20);

        this.postulanteService.crear(aPostulante);
        this.postulanteService.crear(otherPostulante);
        Postulante postulanteMasVisitado = this.postulanteService.masVisitado();
        assertEquals("Juana", postulanteMasVisitado.getNombre());

    }

    @Test
    public void despuesDeAgregarUnEventoAUnPostulanteEsteTiene1Evento() {
        Localidad localidad = new Localidad();
        Postulante postulante = new Postulante("Fernanda","Lopez", LocalDate.now(), Oficio.DOCTORA, "Hija de doctor house",
                localidad,"www.google.com","", "Ofmalmologa");
        this.postulanteService.crear(postulante);

        Evento unEvento = new Evento("Argentina","Bs As","Glew");
        postulanteService.add(postulante.getId(),unEvento);

        Postulante unPostulante = postulanteService.recuperar(postulante.getId());


        assertEquals(1,unPostulante.getVisitas());
        assertEquals(1,unPostulante.getEventos().size());

    }


    @After
    public void clear() {
        this.postulanteDAO.deleteAll();
    }
}
