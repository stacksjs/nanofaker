import type { LocaleDefinition } from '../types'

export const pt: LocaleDefinition = {
  title: 'Portuguese',
  person: {
    firstName: [
      'Miguel', 'João', 'Francisco', 'Rodrigo', 'Gabriel', 'Santiago', 'Tomás', 'Afonso', 'Gonçalo', 'Diogo',
      'Pedro', 'Tiago', 'Martim', 'Lucas', 'Rafael', 'Henrique', 'Guilherme', 'Duarte', 'Vicente', 'Dinis',
      'André', 'Bernardo', 'Eduardo', 'Felipe', 'Bruno', 'Carlos', 'Daniel', 'Fernando', 'Gustavo', 'Hugo',
      'Igor', 'José', 'Leonardo', 'Manuel', 'Nuno', 'Paulo', 'Ricardo', 'Sérgio', 'Vítor', 'Alexandre',
      'Maria', 'Leonor', 'Matilde', 'Beatriz', 'Carolina', 'Mariana', 'Ana', 'Inês', 'Sofia', 'Lara',
      'Francisca', 'Alice', 'Joana', 'Laura', 'Marta', 'Rita', 'Sara', 'Diana', 'Catarina', 'Isabel',
      'Gabriela', 'Juliana', 'Patrícia', 'Raquel', 'Teresa', 'Vera', 'Adriana', 'Carla', 'Cristina', 'Helena',
      'Luísa', 'Mónica', 'Paula', 'Sandra', 'Sónia', 'Susana', 'Andreia', 'Cláudia', 'Filipa', 'Ines',
      'Lúcia', 'Margarida', 'Melissa', 'Olivia', 'Rafaela', 'Tatiana', 'Vanessa', 'Vitória', 'Yara', 'Zara',
    ],
    lastName: [
      'Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Costa', 'Rodrigues', 'Martins', 'Jesus', 'Sousa',
      'Fernandes', 'Gonçalves', 'Gomes', 'Lopes', 'Marques', 'Alves', 'Almeida', 'Ribeiro', 'Pinto', 'Carvalho',
      'Teixeira', 'Moreira', 'Correia', 'Mendes', 'Nunes', 'Soares', 'Vieira', 'Monteiro', 'Cardoso', 'Rocha',
      'Neto', 'Barbosa', 'Dias', 'Castro', 'Campos', 'Freitas', 'Antunes', 'Cunha', 'Fonseca', 'Macedo',
      'Melo', 'Batista', 'Ramos', 'Barros', 'Coelho', 'Cruz', 'Lima', 'Pires', 'Reis', 'Pacheco',
      'Azevedo', 'Miranda', 'Araújo', 'Farias', 'Tavares', 'Moura', 'Duarte', 'Magalhães', 'Nogueira', 'Nascimento',
      'Brito', 'Matos', 'Guedes', 'Morais', 'Brandão', 'Carneiro', 'Henriques', 'Simões', 'Vaz', 'Guerreiro',
    ],
    prefix: ['Sr.', 'Sra.', 'Dr.', 'Dra.', 'Prof.', 'Prof.ª', 'Eng.', 'Arq.'],
    suffix: ['Júnior', 'Filho', 'Neto', 'I', 'II', 'III'],
    gender: ['Masculino', 'Feminino', 'Não-binário', 'Agênero', 'Gênero fluido'],
    jobTitle: [
      'Engenheiro de Software', 'Gerente de Produto', 'Designer', 'Cientista de Dados', 'Engenheiro DevOps',
      'Gerente de Marketing', 'Representante de Vendas', 'Contador', 'Gerente de RH', 'Diretor Executivo',
      'Diretor Técnico', 'Diretor Financeiro', 'Gerente de Projetos', 'Analista de Negócios',
      'Desenvolvedor', 'Arquiteto de Software', 'Consultor', 'Analista', 'Coordenador', 'Especialista',
      'Técnico', 'Assistente', 'Gerente de Operações', 'Gerente Comercial', 'Supervisor',
    ],
  },
  address: {
    street: [
      'Principal', 'Central', 'da Liberdade', 'da República', 'do Comércio', 'da Independência',
      'da Paz', 'das Flores', 'do Sol', 'da Praia', 'do Porto', 'da Igreja', 'da Estação',
      'dos Navegadores', 'dos Descobrimentos', 'Vasco da Gama', 'Infante D. Henrique',
    ],
    city: [
      'Lisboa', 'Porto', 'Amadora', 'Braga', 'Setúbal', 'Coimbra', 'Queluz', 'Funchal', 'Cacém', 'Vila Nova de Gaia',
      'Algueirão-Mem Martins', 'Loures', 'Évora', 'Rio de Mouro', 'Odivelas', 'Aveiro', 'Gondomar', 'Viseu',
      'Guimarães', 'Matosinhos', 'Leiria', 'Faro', 'Almada', 'Barreiro', 'Seixal', 'Barcelos', 'Penafiel',
      'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba',
      'Recife', 'Porto Alegre', 'Belém', 'Goiânia', 'Guarulhos', 'Campinas', 'São Luís', 'Maceió',
    ],
    state: [
      'Lisboa', 'Porto', 'Faro', 'Braga', 'Aveiro', 'Coimbra', 'Setúbal', 'Viseu', 'Leiria', 'Santarém',
      'Açores', 'Madeira', 'Évora', 'Beja', 'Viana do Castelo', 'Vila Real', 'Bragança', 'Guarda',
      'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Paraná', 'Rio Grande do Sul',
      'Pernambuco', 'Ceará', 'Pará', 'Maranhão', 'Goiás', 'Amazonas', 'Espírito Santo',
    ],
    stateAbbr: [
      'LSB', 'PRT', 'FAR', 'BRG', 'AVR', 'CBR', 'STB', 'VIS', 'LRA', 'SNT',
      'SP', 'RJ', 'MG', 'BA', 'PR', 'RS', 'PE', 'CE', 'PA', 'MA', 'GO', 'AM', 'ES',
    ],
    country: [
      'Portugal', 'Brasil', 'Angola', 'Moçambique', 'Cabo Verde', 'Guiné-Bissau', 'Timor-Leste',
      'São Tomé e Príncipe', 'Espanha', 'França', 'Luxemburgo', 'Suíça', 'Alemanha',
    ],
    countryCode: ['PT', 'BR', 'AO', 'MZ', 'CV', 'GW', 'TL', 'ST', 'ES', 'FR', 'LU', 'CH', 'DE'],
    zipCode: ['####-###'],
    buildingNumber: ['###', '##', '#'],
    direction: ['Norte', 'Sul', 'Este', 'Oeste', 'Nordeste', 'Noroeste', 'Sudeste', 'Sudoeste'],
    streetSuffix: [
      'Rua', 'Avenida', 'Praça', 'Travessa', 'Alameda', 'Largo', 'Estrada', 'Calçada', 'Beco',
      'Rodovia', 'Via', 'Ladeira', 'Viela', 'Marginal', 'Parque',
    ],
  },
  company: {
    name: [
      'LusoTech', 'PortoSoft', 'GlobalLuso', 'DataBrasil', 'InovaPortugal', 'SoluDigital',
      'NovaTech', 'FuturoSoft', 'SistemaSmart', 'CoreTech Lisboa', 'AtlânticoTech', 'IbériaSoft',
    ],
    suffix: ['S.A.', 'Lda.', 'Unipessoal Lda.', 'Technologies', 'Solutions', 'Systems', 'Group'],
    industry: [
      'Tecnologia', 'Finanças', 'Saúde', 'Educação', 'Comércio', 'Manufatura', 'Telecomunicações',
      'Energia', 'Imobiliário', 'Transportes', 'Media', 'Hospitalidade', 'Turismo', 'Agricultura',
    ],
    buzzwords: [
      'sinergizar', 'aproveitar', 'inovar', 'revolucionar', 'otimizar', 'transformar',
      'potencializar', 'habilitar', 'facilitar', 'orquestrar', 'integrar', 'digitalizar',
    ],
    adjective: [
      'revolucionário', 'inovador', 'avançado', 'líder', 'premium', 'empresarial',
      'escalável', 'robusto', 'ágil', 'seguro', 'eficiente', 'inteligente', 'moderno',
    ],
    descriptor: [
      'global', 'digital', 'em nuvem', 'com IA', 'baseado em dados', 'centrado no usuário',
      'automatizado', 'integrado', 'conectado', 'inteligente', 'personalizado', 'sustentável',
    ],
    noun: [
      'solução', 'plataforma', 'sistema', 'serviço', 'tecnologia', 'framework', 'infraestrutura',
      'aplicação', 'rede', 'portal', 'ecossistema', 'arquitetura', 'motor',
    ],
  },
  internet: {
    domainSuffix: ['pt', 'com', 'net', 'org', 'br', 'eu', 'info'],
    freeEmail: ['gmail.com', 'sapo.pt', 'hotmail.com', 'outlook.pt', 'yahoo.com.br', 'uol.com.br', 'bol.com.br'],
  },
  phone: {
    formats: [
      '2## ### ###',
      '+351 2## ### ###',
      '9## ### ###',
      '+351 9## ### ###',
      '(##) ####-####',
      '+55 (##) ####-####',
      '+55 (##) #####-####',
    ],
  },
}
