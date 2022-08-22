import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux"
import {
    ChevronRightIcon,
    ChevronDownIcon,
    MailIcon,
} from "@heroicons/react/solid";
import LoadingFullWidth from "components/loaders/LoadingFullWidth";
import {Navigate} from 'react-router-dom'
import { loginWeb3 } from "redux/actions/web3";

function Connect({ loading, loginWeb3, account, my_user }) {
    if (my_user) {
        return <Navigate to="/" />;
    }
    return (
        <FullWidthLayout>
            <div className="text-center">
                <p className="mt-8 text-xl font-gilroy-bold dark:text-dark-txt text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
                    Login con Web3
                </p>
                <p className="max-w-xl my-5 mx-auto text-xl dark:text-dark-txt text-gray-500">
                    Conecte con uno de nuestros proveedores de billeteras.
                </p>
            </div>

            {!loading ? (
                <div className="bg-white dark:bg-dark-main hover:dark:bg-dark-second hover:bg-gray-50 shadow overflow-hidden sm:rounded-md">
                    <ul role="list" className="divide-y divide-gray-200">
                        <li>
                            <div
                                onClick={() => {
                                    loginWeb3();
                                }}
                                className="block  transition duration-300 ease-in-out cursor-pointer"
                            >
                                <div className="flex items-center px-4 py-4 sm:px-6">
                                    <div className="min-w-0 flex-1 flex items-center">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-12 w-12 rounded-full"
                                                src="https://bafybeig2busro4zb47v54tvsfrm65k7342e5pojww26ys2bi2msxhf6ei4.ipfs.dweb.link/metamask-2728406-2261817.webp"
                                                alt=""
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                            <div>
                                                <p className="text-sm font-medium dark:text-dark-txt text-gray-800 truncate">
                                                    Metamask
                                                </p>
                                            </div>
                                            <div className="hidden md:block">
                                                <div>
                                                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                                        Popular
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <ChevronRightIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            ) : (
                <LoadingFullWidth />
            )}
            <br />
        </FullWidthLayout>
    );
}

const mapStateToProps = (state) => ({
    loading: state.web3.loading,
    account: state.web3.account,
    my_user: state.user.my_user,
});

export default connect(mapStateToProps, {
    loginWeb3,
})(Connect);