import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const navigation = {
    solutions: [
        { name: "Cursos", href: "/cursos" },
        { name: "Academias", href: "/academias" },
        { name: "Tienda", href: "/tienda" },
        // { name: 'Desarrollo Web', href: '/servicios/desarrollo_web' },
    ],
    support: [
        // { name: 'Guias', href: '/guias' },
        { name: "Ayuda", href: "/ayuda" },
        { name: "Blog", href: "/blog" },
    ],
    company: [
        { name: "Nosotros", href: "/nosotros" },
        { name: "Contacto", href: "/contacto" },
    ],
    legal: [
        { name: "Terminos", href: "/terminos" },
        { name: "Privacidad", href: "/privacidad" },
    ],
    social: [
        {
            name: "GitHub",
            href: "https://github.com/apholdings",
            icon: (props) => <i className="bx bxl-github text-2xl"></i>,
        },
        {
            name: "YouTube",
            href: "https://youtube.com/solopython",
            icon: (props) => <i className="bx bxl-youtube text-2xl"></i>,
        },
    ],
};

function Footer() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
    });
    const { email } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const formData = new FormData();
        formData.append("email", email);

        const fetchData = async () => {
            setLoading(true);
            axios
                .post(
                    `${process.env.REACT_APP_API_URL}/api/contacts/newsletter`,
                    formData,
                    config
                )
                .then((res) => {
                    setLoading(false);
                    setFormData({ ...formData, email: "" });
                })
                .catch((err) => {
                    setLoading(false);
                });
        };

        fetchData();
    };

    return (
        <footer className="" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-gilroy-semibold text-gray-400 dark:text-dark-txt tracking-wider uppercase">
                                    Servicios
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <NavLink
                                                to={item.href}
                                                className="text-base text-gray-400 hover:text-gray-500 font-gilroy-regular"
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-gilroy-semibold text-gray-400 dark:text-dark-txt tracking-wider uppercase">
                                    Soporte
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <NavLink
                                                to={item.href}
                                                className="text-base text-gray-400 hover:text-gray-500 font-gilroy-regular"
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-gilroy-semibold text-gray-400 dark:text-dark-txt tracking-wider uppercase">
                                    Empresa
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <NavLink
                                                to={item.href}
                                                className="text-base text-gray-400 hover:text-gray-500 font-gilroy-regular"
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-gilroy-semibold text-gray-400 dark:text-dark-txt tracking-wider uppercase">
                                    Legal
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <NavLink
                                                to={item.href}
                                                className="text-base text-gray-400 hover:text-gray-500 font-gilroy-regular"
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 xl:mt-0">
                        <h3 className="text-sm font-gilroy-semibold text-gray-400 dark:text-dark-txt tracking-wider uppercase">
                            Bonos de Descuento y Entrenamiento Gratis!
                        </h3>
                        <p className="mt-4 text-base text-gray-400">
                            Reciibe descuentos y entrenamiento gratis!
                        </p>
                        <form
                            onSubmit={(e) => onSubmit(e)}
                            className="mt-4 sm:flex sm:max-w-md"
                        >
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => onChange(e)}
                                autoComplete="email"
                                required
                                className="appearance-none min-w-0 w-full font-gilroy-medium bg-white border border-gray-300 rounded-xl shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400"
                                placeholder="Correo Electronico"
                            />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                {loading ? (
                                    <div className="cursor-default inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-base font-gilroy-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Cargando
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        className="inline-flex w-full justify-center items-center px-4 py-2 border border-transparent text-base font-gilroy-medium rounded-xl text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Suscribirme
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-dark-second pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        {navigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                className="text-gray-400 hover:text-gray-400"
                            >
                                <span className="sr-only">{item.name}</span>
                                <item.icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </a>
                        ))}
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; 2020 SoloPython DAO. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
