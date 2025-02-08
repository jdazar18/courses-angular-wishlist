export class DestinoViaje {

    private selected: boolean = false;
    public servicios: string[];

    constructor(public nombre: string, public url: string, public id: number) {
        this.servicios = ['Piscina', 'Desayuno'];
    }

    isSelected(): boolean {
        return this.selected;
    }

    setSelected(s : boolean){
        this.selected = s;
    }
}