* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #f4f7f5;
  color: #111;
  line-height: 1.6;
}

.hero {
  min-height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
              url("https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=80");
  background-size: cover;
  background-position: center;
  color: white;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 8%;
}

nav h2 {
  color: #9cff38;
  font-size: 28px;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
  font-weight: bold;
}

nav a:hover {
  color: #9cff38;
}

.hero-content {
  max-width: 700px;
  padding: 140px 8%;
}

.hero-content h1 {
  font-size: 58px;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 20px;
  margin-bottom: 30px;
}

button {
  background: #9cff38;
  color: #111;
  border: none;
  padding: 14px 24px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: white;
  transform: scale(1.05);
}

.section {
  padding: 80px 8%;
}

.section h2 {
  font-size: 38px;
  text-align: center;
  margin-bottom: 20px;
}

.section-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: 18px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.08);
  border-top: 6px solid #9cff38;
}

.card h3 {
  margin-bottom: 12px;
  font-size: 23px;
}

.dark {
  background: #111;
  color: white;
}

.timeline {
  display: grid;
  gap: 25px;
  margin-top: 40px;
}

.timeline div {
  background: #1d1d1d;
  padding: 25px;
  border-left: 6px solid #9cff38;
  border-radius: 12px;
}

.injury-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.injury-box {
  background: white;
  padding: 25px;
  border-radius: 18px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.08);
}

.injury-box h3 {
  color: #2e7d32;
  margin-bottom: 10px;
}

.injury-box span {
  display: block;
  margin-top: 12px;
  font-weight: bold;
  color: #333;
}

.exercise-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 18px;
  margin-top: 40px;
}

.exercise-list div {
  background: #9cff38;
  color: #111;
  padding: 18px;
  border-radius: 15px;
  text-align: center;
  font-weight: bold;
}

.checklist {
  max-width: 800px;
  margin: auto;
}

.checklist label {
  display: block;
  background: white;
  padding: 18px;
  margin: 12px 0;
  border-radius: 12px;
  box-shadow: 0 5px 12px rgba(0,0,0,0.06);
  font-size: 18px;
}

.checklist input {
  margin-right: 12px;
  transform: scale(1.2);
}

#result {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

footer {
  background: #111;
  color: white;
  text-align: center;
  padding: 25px;
}

@media (max-width: 700px) {
  nav {
    flex-direction: column;
    gap: 15px;
  }

  nav a {
    margin: 8px;
  }

  .hero-content h1 {
    font-size: 40px;
  }
}
