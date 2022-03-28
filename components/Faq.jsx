import React from 'react'
import { Transition, Disclosure } from '@headlessui/react'


export default function Faq() {
    const questions = [
        {
            id: 1,
            question: 'What is StableCoin?',
            answer: 'A stablecoin is a type of cryptocurrency whose value is tied to an outside asset, such as the U.S. dollar or gold, to stabilize the price.'

        },
        {
            id: 2,
            question: 'What is MONT?',
            answer: 'MONT is a Mongol Tugrik pegged/tethered stablecoin.'

        },
        {
            id: 3,
            question: 'Which blockchain platform supports MONT?',
            answer: 'Currently MONT is available on Binance Smart Chain and Ethereum blockchain networks. Soon it will be available on Solana and Cardano.'

        },
        {
            id: 4,
            question: 'How much is MONT worth?',
            answer: 'Since MONT is pegged to Mongolian Tugrik it will always have a 1:1 ratio of worth meaning each MONT will have equal value of MNT bank reserves.'

        },
        {
            id: 5,
            question: 'How can I buy MONT?',
            answer: 'You can buy MONT through crypto exchanges. We are working tirelessly to list MONT on all major crypto exchanges in Mongolia. International listing will begin from 2022.'

        },
        {
            id: 6,
            question: 'How can I transfer MONT?',
            answer: 'You can transfer MONT via your wallet on the crypto exchanges. Always check if you’re using the correct network for the transfer to prevent loss of funds. (BEP, ERC, etc.)'

        },
        {
            id: 7,
            question: 'Why MONT?',
            answer: 'MONT is the safest stablecoin for Mongolian users when it comes to crypto trading. MONT smart contract was audited by international blockchain audit company Certik to certify the stability and security of the stablecoin. For more information, please view our Whitepaper.'

        },

    ]
    const questions_mongolian = [
        {
            id: 1,
            question: 'StableCoin гэж юу вэ?',
            answer: 'Stablecoin нь доллар болон алт гэх мэт гадаад үнэ ханштай харьцуулан үнэ цэнийг тэнцвэржүүлэхэд шууд холбоотой криптовальютын нэг төрөл юм.'

        },
        {
            id: 2,
            question: 'MONT гэж юу вэ?',
            answer: 'MONT нь бэхжүүлсэн/тэнцвэржүүлсэн Монгол төгрөгийн stablecoin юм.'

        },
        {
            id: 3,
            question: 'Аль блокчейны платформ дээр MONT байгаа вэ?',
            answer: 'Currently MONT is available on Binance Smart Chain and Ethereum blockchain networks. Soon it will be available on Solana and Cardano.'

        },
        {
            id: 4,
            question: 'How much is MONT worth?',
            answer: 'Since MONT is pegged to Mongolian Tugrik it will always have a 1:1 ratio of worth meaning each MONT will have equal value of MNT bank reserves.'

        },
        {
            id: 5,
            question: 'How can I buy MONT?',
            answer: 'You can buy MONT through crypto exchanges. We are working tirelessly to list MONT on all major crypto exchanges in Mongolia. International listing will begin from 2022.'

        },
        {
            id: 6,
            question: 'How can I transfer MONT?',
            answer: 'You can transfer MONT via your wallet on the crypto exchanges. Always check if you’re using the correct network for the transfer to prevent loss of funds. (BEP, ERC, etc.)'

        },
        {
            id: 7,
            question: 'Why MONT?',
            answer: 'MONT is the safest stablecoin for Mongolian users when it comes to crypto trading. MONT smart contract was audited by international blockchain audit company Certik to certify the stability and security of the stablecoin. For more information, please view our Whitepaper.'

        },
    ]

    const accordians = questions.map(question => {
        return (
            <div key={question.id} className="lg:mx-20">
                {/* <div onClick={()=>showAnswer(question.id)} className=" cursor-pointer flex transition duration-100 ease-in-out items-center justify-between hover:bg-[#ecf0f1] rounded-lg p-5">
                    <p className="font-bold text-xl">{question.question}</p>
                    <i className="bi bi-chevron-down"></i>
                </div>
               
                <Transition
                show={isOpen === question.id}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="p-5 rounded-lg"
                >
                    <p>
                        {question.answer}
                    </p>
                </Transition> */}
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex transition duration-100 w-full ease-in-out text-left items-center justify-between hover:bg-[#ecf0f1] rounded-lg font-bold text-lg p-5">
                                <span>{question.question}</span>
                                <i className={`${open ? "rotate-0" : 'rotate-180'} bi bi-chevron-up`}></i>

                            </Disclosure.Button>
                            <Transition
                                enter="transition -translate-y-15 duration-500 ease-in-out"
                                enterFrom="transform opacity-0"
                                enterTo="transform translate-y-0 scale-100 opacity-100"
                                leave="transition duration-300 ease-in-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform opacity-0"
                            >
                                <Disclosure.Panel className="p-5 text-[#374151] rounded-lg">
                                    {question.answer}
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        )
    })

    return (
        <div>
            <h1 className="font-bold text-3xl text-blue-500 text-center">FAQ</h1>
            {accordians}
        </div>
    )
}



