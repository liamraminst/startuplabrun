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
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.65)),
              url("https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&w=1600&q=80");
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
  margin-left: 18px;
  font-weight: bold;
}

nav a:hover {
  color: #9cff38;
}

.hero-content {
  max-width: 760px;
  padding: 140px 8%;
}

.hero-content h1 {
  font-size: 62px;
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
  max-width: 750px;
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

.atlanta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 40px;
}

.atlanta-card {
  min-height: 270px;
  border-radius: 20px;
  padding: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 24px rgba(0,0,0,0.18);
}

.atlanta-card h3 {
  font-size: 25px;
  margin-bottom: 10px;
}

.beltline {
  background-image: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.78)),
  url("https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?auto=format&fit=crop&w=900&q=80");
}

.piedmont {
  background-image: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.78)),
  url("https://images.unsplash.com/photo-1601397219552-43f1c7a7397f?auto=format&fit=crop&w=900&q=80");
}

.midtown {
  background-image: linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.78)),
  url("https://images.unsplash.com/photo-1612899326681-6650899c743e?auto=format&fit=crop&w=900&q=80");
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

.shoe-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 35px;
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 18px rgba(0,0,0,0.08);
}

.shoe-table th {
  background: #111;
  color: #9cff38;
  padding: 16px;
  text-align: left;
}

.shoe-table td {
  padding: 16px;
  border-bottom: 1px solid #ddd;
}

.shoe-table tr:hover {
  background: #f1ffe7;
}

.price {
  font-weight: bold;
  color: #2e7d32;
}

.shoe-note {
  margin-top: 20px;
  font-size: 15px;
  color: #444;
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
    display: inline-block;
  }

  .hero-content h1 {
    font-size: 42px;
  }

  .shoe-table {
    font-size: 13px;
  }

  .shoe-table th,
  .shoe-table td {
    padding: 10px;
  }
}
