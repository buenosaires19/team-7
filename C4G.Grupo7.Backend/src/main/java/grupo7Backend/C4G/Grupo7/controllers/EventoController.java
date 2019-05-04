package grupo7Backend.C4G.Grupo7.controllers;


import grupo7Backend.C4G.Grupo7.entities.Evento;
import grupo7Backend.C4G.Grupo7.services.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class EventoController {

    private final EventoService eventoService;

    @Autowired
    public EventoController(@Qualifier("eventoService") EventoService unEventoService) {
        this.eventoService = unEventoService;
    }

    @PutMapping("/postulante/{id}/evento/crear")
    public Evento crear(@PathVariable("id") Long id ,@RequestBody @Valid Evento unEvento){
        return eventoService.create(id,unEvento);
    }

}
