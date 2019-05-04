package grupo7Backend.C4G.Grupo7.services;

import grupo7Backend.C4G.Grupo7.entities.Evento;
import grupo7Backend.C4G.Grupo7.entities.Localidad;
import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.repositories.EventoDAO;
import grupo7Backend.C4G.Grupo7.repositories.PostulanteDAO;
import grupo7Backend.C4G.Grupo7.utils.Oficio;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EventoServiceTest {

    @Autowired
    private EventoService eventoService;

    @Qualifier("postulanteDAO")
    @Autowired
    private PostulanteDAO postulanteDAO;

    @Qualifier("eventoDAO")
    @Autowired
    private EventoDAO eventoDAO;

    @Test
    public void guardarUnEvento() {
        Localidad localidad = new Localidad();
        Postulante postulante = new Postulante("Fernanda","Lopez", LocalDate.now(), Oficio.DOCTORA, "Hija de doctor house",
                localidad,"www.google.com","", "Ofmalmologa");
        this.postulanteDAO.save(postulante);

        Evento unEvento = new Evento("Argentina","Bs As","Glew");
        eventoService.create(postulante.getId(),unEvento);

        assertNotNull(unEvento.getId());
        assertEquals(1,this.eventoDAO.findAll().size());
    }


    @After
    public void clear(){
        this.eventoDAO.deleteAll();
        this.postulanteDAO.deleteAll();
    }


}
