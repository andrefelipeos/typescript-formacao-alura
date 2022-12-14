import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    public static criaDe(dataString: string,
            quantidadeString: string,
            valorString: string): Negociacao {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
    }

    public verificaSeIgual(outraNegociacao: Negociacao): boolean {
        return this.quantidade === outraNegociacao.quantidade
            && this.valor === outraNegociacao.valor
            && this.data.toDateString() === outraNegociacao.data.toDateString();
    }

}