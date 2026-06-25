import { useState } from 'react';
import Icon from '@/components/ui/icon';

type Vacancy = {
  title: string;
  category: string;
  salary: string;
  location: string;
  schedule: string;
  employment: string;
  experience: string;
  hot?: boolean;
};

const categories = [
  'Все',
  'С гостями',
  'В эксплуатации',
  'На пляже',
  'Питание',
  'В офисе',
  'В медцентре',
  'Горящие',
];

const vacancies: Vacancy[] = [
  {
    title: 'Администратор ресепшен',
    category: 'С гостями',
    salary: '60 000 — 80 000 ₽',
    location: 'Имеретинский квартал',
    schedule: 'Сменный график',
    employment: 'Полная занятость',
    experience: 'Опыт от 1 года',
    hot: true,
  },
  {
    title: 'Администратор пункта велопроката',
    category: 'С гостями',
    salary: 'от 63 495 до 67 728 ₽',
    location: 'Набережная',
    schedule: 'График 2/2',
    employment: 'Полная занятость',
    experience: 'Опыт от 1 года',
  },
  {
    title: 'Бухгалтер по учёту ТМЦ',
    category: 'В офисе',
    salary: '101 700 ₽ на руки',
    location: 'Офис, Сириус',
    schedule: '5/2, с 9:00 до 18:00',
    employment: 'Полная занятость',
    experience: 'Опыт от 3 лет',
  },
  {
    title: 'Спасатель на пляже',
    category: 'На пляже',
    salary: '70 000 — 90 000 ₽',
    location: 'Пляжная зона',
    schedule: 'Сменный график',
    employment: 'Сезонная работа',
    experience: 'Сертификат спасателя',
    hot: true,
  },
  {
    title: 'Повар горячего цеха',
    category: 'Питание',
    salary: '85 000 — 110 000 ₽',
    location: 'Ресторан «Морской»',
    schedule: 'График 3/3',
    employment: 'Полная занятость',
    experience: 'Опыт от 2 лет',
  },
  {
    title: 'Инженер по эксплуатации зданий',
    category: 'В эксплуатации',
    salary: 'от 90 000 ₽',
    location: 'Техническая служба',
    schedule: '5/2, с 8:00 до 17:00',
    employment: 'Полная занятость',
    experience: 'Опыт от 3 лет',
  },
  {
    title: 'Медицинская сестра',
    category: 'В медцентре',
    salary: '75 000 — 95 000 ₽',
    location: 'Медицинский центр',
    schedule: 'Сменный график',
    employment: 'Полная занятость',
    experience: 'Опыт от 1 года',
  },
  {
    title: 'Хостес ресторана',
    category: 'С гостями',
    salary: '55 000 — 70 000 ₽',
    location: 'Лобби-бар',
    schedule: 'График 2/2',
    employment: 'Полная занятость',
    experience: 'Без опыта',
  },
];

const Index = () => {
  const [active, setActive] = useState('Все');

  const filtered = vacancies.filter((v) => {
    if (active === 'Все') return true;
    if (active === 'Горящие') return v.hot;
    return v.category === active;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary to-[hsl(207,90%,38%)] text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="container relative py-16 md:py-24">
          <div className="flex items-center gap-2 text-sm text-white/70 mb-6 font-medium">
            <span>Карьера</span>
            <Icon name="ChevronRight" size={14} />
            <span className="text-white">Вакансии</span>
          </div>
          <p className="font-display font-semibold tracking-widest uppercase text-white/70 text-sm mb-4">
            Город-отель «Бархатные сезоны» · Сириус
          </p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl tracking-tight mb-6">
            Вакансии
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Присоединяйтесь к команде у самого моря. Открыто {vacancies.length} позиций в разных направлениях.
          </p>
        </div>
      </header>

      <main className="container py-12 md:py-16">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium font-display transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'bg-white text-muted-foreground border border-border hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat === 'Горящие' && <Icon name="Flame" size={14} className="inline mr-1.5 -mt-0.5" />}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Vacancy cards */}
        <div className="grid gap-4">
          {filtered.map((v, i) => (
            <article
              key={v.title}
              className="group relative bg-card rounded-2xl border border-border p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 animate-fade-in opacity-0"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left: title + salary */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    {v.hot && (
                      <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                        <Icon name="Flame" size={12} /> Горящая
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                      <Icon name="MapPin" size={12} /> {v.location}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-foreground mb-1 transition-colors group-hover:text-primary">
                    {v.title}
                  </h2>
                  <p className="text-lg font-semibold text-primary mb-2">{v.salary}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-sm text-primary/70 hover:text-primary transition-colors">
                    Подробнее <Icon name="ArrowRight" size={14} />
                  </a>
                </div>

                {/* Middle: meta */}
                <div className="flex flex-col gap-2.5 lg:w-64 shrink-0">
                  <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Icon name="CalendarDays" size={16} className="text-primary/70 shrink-0" />
                    <span>{v.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="text-primary/70 shrink-0" />
                    <span>{v.employment}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Icon name="Briefcase" size={16} className="text-primary/70 shrink-0" />
                    <span>{v.experience}</span>
                  </div>
                </div>

                {/* Right: action */}
                <div className="shrink-0">
                  <button className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
                    Откликнуться
                    <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <Icon name="SearchX" size={48} className="mx-auto mb-4 opacity-40" />
            <p className="font-display text-lg">В этой категории пока нет вакансий</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;