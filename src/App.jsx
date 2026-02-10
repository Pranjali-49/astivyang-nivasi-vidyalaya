import { useEffect } from "react";
import heroImage from "./assets/school.jpeg";

export default function SchoolWebsite() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    document.body.style.backgroundColor = "#f6f8fb";
    document.body.style.color = "#1f2937";
  }, []);

  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "20px 20px",
  };

  const cardStyle = {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  };

  const sectionWrapper = (gradient) => ({
  background: gradient,
  padding: "70px 20px",
  });

  const sectionCard = {
  maxWidth: "1100px",
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: "24px",
  padding: "50px",
  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
          backgroundImage: `linear-gradient(rgba(15,23,42,0.6), rgba(15,23,42,0.6)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "750px",
            background: "rgba(255,255,255,0.12)",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <h1 style={{ fontSize: "44px", marginBottom: "16px" }}>
            Astivyang Nivasi Vidyalaya
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "20px" }}>
            Empowering Abilities • Nurturing Confidence • Building Independent Futures
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
            Astivyang Nivasi Vidyalaya is a dedicated educational institution for children with special needs, providing a safe, inclusive, and supportive environment for learning and growth.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section style={sectionWrapper(
        "linear-gradient(135deg, #eef2ff, #f8fafc)"
      )}>
      <div style={sectionCard}>
        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
          About the School
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px", color: "#374151" }}>
          Astivyang Nivasi Vidyalaya is a special school committed to the education, rehabilitation, 
          and overall development of children with disabilities. The school provides structured academic 
          learning from 1st to 7th standard, along with rehabilitation support and life-skills training 
          that encourages independence, confidence, and self-reliance.        
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px", color: "#374151" }}>
          Our teaching and rehabilitation approach focuses on understanding each child’s individual 
          abilities and needs. Through personalized learning, therapeutic support, patience, care, 
          and continuous encouragement, we help students progress at their own pace and build the skills 
          required for a meaningful and dignified life.        
        </p>
        </div>
      </section>
       {/* STAFF */}
      <section style={sectionWrapper(
        "linear-gradient(135deg, #f1f5f9, #ffffff)"
      )}>
      <div style={sectionCard}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>School Committee and Staff</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {[{
            name: "Shri. Haribhau Telang",
            role: "Founder and Secretary",
            note: "Visionary leadership and long-term guidance",
          },
          {
            name: "Shri. Namdev Lengure",
            role: "President",
            note: "Administrative oversight and policy direction",
          },
          {
            name: "Shri. Kacharu Durge",
            role: "Headmaster",
            note: "Academic leadership and student welfare",
          },
          {
            name: "Smt. Rajashree Kottawar",
            role: "Assistant Teacher",
            note: "Inclusive classroom support",
          },
          {
            name: "Dr. Girdhari Tagade",
            role: "Physiotherapist",
            note: "Physical development and rehabilitation",
          },
          {
            name: "Shri. Jahid Ansari",
            role: "Superintendent",
            note: "Hostel care and daily management",
          }].map((person, i) => (
            <div key={i} style={cardStyle}>
              <h3 style={{ textAlign: "center", marginBottom: "8px" }}>
                {person.name}
              </h3>
              <p
                style={{
                  textAlign: "center",
                  color: "#4f46e5",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {person.role}
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#6b7280",
                  lineHeight: "1.6",
                }}
              >
                {person.note}
              </p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ACADEMIC PROGRAM */}
      <section style={sectionWrapper(
        "linear-gradient(135deg, #ecfeff, #f0fdf4)"
      )}>
      <div style={sectionCard}>
        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
          Academic Program
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          The school follows a carefully planned academic curriculum for students from Standards 1 to 7, adapted to meet the learning needs of children with special abilities.
        </p>
        <ul style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          <li>Individual attention and personalized teaching methods</li>
          <li>Focus on basic literacy, numeracy, and practical knowledge</li>
          <li>Development of communication, social, and daily living skills</li>
          <li>A calm, structured, and encouraging learning environment</li>
        </ul>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          Our objective is to support both academic learning and emotional development, helping students grow into confident individuals.
        </p>
        </div>
      </section>

      {/* HOSTEL */}
      <section style={sectionWrapper(
        "linear-gradient(135deg, #f0fdfa, #ecfeff)"
      )}>
      <div style={sectionCard}>
        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
          Hostel Facility
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          The school provides a residential hostel facility for students who require accommodation. The hostel ensures a safe, clean, and well-supervised environment with regular meals and daily care.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          Trained staff members ensure that students feel comfortable, secure, and supported in their daily routines.
        </p>
        </div>
      </section>

      {/* DETENTION & CARE CENTER */}
      <section style={sectionWrapper(
        "linear-gradient(135deg, #fff7ed, #fffbeb)"
      )}>
      <div style={sectionCard}>
        <h2 style={{ fontSize: "34px", marginBottom: "20px" }}>
          Early Detection and Early Intervention Centre (DEIC)
        </h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          Early Detection and Early Intervention Centre (DEIC) focuses on diagnosing and treating developmental delays, disabilities, and health conditions in children, typically aged 0–6 years. The centre aims to enhance child development, minimize the impact of disabilities, and provide support through therapy, counseling, and specialized services.        </p>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section style={sectionWrapper(
        "linear-gradient(135deg, #fdf2f8, #fce7f3)"
      )}>
      <div style={sectionCard}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Co-Curricular Activities</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          Students actively participate in arts and crafts, drawing, sports, and group activities that promote creativity, teamwork, and physical well-being.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          These activities play an important role in enhancing confidence, motor skills, and emotional expression.
        </p>
        </div>
      </section>

      {/* FESTIVALS */}
      <section style={sectionWrapper(
        "linear-gradient(135deg, #f8fafc, #eef2ff)"
      )}>
      <div style={sectionCard}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Festivals & Celebrations</h2>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          Astivyang Nivasi Vidyalaya celebrates cultural and national festivals such as Raksha Bandhan, Independence Day, and Republic Day to promote joy, unity, and cultural awareness among students.        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          A special focus is given to Divyang Divas (3rd December), celebrated at the district level with other special schools. The day includes cultural programs and sports activities, where students actively participate and receive prizes and awards for their achievements.        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.7", maxWidth: "900px" }}>
          These celebrations help build confidence, social bonding, and a sense of achievement in every student.        </p>
        </div>  
      </section>


      <section style={sectionWrapper(
        "linear-gradient(135deg, #ecfeff, #e0f2fe)"
      )}>
      <div style={sectionCard}>
        <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>School Gallery</h2>
        <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
    }}
  >
    {[
      "/images/allstudents.jpeg",
      "/images/artcraft.jpeg",
      "/images/drawing.jpeg",
      "/images/food.jpeg",
      "/images/occasion.jpeg",
      "/images/rakshabandhan.jpeg",
      "/images/republicday.jpeg",
      "/images/detention center.jpeg",
      "/images/sports.jpeg",
      "/images/school.jpeg",
      "/images/staff.jpeg",
      "/images/gym equipment.jpeg",
    ].map((src, index) => (
      <div
        key={index}
        style={{
          height: "180px",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={src}
          alt={`School ${index + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.08)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
        }
        />
      </div>
    ))}
  </div>
  </div>
</section>

      {/* CONTACT */}
      <section style={sectionWrapper(
        "linear-gradient(135deg, #f9fafb, #f1f5f9)"
      )}>
      <div style={sectionCard}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>Contact Us</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>📍 Tadala Road, Mul, Dist. Chandrapur, Maharashtra, India</div>
          <div style={cardStyle}>✉️ astivyangniwasividyalaya12@gmail.com</div>
        </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#ffffff",
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Astivyang Nivasi Vidyalaya. All rights reserved.
      </footer>
    </div>
  );
}
