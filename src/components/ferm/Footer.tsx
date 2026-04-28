import { Phone, Mail, Globe, Facebook, Instagram, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="text-3xl font-extrabold">
              <span className="text-primary">FERM</span>
            </div>
            <p className="mt-3 text-sm text-white/70">Агроплатформа. Оренда спецтехніки по всій Україні.</p>
          </div>
          <div>
            <h4 className="font-bold text-accent">Контакти</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="tel:0800750707" className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" /> 0 800 75 07 07</a></li>
              <li><a href="mailto:sales@ferm.in.ua" className="flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> sales@ferm.in.ua</a></li>
              <li><a href="https://ferm.in.ua" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white"><Globe className="h-4 w-4" /> ferm.in.ua</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-accent">Розділи</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#catalog" className="hover:text-white">Каталог техніки</a></li>
              <li><a href="#zayavka" className="hover:text-white">Залишити заявку</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-accent">Соцмережі</h4>
            <div className="mt-3 flex gap-3">
              <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-accent-foreground"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-accent-foreground"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Telegram" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-accent-foreground"><Send className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © 2026 FERM. Агроплатформа. Всі права захищені.
        </div>
      </div>
    </footer>
  );
}
