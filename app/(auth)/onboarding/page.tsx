async function Page() {
    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">Onboading</h1>
            <p className="mt-3 text-base-regular text-light-2">
                Complete your profile to get started with 🍞! 
            </p>
            <section className="mt-9 bg-dark-2 p-10">
                <AccountProfile>
                    
                </AccountProfile>
            </section>
        </main>
    )
}

export default Page;