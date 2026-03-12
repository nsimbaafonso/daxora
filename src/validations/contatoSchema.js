import * as yup from "yup";

export const contatoSchema = yup.object({
  nome: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter pelo menos 3 caracteres"),

  email: yup
    .string()
    .email("Email inválido")
    .required("O email é obrigatório"),

  assunto: yup
    .string()
    .required("O assunto é obrigatório")
    .min(3, "O assunto deve ter pelo menos 3 caracteres"),

  mensagem: yup
    .string()
    .required("A mensagem é obrigatória")
    .min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});