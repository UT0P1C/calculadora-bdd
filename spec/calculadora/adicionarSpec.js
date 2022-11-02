describe("Suíte de testes para validação da função Adicionar", () => {
	const Calculadora = require("../../src/js/calculadora.js");


	it("deve somar 2 e 3 e retornar 5", () => {
		expect(Calculadora.adicionar(2, 3)).toEqual(5);
	});

	it("deve somar 9 e -3 no formato string e retornar 6", () => {
		expect(Calculadora.adicionar('9', '-3')).toEqual(6);
	});

	it("deve somar 1.5 e 3 retornando 4.5" , () => {
		expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
	});

	it("deve retornar 0 quando o valor 1 não é númerico", () => {
		expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
	});

	it("deve retornar 0 quando o valor 1 não é númerico", () => {
		expect(Calculadora.adicionar(10, undefined)).toEqual(0);
	});
});