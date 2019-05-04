package grupo7Backend.C4G.Grupo7.services;

import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.repositories.PostulanteDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component("postulanteService")
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

    public List<Postulante> recuperarTodo() {
        return postulanteDAO.findAll();
    }



}
