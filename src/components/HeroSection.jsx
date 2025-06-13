export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-32">
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Ẩm thực Việt đậm đà</span>{' '}
              <span className="block text-red-600 xl:inline">giữa lòng Canada</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              Trải nghiệm những món ăn truyền thống được chế biến tinh tế bởi đầu bếp hàng đầu tại Hương Lan.
            </p>
            <div className="mt-5 sm:mt-8 flex justify-center gap-4">
              <a
                href="#menu"
                className="rounded-md bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700"
              >
                Xem thực đơn
              </a>
              <a
                href="#booking"
                className="rounded-md border border-red-600 px-8 py-3 text-base font-medium text-red-600 hover:bg-red-50"
              >
                Đặt bàn ngay
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
