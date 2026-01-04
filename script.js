// API Platform Mock Data.
const users = [
  {
    id: 'user1',
    name: 'Test User',
    email: 'test.user@bytedance.com',
    xdeId: 'XDE001',
    pcPoints: 150,
    bpPoints: 250,
    completedTraining: true,
    createdAt: new Date('2025-01-15').toISOString(),
    profile: {
      department: 'PDPO',
      position: 'Product Designer',
      joinDate: new Date('2024-06-01').toISOString(),
      trainingCompleted: 100,
      currentLevel: 'Level 3'
    }
  },
  {
    id: 'user2',
    name: 'Alice Smith',
    email: 'alice.smith@bytedance.com',
    xdeId: 'XDE002',
    pcPoints: 200,
    bpPoints: 300,
    completedTraining: true,
    createdAt: new Date('2025-02-20').toISOString(),
    profile: {
      department: 'SPADE',
      position: 'Software Engineer',
      joinDate: new Date('2024-07-15').toISOString(),
      trainingCompleted: 100,
      currentLevel: 'Level 4'
    }
  },
  {
    id: 'user3',
    name: 'Bob Johnson',
    email: 'bob.johnson@bytedance.com',
    xdeId: 'XDE003',
    pcPoints: 50,
    bpPoints: 100,
    completedTraining: false,
    createdAt: new Date('2025-03-10').toISOString(),
    profile: {
      department: 'PDPO',
      position: 'UX Researcher',
      joinDate: new Date('2025-01-01').toISOString(),
      trainingCompleted: 50,
      currentLevel: 'Level 2'
    }
  },
  {
    id: 'user4',
    name: 'Carol Williams',
    email: 'carol.williams@bytedance.com',
    xdeId: 'XDE004',
    pcPoints: 250,
    bpPoints: 400,
    completedTraining: true,
    createdAt: new Date('2025-04-05').toISOString(),
    profile: {
      department: 'SPADE',
      position: 'Product Manager',
      joinDate: new Date('2023-12-01').toISOString(),
      trainingCompleted: 100,
      currentLevel: 'Level 5'
    }
  }
];

// Mock products data with PC points requirement and stock.
const products = [
  {
    id: 'prod1',
    name: 'Sticker Set',
    brand: 'xDE',
    description: 'XDE 主题贴纸套装',
    pcPoints: 20,
    stock: 100,
    imageUrl: 'images/image.png',
    category: 'stationery',
    popularity: 85,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod2',
    name: 'Blink box with soft toy',
    brand: 'ByteDance',
    description: '猫头鹰盲盒毛绒玩具套装',
    pcPoints: 50,
    stock: 400,
    imageUrl: 'images/image (1).png',
    category: 'toys',
    popularity: 95,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod3',
    name: 'Lanyard with ID Sleeve',
    brand: 'xDE',
    description: 'XDE 主题挂绳卡套',
    pcPoints: 25,
    stock: 100,
    imageUrl: 'images/image (2).png',
    category: 'accessories',
    popularity: 75,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod4',
    name: 'Tote Bag',
    brand: 'ByteDance',
    description: 'XDE 主题帆布手提袋',
    pcPoints: 40,
    stock: 100,
    imageUrl: 'images/image (3).png',
    category: 'bags',
    popularity: 90,
    createdAt: new Date('2025-01-01').toISOString()
  },
  {
    id: 'prod5',
    name: 'Premium Travel Cup',
    brand: 'xDE',
    description: '高品质保温杯，XDE 主题设计',
    pcPoints: 45,
    stock: 100,
    imageUrl: 'images/image (4).png',
    category: 'daily',
    popularity: 80,
    createdAt: new Date('2025-01-01').toISOString()
  },
  { id: 'prod6', name: 'Hoodie (Popular)', brand: 'ByteDance', description: 'XDE 主题连帽衫，高品质舒适面料', pcPoints: 80, stock: 100, imageUrl: 'images/img_v3_02t1_cad0b75f-282a-44ab-9e1c-7997b7d188cg.jpg', category: 'clothing', popularity: 100, createdAt: new Date('2025-01-01').toISOString() },
  { id: 'prod7', name: 'Power bank', brand: 'xDE', description: 'XDE 主题移动电源，大容量设计', pcPoints: 60, stock: 100, imageUrl: 'images/44534a32e412180cff401b0c7d865744.jpg', category: 'electronics', popularity: 95, createdAt: new Date('2025-01-01').toISOString() }
];

