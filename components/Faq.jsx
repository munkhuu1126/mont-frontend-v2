import React from 'react'
import { Transition, Disclosure } from '@headlessui/react'
import { useTranslation } from 'react-i18next'


export default function Faq() {
    const questions = [
        {
            id: 1,
            question: 'what_is_stable_coin',
            answer: "answer1"

        },
        {
            id: 2,
            question: 'what_is_mont',
            answer: 'answer2'

        },
        {
            id: 3,
            question: 'which_blockchain_platform',
            answer: 'answer3'

        },
        {
            id: 4,
            question: 'how_much_is_mont_worth',
            answer: 'answer4'

        },
        {
            id: 5,
            question: 'how_can_i_buy',
            answer: 'answer5'

        },
        {
            id: 6,
            question: 'how_can_i_transfer',
            answer: 'answer6'

        },
        {
            id: 7,
            question: 'why_mont',
            answer: 'answer7'

        },

    ]
    const {t} = useTranslation()

    const accordians = questions.map(question => {
        return (
            <div key={question.id} className="lg:mx-20">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex transition duration-100 w-full ease-in-out text-left items-center justify-between hover:bg-[#ecf0f1] rounded-lg font-bold text-lg p-5">
                                <span>{t(question.question)}</span>
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
                                    {t(question.answer)}
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        )
    })

    return (
        <div id='faq'>
            <h1  className="font-bold text-3xl text-blue-500 text-center">{t('faq')}</h1>
            {accordians}

        </div>
    )
}



