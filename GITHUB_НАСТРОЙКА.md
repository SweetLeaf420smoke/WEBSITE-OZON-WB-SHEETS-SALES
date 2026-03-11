# Настройка GitHub для заливки сайта

## Уже готово
- **Git** установлен, в конфиге: `SweetLeaf420smoke`, `bank@ya.ru`.

---

## Вариант А: через GitHub CLI (удобно потом)

**Шаг 1.** Один раз дать права Homebrew (выполни в терминале на своём Mac):
```bash
sudo chown -R $(whoami) /Users/sick/Library/Logs/Homebrew /opt/homebrew
```
Введи пароль от Mac, если спросит.

**Шаг 2.** Установить GitHub CLI:
```bash
brew install gh
```

**Шаг 3.** Войти в GitHub (откроется браузер):
```bash
gh auth login
```
- Выбери **GitHub.com**
- **HTTPS**
- **Login with a web browser** → скопируй код → вставь в браузере, войди под **SweetLeaf420smoke**.

После этого агент сможет делать `gh repo create` и `git push` за тебя.

---

## Вариант Б: без gh (только Git)

**Шаг 1.** Создать репозиторий вручную:
- Открой https://github.com/new
- Repository name: `WEBSITE-OZON-WB-SHEETS-SALES` (или другое имя)
- Public, **не** добавляй README / .gitignore
- Create repository

**Шаг 2.** В папке проекта (когда агент сделает `git init` и первый коммит) выполни:
```bash
cd "/Users/sick/Documents/Cursor/WEBSITE OZON WB SHEETS SALES"
git remote add origin https://github.com/SweetLeaf420smoke/WEBSITE-OZON-WB-SHEETS-SALES.git
git push -u origin main
```
При первом `git push` браузер или система запросят вход в GitHub — войди под SweetLeaf420smoke.

---

Выбери А или Б и напиши, что сделал — продолжим следующий шаг.