// Mock orders data.
const orders = [
  {
    id: 'ord-1',
    userId: 'user1',
    productId: 'prod2',
    productName: 'Owl Blind Box Plush',
    pointsSpent: 30,
    status: 'completed',
    createdAt: new Date('2025-03-01').toISOString(),
    shippingAddress: {
      name: 'Test User',
      address: '123 ByteDance Road, Chaoyang District, Beijing',
      phone: '13800138000'
    }
  },
  {
    id: 'ord-2',
    userId: 'user1',
    productId: 'prod1',
    productName: 'XDE Exclusive Stickers',
    pointsSpent: 20,
    status: 'completed',
    createdAt: new Date('2025-03-10').toISOString(),
    shippingAddress: {
      name: 'Test User',
      address: '123 ByteDance Road, Chaoyang District, Beijing',
      phone: '13800138000'
    }
  },
  {
    id: 'ord-3',
    userId: 'user2',
    productId: 'prod4',
    productName: 'Canvas Tote Bag',
    pointsSpent: 40,
    status: 'processing',
    createdAt: new Date('2025-03-15').toISOString(),
    shippingAddress: {
      name: 'Alice Smith',
      address: '456 Pudong Road, Pudong District, Shanghai',
      phone: '13900139000'
    }
  },
  {
    id: 'ord-4',
    userId: 'user1',
    productId: 'prod7',
    productName: '10000mAh Power Bank',
    pointsSpent: 60,
    status: 'completed',
    createdAt: new Date('2025-03-20').toISOString(),
    shippingAddress: {
      name: 'Test User',
      address: '123 ByteDance Road, Chaoyang District, Beijing',
      phone: '13800138000'
    }
  },
  {
    id: 'ord-5',
    userId: 'user3',
    productId: 'prod9',
    productName: 'Notebook Set',
    pointsSpent: 35,
    status: 'completed',
    createdAt: new Date('2025-03-25').toISOString(),
    shippingAddress: {
      name: 'Bob Johnson',
      address: '789 XDE Road, Haidian District, Beijing',
      phone: '13700137000'
    }
  },
  {
    id: 'ord-6',
    userId: 'user4',
    productId: 'prod8',
    productName: 'Wireless Earbuds',
    pointsSpent: 120,
    status: 'completed',
    createdAt: new Date('2025-04-01').toISOString(),
    shippingAddress: {
      name: 'Carol Williams',
      address: '101 SPADE Road, Chaoyang District, Beijing',
      phone: '13600136000'
    }
  },
  {
    id: 'ord-7',
    userId: 'user2',
    productId: 'prod10',
    productName: 'Baseball Cap',
    pointsSpent: 50,
    status: 'processing',
    createdAt: new Date('2025-04-05').toISOString(),
    shippingAddress: {
      name: 'Alice Smith',
      address: '456 Pudong Road, Pudong District, Shanghai',
      phone: '13900139000'
    }
  },
  {
    id: 'ord-8',
    userId: 'user4',
    productId: 'prod15',
    productName: 'Bluetooth Speaker',
    pointsSpent: 90,
    status: 'pending',
    createdAt: new Date('2025-04-10').toISOString(),
    shippingAddress: {
      name: 'Carol Williams',
      address: '101 SPADE Road, Chaoyang District, Beijing',
      phone: '13600136000'
    }
  }
];

// DOM元素选择.
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinksList = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section');
const hero = document.querySelector('.hero');
const animationContainers = document.querySelectorAll('.animation-container');
const scrollProgress = document.getElementById('scrollProgress');
const redeemPlatform = document.querySelector('.redeem-platform');
const profileContent = document.querySelector('.profile-content');
const ordersTable = document.querySelector('.orders-table');
const profileInfo = document.querySelector('.profile-info');
const profilePoints = document.querySelector('.profile-points');
const infoForm = document.querySelector('.info-form');

// 当前用户（默认使用第一个用户）.
const currentUser = users[0];

