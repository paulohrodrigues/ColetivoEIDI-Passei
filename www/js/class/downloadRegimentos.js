function DownloadRegimentos(instituicao){
	
	var listaDocs=
	{
		"ufal":"http://www.ufal.edu.br/transparencia/institucional/estatuto-e-regimento/Estatuto_Regimento_Ufal.pdf",
		"uneal":"http://www.uneal.edu.br/orgaos/consu/regimento-geral-uneal-atualizacao-21-01-2014.pdf",
		"cesmac":"http://www.cesmac.edu.br/admin/wp-content/uploads/2014/11/ESTATUTO-CESMAC.pdf",
		"ifal":"http://www.saomiguel.ifal.edu.br/arquivos/caa/normas-de-organizacao-didatica-do-ifal",
		"uncisal":"http://www.uncisal.edu.br/wp-content/uploads/2011/04/REGIMENTO-GERAL-DA-UNCISAL-20131.pdf"
	};
	window.open(listaDocs[instituicao],'_system','location=yes');
	return false;
}


