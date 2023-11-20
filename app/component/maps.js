export default function Maps() {
    return (
        <>
            <div className="relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3952.097481255457!2d112.5532127!3d-7.8848693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7881243319e865%3A0x2fa069cbb216a70b!2sBanyu%20Rancang%20Rafting!5e0!3m2!1sen!2sid!4v1698404785268!5m2!1sen!2sid"
                    allowFullScreen
                    className="border-0 w-full h-screen"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                <img
                    src="/photo5.jpg"
                    className="w-1/2 md:w-1/4 h-auto absolute right-20 bottom-10 md:right-64 md:bottom-10 rounded-sm"
                />
                <img
                    src="/photo6.jpg"
                    className="w-1/2 md:w-1/4 h-auto absolute top-32 right-10 md:right-28 md:top-10 rounded-sm"
                />
                <img
                    src="/photo7.jpg"
                    className="w-1/2 md:w-1/4 h-auto absolute left-10 bottom-60 md:bottom-24 rounded-sm"
                />
            </div>
        </>
    );
}