// 页面加载完成后执行.
window.addEventListener('DOMContentLoaded', () => {
    // 初始化导航高亮.
    updateNavHighlight();
    
    // 初始化滚动动画.
    initScrollAnimations();
    
    // 初始化微动画.
    initMicroAnimations();
    
    // 初始化打字机效果.
    initTypewriter();
    
    // 动态生成内容.
    generateRedeemContent();
    generateProfileContent();
});

// 打字机效果.
function initTypewriter() {
    const titleElement = document.getElementById('heroTitle');
    const subtitleElement = document.getElementById('heroSubtitle');
    
    if (!titleElement || !subtitleElement) return;
    
    const titleText = titleElement.textContent;
    const subtitleText = subtitleElement.textContent;
    
    // 清空元素内容，准备打字效果.
    titleElement.textContent = '';
    subtitleElement.textContent = '';
    
    // 设置元素宽度为0.
    titleElement.style.width = '0';
    subtitleElement.style.width = '0';
    
    // 开始标题打字效果.
    let titleIndex = 0;
    const typeTitle = setInterval(() => {
        if (titleIndex < titleText.length) {
            titleElement.textContent += titleText.charAt(titleIndex);
            titleElement.style.width = titleElement.scrollWidth + 'px';
            titleElement.style.opacity = '1';
            titleIndex++;
        } else {
            clearInterval(typeTitle);
            // 标题完成后开始副标题打字效果.
            setTimeout(() => {
                let subtitleIndex = 0;
                const typeSubtitle = setInterval(() => {
                    if (subtitleIndex < subtitleText.length) {
                        subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
                        subtitleElement.style.width = subtitleElement.scrollWidth + 'px';
                        subtitleElement.style.opacity = '1';
                        subtitleIndex++;
                    } else {
                        clearInterval(typeSubtitle);
                    }
                }, 30);
            }, 500);
        }
    }, 50);
}

// 滚动监听事件.
window.addEventListener('scroll', () => {
    // 更新导航栏样式.
    updateNavbarStyle();
    
    // 更新导航高亮.
    updateNavHighlight();
    
    // 检查元素是否进入视口.
    checkScrollAnimations();
    
    // 更新滚动进度条.
    updateScrollProgress();
});

// 更新滚动进度条.
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
}

// 更新导航栏样式（滚动时）.
function updateNavbarStyle() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// 更新导航高亮.
function updateNavHighlight() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// 平滑滚动.
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // 关闭移动端菜单.
            if (window.innerWidth <= 768) {
                navLinksList.classList.remove('open');
            }
        }
    });
});

// 移动端菜单切换.
mobileMenu.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

// 窗口大小变化时重置移动端菜单.
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinksList.classList.remove('open');
        mobileMenu.classList.remove('open');
    }
});

// 为元素添加进入视口的动画效果.
function addScrollAnimation(element, delay = 0, animation = 'fadeInUp') {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `${animation} 0.6s ease ${delay}s forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    observer.observe(element);
}

// 滚动动画初始化.
function initScrollAnimations() {
    // 为所有区块添加基本的淡入上移动画.
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Hero区域立即显示.
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
    
    // 为各个区块的内部元素添加更精细的动画.
    const pillarCards = document.querySelectorAll('.pillar-card');
    pillarCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.95)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.15}s`;
    });
    
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.15}s`;
    });
    
    const rewardItems = document.querySelectorAll('.reward-item');
    rewardItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9) rotateY(-10deg)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.15}s`;
    });
    
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        item.style.transitionDelay = `${index * 0.15}s`;
    });
}

// 检查元素是否进入视口.
function checkScrollAnimations() {
    const windowHeight = window.innerHeight;
    
    // 更新区块动画.
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            
            // 当区块进入视口时，触发内部元素的动画.
            const pillarCards = section.querySelectorAll('.pillar-card');
            if (pillarCards.length > 0) {
                pillarCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, index * 150);
                });
            }
            
            const stepItems = section.querySelectorAll('.step-item');
            if (stepItems.length > 0) {
                stepItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 150);
                });
            }
            
            const rewardItems = section.querySelectorAll('.reward-item');
            if (rewardItems.length > 0) {
                rewardItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1) rotateY(0)';
                    }, index * 150);
                });
            }
            
            const faqItems = section.querySelectorAll('.faq-item');
            if (faqItems.length > 0) {
                faqItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 150);
                });
            }
        }
    });
}

