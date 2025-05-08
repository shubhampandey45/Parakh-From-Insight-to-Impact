import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { 
  School, 
  ArrowForward, 
  MenuBook, 
  People, 
  BarChart, 
  Psychology,
  Lightbulb
} from "@mui/icons-material";
import { 
  Button, 
  Card, 
  CardContent, 
  CardHeader, 
  Typography, 
  Container, 
  Grid, 
  Box
} from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "./theme"; // Import from theme.js

// Custom Card components
const FeatureCard = ({ icon, title, description }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
      backgroundColor: theme.palette.mode === 'dark' ? colors.primary[400] : 'white',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      }
    }}>
      <CardHeader
        avatar={
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px',
            borderRadius: '50%',
            backgroundColor: theme.palette.mode === 'dark' ? colors.blueAccent[800] : 'rgba(25, 118, 210, 0.1)',
            marginBottom: '16px'
          }}>
            {React.cloneElement(icon, { 
              sx: { 
                fontSize: '40px', 
                color: theme.palette.mode === 'dark' ? colors.blueAccent[400] : '#1976d2' 
              } 
            })}
          </Box>
        }
        title={<Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>}
        sx={{ textAlign: 'center', padding: '16px 16px 0' }}
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ModuleCard = ({ title, description }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Card sx={{
      height: '100%',
      transition: 'transform 0.3s, box-shadow 0.3s',
      backgroundColor: theme.palette.mode === 'dark' ? colors.primary[400] : 'white',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      }
    }}>
      <CardHeader
        title={<Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>}
        sx={{ textAlign: 'center', padding: '16px 16px 0' }}
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const AIFeatureCard = ({ title, description }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Card sx={{
      height: '100%',
      transition: 'transform 0.3s, box-shadow 0.3s',
      backgroundColor: theme.palette.mode === 'dark' ? colors.primary[400] : 'white',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      }
    }}>
      <CardHeader
        title={<Typography variant="h6" sx={{ fontWeight: 600 }}>{title}</Typography>}
        sx={{ textAlign: 'center', padding: '16px 16px 0' }}
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: theme.palette.mode === 'dark' ? colors.primary[500] : '#fcfcfc',
      color: theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[900]
    }}>
      {/* Header */}
      <Box sx={{
        position: 'sticky',
        top: 0,
        width: '100%',
        backgroundColor: theme.palette.mode === 'dark' ? colors.primary[400] : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? colors.primary[300] : '#e0e0e0'}`,
        zIndex: 100,
      }}>
        <Container>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <School sx={{ fontSize: '24px' }} />
              <Typography variant="h5" sx={{ fontWeight: 700, margin: 0 }}>Parakh</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        {/* Hero Section - Made longer */}
        <Box sx={{
          padding: '72px 0 96px', // Increased padding to make it longer
          background: theme.palette.mode === 'dark' 
            ? `linear-gradient(to bottom, ${colors.primary[500]}, ${colors.primary[600]})`
            : 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
        }}>
          <Container>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} lg={6}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px', // Increased gap
                  justifyContent: 'center',
                }}>
                  <Typography variant="h2" sx={{
                    fontSize: { xs: '2.5rem', sm: '3rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    marginBottom: '24px', // Increased margin
                    color: theme.palette.mode === 'dark' ? colors.grey[100] : '#333',
                  }}>
                    Transform Education with AI-Powered Analytics
                  </Typography>
                  <Typography variant="h6" sx={{
                    fontSize: '1.125rem',
                    color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666',
                    marginBottom: '32px', // Increased margin
                    fontWeight: 400,
                    lineHeight: 1.6, // Improved readability
                  }}>
                    A comprehensive dashboard to monitor, analyze, and enhance the state's educational landscape through
                    data-driven insights and AI-powered recommendations. Parakh brings cutting-edge analytics to support
                    educational decision-making and improve outcomes for students across the region.
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: '16px',
                  }}>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                      <Button 
                        variant="contained" 
                        size="large" 
                        sx={{
                          backgroundColor: theme.palette.mode === 'dark' ? colors.greenAccent[500] : '#1976d2',
                          color: theme.palette.mode === 'dark' ? colors.primary[500] : 'white',
                          '&:hover': {
                            backgroundColor: theme.palette.mode === 'dark' ? colors.greenAccent[400] : '#1565c0',
                          },
                        }}
                        endIcon={<ArrowForward />}
                      >
                        Explore Dashboard
                      </Button>
                    </Link>
                    {/* Added AI Insights button */}
                    <Link to="/aiinsights" style={{ textDecoration: 'none' }}>
                      <Button 
                        variant="outlined" 
                        size="large" 
                        sx={{
                          borderColor: theme.palette.mode === 'dark' ? colors.greenAccent[500] : '#1976d2',
                          color: theme.palette.mode === 'dark' ? colors.greenAccent[500] : '#1976d2',
                          '&:hover': {
                            borderColor: theme.palette.mode === 'dark' ? colors.greenAccent[400] : '#1565c0',
                            backgroundColor: 'rgba(25, 118, 210, 0.04)',
                          },
                        }}
                        endIcon={<Lightbulb />}
                      >
                        AI Insights
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                  <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '12px',
                    background: theme.palette.mode === 'dark'
                      ? `linear-gradient(to right, ${colors.blueAccent[700]}, ${colors.greenAccent[700]})`
                      : 'linear-gradient(to right, #1976d2, #9c27b0)',
                    opacity: 0.2,
                    filter: 'blur(24px)',
                  }}></Box>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Dashboard Preview"
                    sx={{
                      position: 'relative',
                      width: '80%',
                      height: '80%',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      aspectRatio: '1/1',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Features Section */}
        <Box id="features" sx={{
          padding: '64px 0',
          backgroundColor: theme.palette.mode === 'dark' ? colors.primary[500] : '#ffffff',
        }}>
          <Container>
            <Box sx={{
              textAlign: 'center',
              marginBottom: '48px',
            }}>
              <Typography variant="h3" sx={{
                fontSize: '2.25rem',
                fontWeight: 700,
                marginBottom: '16px',
                color: theme.palette.mode === 'dark' ? colors.grey[100] : '#333',
              }}>Key Features</Typography>
              <Typography variant="subtitle1" sx={{
                fontSize: '1.125rem',
                color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666',
                maxWidth: '900px',
                margin: '0 auto',
              }}>
                Our platform addresses core challenges in education through innovative features and analytics
              </Typography>
            </Box>
            
            <Grid container spacing={3} sx={{ marginTop: '32px' }}>
              {[
                {
                  icon: <People />,
                  title: "Role-Based Access",
                  description: "Tailored views for Admins, District Officers, Teachers, and Students/Parents",
                },
                {
                  icon: <BarChart />,
                  title: "Real-Time Analytics",
                  description: "Comprehensive data visualization for informed decision-making",
                },
                {
                  icon: <Psychology />,
                  title: "AI-Powered Insights",
                  description: "Predictive analytics and personalized recommendations",
                },
                {
                  icon: <MenuBook />,
                  title: "Curriculum Tracking",
                  description: "Monitor and optimize educational content delivery",
                },
                {
                  icon: <School />,
                  title: "Resource Allocation",
                  description: "Optimize distribution of educational resources",
                },
                {
                  icon: <People />,
                  title: "Teacher Management",
                  description: "Track availability and optimize deployment",
                },
              ].map((feature, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Modules Section */}
        <Box id="modules" sx={{
          padding: '64px 0',
          backgroundColor: theme.palette.mode === 'dark' ? colors.primary[600] : '#f5f5f5',
        }}>
          <Container>
            <Box sx={{
              textAlign: 'center',
              marginBottom: '48px',
            }}>
              <Typography variant="h3" sx={{
                fontSize: '2.25rem',
                fontWeight: 700,
                marginBottom: '16px',
                color: theme.palette.mode === 'dark' ? colors.grey[100] : '#333',
              }}>Dashboard Modules</Typography>
              <Typography variant="subtitle1" sx={{
                fontSize: '1.125rem',
                color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666',
                maxWidth: '900px',
                margin: '0 auto',
              }}>
                Comprehensive modules to address various aspects of educational management
              </Typography>
            </Box>
            
            <Grid container spacing={3} sx={{ marginTop: '32px' }}>
              {[
                {
                  title: "District Analytics",
                  description: "Track literacy rates, enrollment statistics, and educational outcomes across districts",
                },
                {
                  title: "Infrastructure Status",
                  description: "Monitor school facilities, technology access, and infrastructure needs",
                },
                {
                  title: "Resource Allocation",
                  description: "Visualize and optimize the distribution of educational resources",
                },
                {
                  title: "Curriculum Tracking",
                  description: "Monitor curriculum implementation, identify gaps, and track progress",
                },
                {
                  title: "Teacher Management",
                  description: "Track teacher availability, qualifications, and deployment across schools",
                },
                {
                  title: "Student Performance",
                  description: "Analyze student outcomes, identify at-risk students, and track improvement",
                },
                {
                  title: "School Rankings",
                  description: "Compare schools based on various performance metrics and improvement over time",
                },
                {
                  title: "Feedback Analysis",
                  description: "NLP-powered sentiment analysis of feedback from students, teachers, and parents",
                },
              ].map((module, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <ModuleCard
                    title={module.title}
                    description={module.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* AI Features Section */}
        <Box id="ai-features" sx={{
          padding: '64px 0',
          backgroundColor: theme.palette.mode === 'dark' ? colors.primary[500] : '#ffffff',
        }}>
          <Container>
            <Box sx={{
              textAlign: 'center',
              marginBottom: '48px',
            }}>
              <Typography variant="h3" sx={{
                fontSize: '2.25rem',
                fontWeight: 700,
                marginBottom: '16px',
                color: theme.palette.mode === 'dark' ? colors.grey[100] : '#333',
              }}>AI-Powered Features</Typography>
              <Typography variant="subtitle1" sx={{
                fontSize: '1.125rem',
                color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666',
                maxWidth: '900px',
                margin: '0 auto',
              }}>
                Leveraging artificial intelligence to enhance educational outcomes
              </Typography>
            </Box>
            
            <Grid container spacing={3} sx={{ marginTop: '32px' }}>
              {[
                {
                  title: "Dropout Prediction",
                  description: "AI models to identify students at risk of dropping out for early intervention",
                },
                {
                  title: "Teacher Shortage Forecasting",
                  description: "Predict future teacher needs based on demographic trends and retirement patterns",
                },
                {
                  title: "Curriculum Gap Analysis",
                  description: "Identify gaps in curriculum coverage and suggest improvements",
                },
                {
                  title: "Personalized Learning",
                  description: "AI-powered recommendations for personalized learning paths for students",
                },
                {
                  title: "Resource Optimization",
                  description: "Optimize allocation of limited resources based on needs and impact",
                },
                {
                  title: "Multilingual Support Chatbot",
                  description: "AI-powered chatbot to provide support to students in multiple languages",
                },
              ].map((feature, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <AIFeatureCard
                    title={feature.title}
                    description={feature.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? colors.primary[300] : '#e0e0e0'}`,
        padding: '24px 0',
        backgroundColor: theme.palette.mode === 'dark' ? colors.primary[400] : '#ffffff',
      }}>
        <Container>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            height: { md: '24px' },
          }}>
            <Typography variant="body2" sx={{
              color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666',
              textAlign: { xs: 'center', md: 'left' },
            }}>
              © 2025 Parakh. All rights reserved.
            </Typography>
            <Box sx={{
              display: 'flex',
              gap: '16px',
            }}>
              <Link to="/terms" style={{ 
                fontSize: '14px', 
                color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666', 
                textDecoration: 'none',
                '&:hover': {
                  color: theme.palette.mode === 'dark' ? colors.blueAccent[400] : '#1976d2',
                }
              }}>Terms</Link>
              <Link to="/privacy" style={{ 
                fontSize: '14px', 
                color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666', 
                textDecoration: 'none',
                '&:hover': {
                  color: theme.palette.mode === 'dark' ? colors.blueAccent[400] : '#1976d2',
                }
              }}>Privacy</Link>
              <Link to="/contact" style={{ 
                fontSize: '14px', 
                color: theme.palette.mode === 'dark' ? colors.grey[300] : '#666', 
                textDecoration: 'none',
                '&:hover': {
                  color: theme.palette.mode === 'dark' ? colors.blueAccent[400] : '#1976d2',
                }
              }}>Contact</Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;