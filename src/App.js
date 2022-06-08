import './App.css';
import image from'./avatar.png'

function App() {
  return (
    <div class="bg-white overflow-hidden m-0 lg:m-5">
      <div class="lg:flex">

{/* --------------------------------------------------------- */}

        <div class="lg:shrink-0">
          <img class="h-78 w-full object-cover object-top lg:h-[58rem] lg:w-96 lg:rounded-lg" src={image} alt="" />
        </div>

{/* --------------------------------------------------------- */}

        <div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mx-9 mb-9 mt-9 lg:mt-0 lg:w-[64.5rem]">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Информация</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Моя личная информация.</p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Имя</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Яна Сафронова</dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Возраст</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">19 лет</dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Город проживания</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Москва</dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Желаемый график работы</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">2/2; 5/2</dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Сумма на которую рассчитываю</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">50 000 рублей и больше</dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Желания</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Большое желание развиваться в таких сферах как PR, менеджмент</dd>
                  </div>
                </dl>
              </div>
            </div>







          <h1 className='text-gray-900 text-3xl font-extrabold ml-9'>Навыки и личные качества:</h1>
          <div class="lg:flex">
            <div class="lg:ml-9 mt-5 p-6 lg:w-[20rem] lg:h-[20.5rem] bg-zinc-100 rounded-lg">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Ключевые навыки</div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black">Данные навыки помогают мне в достижении необходимых целей</p>
              <ul class="mt-2 mx-6 text-slate-500 list-disc">
                <li>Умение работать в команде</li>
                <li>Стрессоустойчивость</li>
                <li>Способность к обучению</li>
                <li>Ответственность</li>
                <li>Желание развиваться в новых сферах</li>
                <li>Навыки мерчандайзинга</li>
              </ul>
            </div>
            <div class="lg:ml-9 mt-5 p-8 lg:w-[20rem] lg:h-[24rem] bg-zinc-100 rounded-lg">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Обязанности на рабочих местах</div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black">То что я умею делать</p>
              <p class="mt-2 text-slate-500">Консультирование посетителей по ассортименту в магазине, выполнение продаж, выполнение кросс-продаж, решение конфликтных ситуаций, подготовка отчетов, рассылка сообщений с информацией о новостях и акций компании и бренда</p>
            </div>
            <div class="lg:ml-9 lg:mr-9 mb-5 mt-5 p-8 lg:w-[21rem] lg:h-[22rem] bg-zinc-100 rounded-lg">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">Личные качества</div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black">Качества, которыми я горжусь и улучшаю каждый день</p>
              <ul class="mt-2 mx-6 text-slate-500 list-disc">
                <li>Нацеленность на результат</li>
                <li>Готовность обучаться новому</li>
                <li>Способность к обучению</li>
                <li>Дружелюбность</li>
                <li>Легкообучаемость</li>
                <li>Готовность довести дело до результативного конца</li>
                <li>Вежливость</li>
              </ul>
            </div>
          </div>

{/* --------------------------------------------------------- */}

        </div>
        <div class="lg:shrink-0">
          {/* <img class="h-0 w-0 object-cover object-top md:h-[58rem] md:w-96 md:rounded-lg" src={image} alt="" /> */}
          <div class="h-46 p-8 w-full lg:h-[58rem] lg:w-96 lg:rounded-lg bg-zinc-100">
            <h1 className='text-gray-900 text-2xl font-extrabold mb-9'>Опыт работы:</h1>
            <div className='mb-5'>
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">ООО АРНО</div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black">Розничная торговля,Ювелирные украшения</p>
              <p class="mt-2 text-slate-500">Продавец-консультант-кассир</p>
              <ul class="mt-2 mx-6 text-slate-500 list-disc">
                  <li>Апрель 2021-июль 2021 стажировка</li>
                  <li>Июль 2021-Ноябрь 2021</li>
              </ul>
            </div>
            <div className='border-b-2 border-indigo-500 pb-5'>
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">МОНЕКС ТРЕЙДИНГ</div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black">Розничная торговля,Одежда, Парфюмерия,Нижнее белье</p>
              <p class="mt-2 text-slate-500">Продавец Victoria’s Secret</p>
              <ul class="mt-2 mx-6 text-slate-500 list-disc">
                  <li>Ноябрь 2021-Июнь 2022</li>
              </ul>
            </div>
            <h1 className='text-gray-900 text-2xl font-extrabold mb-9 pt-5'>Предпочитаемые виды связи со мной:</h1>
            <div>
              {/* <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">МОНЕКС ТРЕЙДИНГ</div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black">Розничная торговля,Одежда, Парфюмерия,Нижнее белье</p>
              <p class="mt-2 text-slate-500">Продавец Victoria’s Secret</p> */}
              <ul class="mt-2 mx-6 text-slate-500 list-disc">
                  <li>+7 (903) 141-38-88</li>
                  <li>Yana.safronova2@mail.ru</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