// 微动画初始化.
function initMicroAnimations() {
    animationContainers.forEach((container, index) => {
        // 为每个动画容器添加延迟，创建序列效果.
        container.style.animationDelay = `${index * 0.2}s`;
        container.style.opacity = '0';
        container.style.transform = 'scale(0.8)';
        container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // 当动画容器进入视口时播放动画.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(container);
    });
}

// 添加鼠标跟随效果.
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// 为字符元素添加浮动效果.
const characters = document.querySelectorAll('.character');
characters.forEach(char => {
    char.addEventListener('mouseenter', () => {
        char.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    char.addEventListener('mouseleave', () => {
        char.style.transform = 'translateY(0) scale(1)';
    });
});

// 为按钮添加波纹效果.
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// 为动画元素添加更复杂的JavaScript控制.
function enhanceAnimations() {
    // 动画1: Pass出现的增强效果.
    const animation1 = document.getElementById('animation-1');
    if (animation1) {
        let isHovered = false;
        
        animation1.addEventListener('mouseenter', () => {
            isHovered = true;
            animatePass();
        });
        
        animation1.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        function animatePass() {
            if (!isHovered) return;
            
            const pass = animation1.querySelector('.spade-pass');
            if (pass) {
                pass.style.animation = 'none';
                // 强制重排.
                pass.offsetHeight;
                pass.style.animation = 'passAppear 3s ease-in-out infinite';
            }
            
            setTimeout(animatePass, 3000);
        }
    }
    
    // 动画2: PC硬币的增强效果.
    const animation2 = document.getElementById('animation-2');
    if (animation2) {
        let isHovered = false;
        
        animation2.addEventListener('mouseenter', () => {
            isHovered = true;
            animateCoin();
        });
        
        animation2.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        function animateCoin() {
            if (!isHovered) return;
            
            const coin = animation2.querySelector('.pc-coin');
            if (coin) {
                coin.style.animation = 'none';
                coin.offsetHeight;
                coin.style.animation = 'coinBounce 2s ease-in-out infinite';
            }
            
            setTimeout(animateCoin, 2000);
        }
    }
    
    // 动画3: BP徽章的增强效果.
    const animation3 = document.getElementById('animation-3');
    if (animation3) {
        let isHovered = false;
        
        animation3.addEventListener('mouseenter', () => {
            isHovered = true;
            animateBadge();
        });
        
        animation3.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        function animateBadge() {
            if (!isHovered) return;
            
            const badge = animation3.querySelector('.bp-badge');
            if (badge) {
                badge.style.animation = 'none';
                badge.offsetHeight;
                badge.style.animation = 'badgeSpin 3s linear infinite';
            }
            
            setTimeout(animateBadge, 3000);
        }
    }
    
    // 动画4: 礼物盒的增强效果.
    const animation4 = document.getElementById('animation-4');
    if (animation4) {
        let isHovered = false;
        
        animation4.addEventListener('mouseenter', () => {
            isHovered = true;
            animateGift();
        });
        
        animation4.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        function animateGift() {
            if (!isHovered) return;
            
            const gift = animation4.querySelector('.gift-box');
            if (gift) {
                gift.style.animation = 'none';
                gift.offsetHeight;
                gift.style.animation = 'giftOpen 3s ease-in-out infinite';
            }
            
            setTimeout(animateGift, 3000);
        }
    }
}

// 初始化增强动画.
enhanceAnimations();

// FAQ折叠功能.
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // 切换当前FAQ的激活状态.
            question.classList.toggle('active');
            
            if (answer && answer.classList.contains('faq-answer')) {
                answer.classList.toggle('active');
            }
            
            // 关闭其他FAQ.
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    const otherAnswer = otherQuestion.nextElementSibling;
                    if (otherAnswer && otherAnswer.classList.contains('faq-answer')) {
                        otherAnswer.classList.remove('active');
                    }
                }
            });
        });
    });
}

