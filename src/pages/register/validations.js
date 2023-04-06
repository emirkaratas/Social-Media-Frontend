import * as yup from 'yup'

const validations = yup.object().shape({
    email: yup
        .string()
        .email("Geçerli Bir Mail Giriniz")
        .required("Zorunlu Bir Alan"),
    password: yup
        .string()
        .min(6, "Parolanız En Az 6 Karakter Olmalıdır")
        .required("Zorunlu Bir Alan")
        .matches(
            /^(?=.*[A-Z])/,
            "Büyük Harf İçermelidir"
        )
        .matches(
            /^(?=.*[a-z])/,
            "Küçük Harf İçermelidir"
        )
        .matches(
            /^(?=.*[0-9])/,
            "Rakam İçermelidir"
        )
        .matches(
            /^(?=.*[!@#\$%\^&\*])/,
            "Özel Karakter İçermelidir"
        )
    ,
    passwordConfirm: yup
        .string()
        .required("Zorunlu Bir Alan")
        .oneOf([yup.ref("password")], "Parolalar Aynı Değil!"),
    nameSurname: yup
        .string()
        .required("Zorunlu Bir Alan"),
    username: yup
        .string()
        .required("Zorunlu Bir Alan"),
})

export default validations;