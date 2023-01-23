/**
 * Mapeamento dos Arquivos para pesquisa
 * lembrar de revisar campos
 * Se der tempo preparar salvamento local
 * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

export const survey = JSON.parse(localStorage.getItem("survey")!) || {
	account_status: "",
	financial_market: "",
	investment_type: "",
	resources_training: "",
	loss_details: "",
	full_name: "",
	email: "",
	age: 0,
};

