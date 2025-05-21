document.addEventListener('DOMContentLoaded', function() {
    // Add styles for the carousels
    const style = document.createElement('style');
    style.textContent = `
        .diamond-features {
            padding: 60px 0;
            background-color: #f8f9fa;
            overflow: hidden;
        }
        
        .features-header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .diamond-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 20px;
        }
        
        .feature-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
            opacity: 0.5;
            transform: scale(0.9);
        }
        
        .feature-card.swiper-slide-active {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        .feature-title {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 15px;
        }
        
        .feature-image {
            margin-bottom: 15px;
            height: 200px;
            overflow: hidden;
            border-radius: 8px;
        }
        
        .feature-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .feature-desc {
            color: #666;
            font-size: 16px;
            line-height: 1.5;
        }
        
        .diamondSwiper {
            padding: 20px 0;
            position: relative;
            overflow: hidden;
        }
        
        .diamondSwiper .swiper-wrapper {
            align-items: center;
        }
        
        .diamondSwiper .swiper-pagination {
            position: relative;
            margin-top: 20px;
        }
        
        .diamondSwiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #ccc;
            opacity: 1;
        }
        
        .diamondSwiper .swiper-pagination-bullet-active {
            background: #333;
        }
        
        .swiper-1 {
            padding: 20px 0;
            position: relative;
            overflow: hidden;
        }
        
        .swiper-1 .swiper-wrapper {
            align-items: center;
        }
        
        .swiper-1 .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 150px;
            opacity: 0.5;
            transform: scale(0.9);
            transition: all 0.3s ease;
        }
        
        .swiper-1 .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
        }
        
        .swiper-1 .swiper-slide img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        
        .swiper-1 .swiper-pagination {
            position: relative;
            margin-top: 20px;
        }
        
        .swiper-1 .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #ccc;
            opacity: 1;
        }
        
        .swiper-1 .swiper-pagination-bullet-active {
            background: #333;
        }
        
        @media (max-width: 768px) {
            .feature-card {
                margin: 0 10px;
            }
            
            .feature-title {
                font-size: 20px;
            }
            
            .feature-image {
                height: 150px;
            }
            
            .swiper-1 .swiper-slide {
                height: 100px;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize Diamond Features Swiper
    const diamondSwiper = new Swiper('.diamondSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    // Initialize Approval Swiper
    const approvalSwiper = new Swiper('.swiper-1', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
});