// 初始化FAQ折叠功能.
initFAQ();

// 添加页面加载动画.
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 动态生成兑换平台内容.
async function generateRedeemContent() {
    if (!redeemPlatform) return;
    
    // 显示加载状态.
    redeemPlatform.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Loading products...</p></div>';
    
    try {
        // 直接使用本地模拟数据.
        const productList = products;
        
        // 清空现有内容.
        redeemPlatform.innerHTML = '';
        
        // 根据产品数据生成卡片.
        productList.forEach(product => {
            const card = document.createElement('div');
            card.className = 'redeem-card';
            
            // 设置卡片内容.
            card.innerHTML = `
                <div class="redeem-card-header">
                    <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                    <h3>${product.name}</h3>
                    <span class="points-required">${product.pcPoints} PC</span>
                </div>
                <div class="redeem-card-content">
                    <p>${product.description}</p>
                    <small class="stock-info">Stock: ${product.stock}</small>
                </div>
                <div class="redeem-card-footer">
                    <button class="btn btn-primary" onclick="redeemProduct('${product.id}')">
                        ${currentUser.pcPoints >= product.pcPoints && product.stock > 0 ? 'Redeem' : 'Insufficient Points'}
                    </button>
                </div>
            `;
            
            // 如果积分不足或库存为0，禁用按钮.
            const button = card.querySelector('button');
            if (currentUser.pcPoints < product.pcPoints || product.stock <= 0) {
                button.disabled = true;
                button.classList.add('btn-disabled');
            }
            
            // 添加到兑换平台.
            redeemPlatform.appendChild(card);
        });
    } catch (error) {
        console.error('Error generating redeem content:', error);
        redeemPlatform.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i><p>Failed to load products</p></div>';
    }
}

// 动态生成个人资料内容.
function generateProfileContent() {
    if (!profileContent) return;
    
    // 显示加载状态.
    if (profileInfo) {
        profileInfo.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Loading profile...</p></div>';
    }
    if (profilePoints) {
        profilePoints.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i></div>';
    }
    if (ordersTable) {
        ordersTable.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Loading orders...</p></div>';
    }
    if (infoForm) {
        infoForm.innerHTML = '<div style="text-align: center; padding: 40px;"><i class="fas fa-spinner fa-spin fa-2x"></i><p>Loading profile info...</p></div>';
    }
    
    // 直接使用模拟数据，避免API调用问题.
    setTimeout(() => {
        try {
            const userData = currentUser;
            
            // 更新个人信息.
            if (profileInfo) {
                profileInfo.innerHTML = `
                    <div class="profile-avatar">
                        <i class="fas fa-user-circle" style="font-size: 4rem; color: var(--primary-color);"></i>
                    </div>
                    <div class="profile-details">
                        <h3>${userData.name}</h3>
                        <p class="profile-id">ID: ${userData.xdeId}</p>
                    </div>
                `;
            }
            
            // 更新积分信息.
            if (profilePoints) {
                profilePoints.innerHTML = `
                    <div class="points-card">
                        <div class="points-type">PC Points</div>
                        <div class="points-amount">${userData.pcPoints}</div>
                    </div>
                    <div class="points-card">
                        <div class="points-type">BP Points</div>
                        <div class="points-amount">${userData.bpPoints || 0}</div>
                    </div>
                `;
            }
            
            // 获取用户订单.
            const userOrders = orders.filter(order => order.userId === userData.id);
            
            // 更新订单信息.
            if (ordersTable) {
                // 保留表头.
                const orderHeader = document.createElement('div');
                orderHeader.className = 'order-header';
                orderHeader.innerHTML = `
                    <span>Order ID</span>
                    <span>Reward</span>
                    <span>Points</span>
                    <span>Status</span>
                    <span>Date</span>
                `;
                
                // 清空现有内容.
                ordersTable.innerHTML = '';
                ordersTable.appendChild(orderHeader);
                
                // 生成订单列表.
                userOrders.forEach(order => {
                    const orderItem = document.createElement('div');
                    orderItem.className = 'order-item';
                    
                    // 格式化日期.
                    const orderDate = new Date(order.createdAt).toISOString().split('T')[0];
                    
                    orderItem.innerHTML = `
                        <span data-label="Order ID">#${order.id}</span>
                        <span data-label="Reward">${order.productName}</span>
                        <span data-label="Points">${order.pointsSpent} PC</span>
                        <span data-label="Status" class="status-${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                        <span data-label="Date">${orderDate}</span>
                    `;
                    
                    ordersTable.appendChild(orderItem);
                });
            }
            
            // 更新个人信息表单.
            if (infoForm) {
                infoForm.innerHTML = `
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" value="${userData.name}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" value="${userData.email}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Department</label>
                        <input type="text" value="${userData.profile.department}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Position</label>
                        <input type="text" value="${userData.profile.position}" readonly>
                    </div>
                    <div class="form-group">
                        <label>Join Date</label>
                        <input type="text" value="${new Date(userData.profile.joinDate).toISOString().split('T')[0]}" readonly>
                    </div>
                    <button class="btn btn-secondary">Edit Profile</button>
                `;
            }
        } catch (error) {
            console.error('Error generating profile content:', error);
            
            // 显示错误信息.
            if (profileInfo) {
                profileInfo.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i><p>Failed to load profile</p></div>';
            }
            if (profilePoints) {
                profilePoints.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i></div>';
            }
            if (ordersTable) {
                ordersTable.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i><p>Failed to load orders</p></div>';
            }
            if (infoForm) {
                infoForm.innerHTML = '<div style="text-align: center; padding: 40px; color: red;"><i class="fas fa-exclamation-triangle"></i><p>Failed to load profile info</p></div>';
            }
        }
    }, 500); // 模拟加载延迟.
}

