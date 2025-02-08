
import { BehaviorSubject, Subject } from 'rxjs';
import { DestinoViaje } from './destino-viaje.model';

export class DestinosApiClient{
    destinos: DestinoViaje[];
    current: Subject<DestinoViaje>;

    constructor(){
        this.destinos = [];
        this.current = new BehaviorSubject<DestinoViaje>(new DestinoViaje('', '', 0));
    }

    add(d: DestinoViaje){
        this.destinos.push(d);
    }

    getAll(): DestinoViaje[]{
        return this.destinos;
    }

    getById(id: String): DestinoViaje{
        return this.destinos.filter((d) => {return d.id.toString() == id;})[0];
    }

    elegir(d: DestinoViaje){
        this.destinos.forEach(x => x.setSelected(false));
        d.setSelected(true);
        this.current.next(d);
    }

    subscribeOnChange(fn : any){
        this.current.subscribe(fn);
    }

}