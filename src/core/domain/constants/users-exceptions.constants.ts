export const NOT_FOUND = {
  typeError: 'Resource_not_found',
  error: 'Usuario nao encontrado',
};

export const BAD_REQUEST = {
  typeError: 'Bad_Request_Error',
  error: 'Parametro ou campo invalido',
};

export const UNAUTHORIZED = {
  typeError: 'Unauthorized',
  error: 'Email ou senha incorretos',
};

export const CONFLICT = {
  typeError: 'Conflict_data',
  error: 'Nao foi possivel processar a request por conflito nos dados',
};

export const PRE_CONDITION_ERROR = {
  typeError: 'Precondition Failed',
  error: 'Problema em processar requisicao por erro na pre-condicao',
};

export const FORBIDDEN = {
  typeError: 'Forbidden',
  error: 'Usuario sem acesso ao recurso',
};
