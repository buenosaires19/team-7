package grupo7Backend.C4G.Grupo7.services;

import grupo7Backend.C4G.Grupo7.entities.Localidad;
import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.utils.Oficio;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PostulanteServiceTest {

    @Autowired
    private PostulanteService postulanteService;


    @Test
    public void guardarUnPostulante() {

        Localidad localidad = new Localidad();
        Postulante postulante = new Postulante("Francisco","Lopez", LocalDate.now(), Oficio.DOCTORA, "Hija de doctor house",
                                                localidad,"www.google.com","", "Ofmalmologa");
        this.postulanteService.crear(postulante);
        Postulante postulanteRecuperado = this.postulanteService.recuperar(postulante.getId());
        assertNotNull(postulanteRecuperado);
        assertEquals(postulante.getNombre(),postulanteRecuperado.getNombre());

    }
}
