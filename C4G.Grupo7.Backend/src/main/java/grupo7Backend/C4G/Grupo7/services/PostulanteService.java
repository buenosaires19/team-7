package grupo7Backend.C4G.Grupo7.services;

import grupo7Backend.C4G.Grupo7.entities.Evento;
import grupo7Backend.C4G.Grupo7.entities.Localidad;
import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.repositories.PostulanteDAO;
import grupo7Backend.C4G.Grupo7.utils.Buscador;
import grupo7Backend.C4G.Grupo7.utils.Oficio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Component("postulanteService")
@Transactional
public class PostulanteService {

    private final PostulanteDAO postulanteDAO;

    @Autowired
    public PostulanteService(@Qualifier("postulanteDAO") PostulanteDAO postulanteDAO) {
        this.postulanteDAO = postulanteDAO;
    }

    public Postulante crear(Postulante unPostulante) {
        return this.postulanteDAO.save(unPostulante);
    }

    public Postulante recuperar(Long id) {
        Optional<Postulante> postulante = postulanteDAO.findById(id);
        if(!postulante.isPresent()){
            throw new RuntimeException("No existe postulante");
        }
        return postulante.get();
    }

    public Postulante editar(Postulante unPostulante) {
        this.recuperar(unPostulante.getId());
        return this.postulanteDAO.save(unPostulante);
    }

    public List<Postulante> recuperarTodo() {
        return postulanteDAO.findAll();
    }

    public List<Postulante> recuperarSegunFiltro(Buscador unBuscador) {
        return this.postulanteDAO.findByLocalidadProvinciaAndOficio(
                unBuscador.getProvincia(), unBuscador.getOficio());
    }

    public List<Postulante> recuperarSegunFiltro(String provincia, Oficio oficio) {
        return this.postulanteDAO.findByLocalidadProvinciaAndOficio(provincia, oficio);
    }

    public Postulante masVisitado() {
        return this.postulanteDAO.masVisitado();
    }

    public Postulante add(Long id, Evento unEvento) {
        Postulante unPostulante = this.recuperar(id);
        unPostulante.incrementarVisita();
        unPostulante.addEvento(unEvento);


        return this.postulanteDAO.save(unPostulante);


    }

    @EventListener
    public void initializer(ApplicationReadyEvent event){

        Localidad localidadBuenoAires = new Localidad("Argentina","Buenos Aires", "Merlo");
        Localidad localidadCordoba = new Localidad("Argentina","Cordoba", "Carlos Paz");

        Localidad localidadSanJuan = new Localidad("Argentina","San Juan","La grande");

        Evento eventoBsAs = new Evento("Argentina","Bs As","Glew");


        Postulante postulanteProgramadora = new Postulante("Rosalia","Paz", LocalDate.now(), Oficio.CIENTIFICA, "Hija de doctor house",
                localidadBuenoAires,"www.google.com","https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/rosalia-paz.jpg"
                , "Ofmalmologa");

        postulanteProgramadora.addEvento(eventoBsAs);
        postulanteProgramadora.addEvento(new Evento("Argentina","Bs As","Glew"));
        postulanteProgramadora.addEvento(new Evento("Argentina","Santa Fe","Rosario"));
        postulanteProgramadora.addEvento(new Evento("Argentina","Bs As","Glew"));






        Postulante postulanteDoctora = new Postulante("Silvia","Kochen", LocalDate.now(), Oficio.DOCTORA, "Hija de doctor house",
                localidadCordoba,"www.google.com","https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/silvia-kochen.jpg"
                , "Ofmalmologa");
        postulanteDoctora.addEvento(new Evento("Argentina","Cordoba","Cordoba"));
        postulanteDoctora.addEvento(new Evento("Argentina","Santa Fe","Santa Fe"));
        postulanteDoctora.addEvento(new Evento("Argentina","Bs As","Lomas Zamora"));


        Postulante postulanteSanJuan = new Postulante("Aixa","Rodríguez", LocalDate.now(), Oficio.DOCTORA, "La Geologia...",
                localidadSanJuan,"www.google.com","https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/aixa.jpg"
                , "Geologia");
        postulanteSanJuan.addEvento(new Evento("Argentina","Mendoza","Magnetica"));
        postulanteSanJuan.addEvento(new Evento("Argentina","Mendoza","Magnetica"));

        Postulante postulanteSanJuanOther = new Postulante("Yesica","López", LocalDate.now(), Oficio.CIENTIFICA, "Trabajo en el Laboratorio ",
                localidadSanJuan,"www.google.com","https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/yesica-frontini.jpg"
                , "CIENCIAS BIOLÓGICAS");
        postulanteSanJuanOther.addEvento(new Evento("Argentina","Bs As","Glew"));

        Postulante postulanteBuenosAires = new Postulante("Verónica","Lassalle", LocalDate.now(), Oficio.NANOTECNOLOGA, "La investigación que ",
                localidadSanJuan,"www.google.com","https://proyectos.chicasentecnologia.org/mujeresensteam/assets/images/veronica-lasalle.jpg"
                , "NANOTECNOLOGÍA MAGNÉTICA");


        postulanteDAO.save(
                postulanteProgramadora
			);

        postulanteDAO.save(
                postulanteDoctora
        );
        postulanteDAO.save(
                postulanteSanJuan
        );

        postulanteDAO.save(
                postulanteSanJuanOther
        );

        postulanteDAO.save(
                postulanteBuenosAires
        );

    }
}
