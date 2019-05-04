package grupo7Backend.C4G.Grupo7.services;

import grupo7Backend.C4G.Grupo7.entities.Evento;
import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.repositories.PostulanteDAO;
import grupo7Backend.C4G.Grupo7.utils.Buscador;
import grupo7Backend.C4G.Grupo7.utils.Oficio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

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

    public Page<Postulante> recuperarSegunFiltro(Buscador unBuscador) {
        return this.postulanteDAO.findByLocalidadProvinciaAndOficio(
                PageRequest.of(unBuscador.getIndex(),unBuscador.getSize()),
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
}