// 兑换产品功能.
function redeemProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // 检查积分和库存.
    if (currentUser.pcPoints < product.pcPoints) {
        alert('Insufficient PC points!');
        return;
    }
    
    if (product.stock <= 0) {
        alert('Product is out of stock!');
        return;
    }
    
    // 执行兑换.
    currentUser.pcPoints -= product.pcPoints;
    product.stock -= 1;
    
    // 创建新订单.
    const newOrder = {
        id: 'ord-' + Date.now(),
        userId: currentUser.id,
        productId: product.id,
        productName: product.name,
        pointsSpent: product.pcPoints,
        status: 'pending',
        createdAt: new Date().toISOString(),
        shippingAddress: {
            name: currentUser.name,
            address: '123 ByteDance Road, Chaoyang District, Beijing',
            phone: '13800138000'
        }
    };
    
    // 添加到订单列表.
    orders.push(newOrder);
    
    // 更新UI.
    generateRedeemContent();
    generateProfileContent();
    
    // 显示成功消息.
    alert(`Successfully redeemed ${product.name}!`);
}

// API调用函数（实际后端API）.
async function fetchFromAPI(endpoint, method = 'GET', data = null) {
    try {
        const baseUrl = 'http://localhost:3001';
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        
        if (data) {
            options.body = JSON.stringify(data);
        }
        
        const response = await fetch(`${baseUrl}${endpoint}`, options);
        const result = await response.json();
        
        return { success: response.ok, data: result };
    } catch (error) {
        console.error('API Error:', error);
        // 如果API调用失败，回退到模拟数据.
        return fetchFromMockAPI(endpoint);
    }
}

// 模拟API调用（作为后备）.
async function fetchFromMockAPI(endpoint) {
    try {
        // 模拟API调用延迟.
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 根据端点返回相应的数据.
        if (endpoint === '/api/products') {
            return { success: true, data: products };
        } else if (endpoint === '/api/users') {
            return { success: true, data: users };
        } else if (endpoint === '/api/orders') {
            return { success: true, data: orders };
        } else if (endpoint.startsWith('/api/users/')) {
            // 处理单个用户请求.
            return { success: true, data: currentUser };
        } else if (endpoint.startsWith('/api/orders/user/')) {
            // 处理用户订单请求.
            return { success: true, data: orders.filter(order => order.userId === currentUser.id) };
        } else {
            return { success: false, error: 'Endpoint not found' };
        }
    } catch (error) {
        console.error('Mock API Error:', error);
        return { success: false, error: 'Failed to fetch data' };
    }
}