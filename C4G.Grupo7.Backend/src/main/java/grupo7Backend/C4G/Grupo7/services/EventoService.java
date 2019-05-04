package grupo7Backend.C4G.Grupo7.services;

import grupo7Backend.C4G.Grupo7.entities.Evento;
import grupo7Backend.C4G.Grupo7.entities.Postulante;
import grupo7Backend.C4G.Grupo7.repositories.EventoDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component("eventoService")
@Transactional
public class EventoService {

    private final EventoDAO eventoDAO;
    private final PostulanteService postulanteService;

    @Autowired
    public EventoService(@Qualifier("eventoDAO") EventoDAO eventoDAO,
                         @Qualifier("postulanteService") PostulanteService unPostulanteService) {
        this.eventoDAO          = eventoDAO;
        this.postulanteService  = unPostulanteService;
    }

    public Evento create(Long id,Evento unEvento){
        Postulante postulante = this.postulanteService.recuperar(id);
        unEvento.setPostulante(postulante);
        return this.eventoDAO.save(unEvento);
    }

}
